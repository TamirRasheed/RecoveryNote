const User = require('../models/User');

const userSignUp = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();

        res.json({success: true})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const logInCheck = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(user){
            res.json(req.params.id);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    userSignUp,
    logInCheck,
};