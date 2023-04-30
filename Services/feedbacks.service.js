const Feedback = require("../models/feedback.model");

exports.createFeedbackService = async (data) => {
    const feedback = await Feedback.create(data);
    return feedback;
};
exports.getFeedbackService = async () => {
    const feedback = await Feedback.find({}).populate('user').sort('-createdAt');
    return feedback;
};
