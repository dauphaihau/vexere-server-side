const {User, sequelize} = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const gravatarUrl = require('gravatar');

const register = async (req, res) => {
    const {name, email, password, numberPhone} = req.body;
    try {
        const avatarUrl = gravatarUrl.url(email, {s: '100', r: 'x', d: 'retro'}, true);
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        const newUser = await User.create(
            {
                name, email,
                password: hashPassword,
                numberPhone,
                avatar: avatarUrl
            }
        );
        res.status(201).send(newUser)
    } catch (err) {
        res.status(500).send(err)
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({where: {email}});
    if (user) {
        const isAuth = bcrypt.compareSync(password, user.password);
        console.log("is auth: ", isAuth);
        if (isAuth) {
            const token = jwt.sign(
                {email: user.email, type: user.type},
                'abcdef',
                {expiresIn: 60 * 60}
            );
            res.status(200).send({message: 'login successfully', token})
        } else {
            res.status(500).send({message: 'incorrect email or password'})
        }
    } else {
        res.status(404).send('not found email')
    }
}

const uploadAvatar = async (req, res) => {
    const {user, file} = req;
    const urlImage = `http://localhost:1111/${file.path}`;
    const userFound = await User.findOne({
        where: {
            email: user.email
        }
    });
    userFound.avatar = urlImage;
    await userFound.save();
    res.send(file);
}

const getAllTripUser = async (req, res) => {
    try {
        const [result] = await sequelize.query(
            `SELECT * FROM users
            INNER JOIN tickets ON users.id = tickets.user_id
            INNER JOIN trips ON trips.id = tickets.trip_id
            INNER JOIN Stations AS fromSta ON fromSta.id = Trips.fromStation
            INNER JOIN Stations AS toSta ON toSta.id = Trips.toStation;
            `
        );
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    register,
    login,
    uploadAvatar,
    getAllTripUser
};
