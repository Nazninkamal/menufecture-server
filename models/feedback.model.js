const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const createFeedbackSchema = mongoose.Schema({
    feedback: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        require: true
    },
    user: {
        type: ObjectId,
        require: true,
        ref: 'User'
    },
},
    {
        timestamps: true,
    }
);

const Feedback = mongoose.model('Feedback', createFeedbackSchema);

module.exports = Feedback;