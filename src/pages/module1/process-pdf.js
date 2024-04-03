let pdfjs;

(async function () { 
 pdfjs = await import("pdfjs-dist/build/pdf"); 
 const pdfjsWorker = await import("pdfjs-dist/build/pdf.worker.entry");
  pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker; 
})();

export async function extractDataFromPdf(pdfUrl) {
    const loadingTask = pdfjs.getDocument(pdfUrl);
    const pdf = await loadingTask.promise;

    let fullText = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map(item => item.str).join('\n');
      
      let texts = textContent.items.map(item => {
        return {height: item.height, str: item.str}
      })

      const phone = texts.find(text => text.str.match(/\d{3}-\d{7}/i)).str
      const address = texts[texts.length - 1].str;

      texts = texts.sort((a, b) => b.height - a.height);
      const name = texts[0].str;

      return {name, phone, address};

      fullText += pageText;
    }
}
