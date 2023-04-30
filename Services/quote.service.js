const Quote = require("../models/quote.model");




exports.addQuoteService = async (ProjectData) => {
    const quote = await Quote.create(ProjectData);
    return quote;
};
exports.getMyQuoteService = async (id) => {
    const quotes = await Quote.find({ project: id }).sort('-createdAt');
    return quotes;
};
exports.getMyAllQuoteService = async (email) => {
    const quotes = await Quote.find({ email }).sort('-createdAt');
    return quotes;
};
exports.getMyAllOrderQuoteService = async () => {
    const quotes = await Quote.find({}).populate("supplier").populate('user').sort('-createdAt');
    return quotes;
};
exports.getMySingleQuoteService = async (id) => {
    const quotes = await Quote.findOne({ _id: id }).populate('user');
    return quotes;
};
exports.downloadDocumentService = async (id) => {
    const document = await Quote.findById({ _id: id }).populate("user");

    return document;
};

exports.deleteMyQuoteService = async (id) => {
    const quotes = await Quote.deleteMany({ projectId: id });
    return quotes;
};
exports.deleteSingleQuoteService = async (id) => {
    const quotes = await Quote.deleteOne({ _id: id });
    return quotes;
};




exports.updateMyQuoteService = async (id, data) => {

    const quote = await Quote.findByIdAndUpdate({ _id: id }, data,
        {

            runValidators: true,
        }
    );
    return quote;
};



exports.uploadTheeDFileService = async (id, fileData) => {

    const file = await Quote.updateOne({ _id: id }, { threeDFile: fileData },
        {
            runValidators: true,
        }
    );
    return file;
};
