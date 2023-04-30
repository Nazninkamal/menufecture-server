const { createFeedbackService, getFeedbackService } = require("../Services/feedbacks.service");
const User = require("../models/user_module");


exports.createFeedback = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.user.email });
        const feedback = await createFeedbackService({ ...req.body,user:user._id });

        res.status(200).json({
            result: feedback,
            status: "success",
            message: "Feedback create is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};
exports.getFeedback = async (req, res) => {
    try {
        const feedbacks = await getFeedbackService();

        res.status(200).json({
            result: feedbacks,
            status: "success",
            message: "Get Feedback is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};
