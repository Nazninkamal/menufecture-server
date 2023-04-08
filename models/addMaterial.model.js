const mongoose = require("mongoose");


const addMaterialSchema = mongoose.Schema({
    material: {
        type: String,
        require: true
    },
    resolutionHighRes: {
        type: String,
        require: true
    },
    resolutionNormal: {
        type: String,
        require: true
    },
    finishStandard: {
        type: String,
        require: true
    },
    finishNormal: {
        type: String,
        require: true
    },
    orientationLetUsDecide: {
        type: String,
        require: true
    },
    orientationCustom: {
        type: String,
        require: true
    },

},
    {
        timestamps: true,
    }
);

const Material = mongoose.model('Material', addMaterialSchema);

module.exports = Material;