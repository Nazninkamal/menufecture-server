const User = require("../models/user_module");
var html_to_pdf = require('html-pdf-node');

const { addQuoteService, updateMyQuoteService, uploadTheeDFileService, getMyQuoteService, getMySingleQuoteService, deleteSingleQuoteService, downloadDocumentService, getMyAllQuoteService,getMyAllOrderQuoteService } = require("../Services/quote.service");
const documentPDF = require("../utils/Document");


exports.addQuote = async (req, res) => {
    try {
        const { id } = req.params;
        const email = req.user.email;
        const user = await User.findOne({ email });


        if (!user) {
            return res.status(401).json({
                result: quote,
                status: "fail",
                message: "You are not authenticated",
            });
        }




        const type = req?.body?.type

        if (!req.file) {
            return res.suite(401).json({
                status: 'fail',
                error: 'Pleas add a file'
            })
        }
        const uniqueSuffix = Math.round(Math.random() * 1E5) + '-' + Math.round(Math.random() * 1E5);
        const fileName = await req?.file?.filename;
        const host = await req.protocol + '://' + req.get('host');
        const fileURL = host + "/threeDFiles/" + fileName;

        const newFile = await { ...req.file, fileURL };

        const newQuote = { quoteTitle: uniqueSuffix, threeDFile: newFile, user: user._id, email: user.email, project: id, type };

        const quote = await addQuoteService(newQuote);
        res.status(200).json({
            result: quote,
            status: "success",
            message: "Quote create is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};


exports.getMyAllQuotes = async (req, res) => {
    try {
        const email = req.user.email;

        const quotes = await getMyAllQuoteService(email);
        res.status(200).json({
            result: quotes,
            status: "success",
            message: "Get Quote  is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};
exports.getMyAllOrderQuotes = async (req, res) => {
    try {
    

        const quotes = await getMyAllOrderQuoteService();
        res.status(200).json({
            result: quotes,
            status: "success",
            message: "Get Quote  is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};


exports.getMyQuotes = async (req, res) => {
    try {
        const { id } = req.params;

        const quotes = await getMyQuoteService(id);
        res.status(200).json({
            result: quotes,
            status: "success",
            message: "Get Quote  is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};
exports.getMySingleQuotes = async (req, res) => {
    try {
        const { id } = req.params;

        const quote = await getMySingleQuoteService(id);
        res.status(200).json({
            result: quote,
            status: "success",
            message: "Single Quote get is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};
exports.updateMySingleQuotes = async (req, res) => {
    try {
        const { id } = req.params;

        const quote = await updateMyQuoteService(id, req.body);
        res.status(200).json({
            result: quote,
            status: "success",
            message: "Update Quote is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};
exports.deleteMySingleQuotes = async (req, res) => {
    try {
        const { id } = req.params;

        const quote = await deleteSingleQuoteService(id);
        res.status(200).json({
            result: quote,
            status: "success",
            message: "Delete Quote is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};

exports.uploadTheeDFile = async (req, res) => {
    try {

        if (!req.file) {
            return res.suite(401).json({
                status: 'fail',
                error: 'Pleas add a file'
            })
        }

        const { id } = req.params;

        const fileName = await req?.file?.filename;
        const host = req.protocol + '://' + req.get('host');
        const fileURL = host + "/threeDFiles/" + fileName;

        const newData = await { ...req.file, fileURL };


        const quote = await uploadTheeDFileService(id, newData);


        res.status(200).json({
            result: quote,
            status: "success",
            message: "file upload is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};


exports.downLoadDocument = async (req, res) => {
    try {

        const { id } = req.params;

        const data = await downloadDocumentService(id);
      

        let options = { format: 'A4' };
        let file = { content: documentPDF(data) };

        await html_to_pdf.generatePdf(file, options).then(pdfBuffer => {

            res.status(200).end(pdfBuffer)

        });



    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
}