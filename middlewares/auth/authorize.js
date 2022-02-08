const authorize = (arrType) => (req, res, next) => {
    const {user} = req;
    if (arrType.findIndex(ele => ele === user.type) > -1) {
        next();
    } else {
        res.status(403).send("You are not authorized")
    }
}

module.exports = {
    authorize
};
