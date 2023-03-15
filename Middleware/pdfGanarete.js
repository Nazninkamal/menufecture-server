const pdfMakePrinter = require('pdfmake/src/printer');

const generatePdf = (docDefinition, callback) => {
  try {
    // const fontDescriptors = { ... };
    const printer = new pdfMakePrinter(fontDescriptors);
    const doc = printer.createPdfKitDocument(docDefinition);
    
    let chunks = [];
   

    doc.on('data', (chunk) => {
      chunks.push(chunk);
    });

    doc.on('end', () => {
      result = Buffer.concat(chunks);
      callback('data:application/pdf;base64,' + result.toString('base64'));
    });
    
    doc.end();
    
  } catch(err) {
    throw(err);
  }
};

