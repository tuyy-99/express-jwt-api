const asyncHandler = require('express-async-handler');
const User = require('../models/User');


const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
});

module.exports = {
    getMe,
};
