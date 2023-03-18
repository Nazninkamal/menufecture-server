const Mongoose = require("mongoose");
const validator = require("validator");




const supplierSchema = Mongoose.Schema({
    fullName: {
        type: String,
        require: true,
        trim: true,
    },

    email: {
        type: String,
        require: true,
        trim: true,
        validate: [validator.isEmail, "Provide a valid Email"],

    },
    company: {
        type: String,
        require: true,
        trim: true,
    },
    country: {
        type: String,
        require: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        require: true,
        trim: true,
    },
    postalCode: {
        type: String,
        require: true,
        trim: true,
    },
    language: {
        type: String,
        require: true,
        trim: true,
    },
    role: {
        type: String,
        default: 'user',
        enum: ["user", "admin", "supplier"],
    },

    websiteLink: String,
    productMaterial: String,
    productCategory: String,
    profileImg: Object
    ,

},
    {
        timestamps: true,
    }
);










const Supplier = Mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;