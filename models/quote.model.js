const mongoose = require("mongoose");
// const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const quoteSchema = mongoose.Schema({
    project: {
        type: ObjectId,
        require: [true, 'Project id is required'],
        ref: "Project"
    },
    user: {
        type: ObjectId,
        require: true,
        ref: "User"
    },
    email: String,
    quoteTitle: {
        type: String,
        trim: true,
        minLength: [3, "Title must be at least 3 characters."],
    },
    type: {
        type: String,
        require: true
    },
    material: {
        type: String,
    },
    resolution: {
        type: String,
    },
    orientation: {
        type: String,
    },
    finish: {
        type: String,
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    threeDFile: {
        type: Object,
        require: [true, "File is required"]
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
    },
    orderStatus:{
        type: String,
        enum: ["order", "payment"],
    }
},
    {
        timestamps: true,
    }
);

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote