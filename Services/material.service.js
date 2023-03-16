const Material = require("../models/addMaterial.model");

exports.createMaterialService = async (data) => {
    const material = await Material.create(data);
    return material;
};
exports.getMaterialService = async () => {
    const material = await Material.find({});
    return material;
};
exports.deleteMaterialService = async (id) => {
    const material = await Material.findByIdAndDelete({ _id: id });
    return material;
};