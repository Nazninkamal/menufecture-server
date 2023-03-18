const bcrypt = require('bcryptjs');
const Supplier = require('../models/supplier.model');
const User = require("../models/user_module");



exports.findAllUserService = async () => {
    return await User.find({});
};



exports.updateDetailsService = async (userInfo, email) => {

    const user = await User.findOneAndUpdate(
        { email: email },
        userInfo,
        {
            runValidators: true,
        });

    return user;
};


exports.registrationService = async (userInfo) => {
    const hashedPassword = await bcrypt.hash(userInfo.password, 10);
    let newUser = new User({ ...userInfo });
    newUser.password = hashedPassword;
    newUser.confirmPassword = undefined;

    const user = await User.create(newUser);
    return user;
};




exports.findUserByEmail = async (email) => {
    return await User.findOne({ email });
};



exports.findUserByToken = async (token) => {
    return await User.findOne({ confirmationToken: token });
};


exports.ApplyForSupplierService = async (data) => {
    return await Supplier.create(data);
};
exports.getApplyForSupplierService = async () => {

    return await Supplier.find({});
};
exports.getApplyForSingleSupplierService = async (email) => {

    return await Supplier.findOne({ email });
};
exports.makeAddApplyForSupplierService = async (data) => {
    const user = await Supplier.updateOne({ email: data.email },
        { role: data.role },
        {
            runValidators: true,
        }
    );

    return await User.updateOne({ email: data.email },
        { role: data.role },
        {
            runValidators: true,
        });
};


exports.deleteApplyForSupplierService = async (email) => {

    return await Supplier.deleteOne({ email })

};