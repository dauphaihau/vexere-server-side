const express = require('express');
const userRouter = express.Router();

const {register, login, uploadAvatar, getAllTripUser} = require("../controllers/user.controllers");
const {uploadImage} = require("../middlewares/upload/upload-image");
const {authenticate} = require("../middlewares/auth/authenticate");

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/upload-avatar', authenticate, uploadImage('user'), uploadAvatar);
userRouter.post('/all-trip', getAllTripUser);

module.exports = {
    userRouter,
};
