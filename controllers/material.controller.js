const { createMaterialService, getMaterialService } = require("../Services/material.service");


exports.createMaterial = async (req, res) => {
    try {
        const material = await createMaterialService(req.body);

        res.status(200).json({
            result: material,
            status: "success",
            message: "Material create is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};
exports.getMaterial = async (req, res) => {
    try {
        const material = await getMaterialService();

        res.status(200).json({
            result: material,
            status: "success",
            message: "Get Material is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};