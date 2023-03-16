const mongoose = require("mongoose");


const addMaterialSchema = mongoose.Schema({
    material: String,

    resolution: [
        {
            title: String,
            price: Number
        },
        {
            title: String,
            price: Number
        }
    ]
    ,
    finish: [
        {
            title: String,
        }
    ],
    orientation: [
        {
            title: String,
        }
    ]

},
    {
        timestamps: true,
    }
);

const Material = mongoose.model('Material', addMaterialSchema);

module.exports = Material;