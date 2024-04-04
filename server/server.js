const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("We're connected to the database!");
});

app.use(cors());
app.use(express.json());

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    access: { type: String, required: true }
});

const Login = mongoose.model('Login', LoginSchema);

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const login = await Login.findOne({ email });  // Use the Login model here
        if (!login || login.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        res.json({ message: 'Logged in successfully', status:login.access });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.use('/', router);

const port = 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));