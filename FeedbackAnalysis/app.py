from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.decomposition import LatentDirichletAllocation
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
import matplotlib.pyplot as plt
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize
import numpy as np
import nltk
import google.generativeai as genai

app = Flask(__name__)
CORS(app)
nltk.download('punkt')
nltk.download('wordnet')
nltk.download('stopwords')
# Text preprocessing
stop_words = set(stopwords.words('english'))
lemmatizer = WordNetLemmatizer()

genai.configure(api_key="AIzaSyDn4IdGZJConIPF_Zb_n_40JD74X2zxN8U")
model = genai.GenerativeModel('gemini-pro')

def preprocess_text(text):
    tokens = word_tokenize(text.lower())
    tokens = [lemmatizer.lemmatize(token) for token in tokens if token.isalpha() and token not in stop_words]
    return ' '.join(tokens)

# Define lda_model and feature_names at the module level
lda_model = None
feature_names = None

@app.route('/api/data', methods=['GET'])
def get_data():
    global lda_model, feature_names

    df = pd.read_csv('Feedbacks.csv')
    train_df, test_df = train_test_split(df, test_size=0.2, random_state=42)
    train_features = train_df['Feedback']
    train_labels = train_df['Senior Rating']
    test_features = test_df['Feedback']
    test_labels = test_df['Senior Rating']

    model = make_pipeline(CountVectorizer(), MultinomialNB())
    model.fit(train_features, train_labels)
    vectorizer = CountVectorizer(stop_words='english', ngram_range=(2, 3))
    data_vectorized = vectorizer.fit_transform(df['Feedback'].astype(str))

    feature_names = vectorizer.get_feature_names_out()
    lda_model = LatentDirichletAllocation(n_components=5).fit(data_vectorized)

    return jsonify({"message": "Data processed successfully"})

@app.route('/api/top_words', methods=['GET'])
def get_top_words():
    # Number of top words for each topic
    n_top_words = 5

    # Check if lda_model is None and call get_data if it is
    if lda_model is None:
        get_data()

    # Extract the top words for each topic
    top_words = {f'topic_{i}': [] for i in range(5)}
    for topic_idx, topic in enumerate(lda_model.components_):
        top_words[f'topic_{topic_idx}'].extend([feature_names[i] for i in topic.argsort()[:-n_top_words - 1:-1]])

    # Return the JSON data
    return jsonify(top_words)

@app.route('/api/top_suggestions', methods=['GET'])
def get_top_suggestions():
    df = pd.read_csv('Feedbacks.csv')
    df['Processed Suggestions'] = df['Suggestion to Improve'].apply(preprocess_text)

    # TF-IDF Vectorization
    vectorizer = TfidfVectorizer()
    X = vectorizer.fit_transform(df['Processed Suggestions'])

    # Clustering
    kmeans = KMeans(n_clusters=3, random_state=42).fit(X)

    # Add cluster labels to the dataframe
    df['Cluster'] = kmeans.labels_

    # Extract common suggestions for each cluster
    top_suggestions = {}
    for i in range(3):
        cluster_df = df[df['Cluster'] == i]
        suggestions = cluster_df['Suggestion to Improve'].value_counts().head().index.tolist()
        text = ' '.join(suggestions)
        summary = model.generate_content("Summarize and/or elaborate the suggestion to improve new employee's onboarding month from this text in point form:" + text + ". It is not needed to add any header lines to your response. Format your response in the form of point: one sentence elaboration, with the point in bold.")
        summary_text = summary.text
        top_suggestions[f'Cluster #{i}'] = {
            'suggestions': suggestions,
            'summary': summary_text
        }
    return jsonify(top_suggestions)

@app.route('/api/feedback_analysis', methods=['GET'])
def get_feedback_analysis():
    df = pd.read_csv('Feedbacks.csv')

    # Calculate the percentage of feedbacks that are positive, neutral, or negative
    positive_feedbacks = df[df['Senior Rating'].isin([4, 5])].shape[0]
    neutral_feedbacks = df[df['Senior Rating'] == 3].shape[0]
    negative_feedbacks = df[df['Senior Rating'].isin([0, 1, 2])].shape[0]

    total_feedbacks = df.shape[0]

    positive_percentage = (positive_feedbacks / total_feedbacks) * 100
    neutral_percentage = (neutral_feedbacks / total_feedbacks) * 100
    negative_percentage = (negative_feedbacks / total_feedbacks) * 100

    feedback_analysis = {
        'Positive': positive_percentage,
        'Neutral': neutral_percentage,
        'Negative': negative_percentage
    }

    return jsonify(feedback_analysis)


if __name__ == "__main__":
    app.run(debug=True)