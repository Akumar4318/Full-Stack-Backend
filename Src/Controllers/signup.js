const User = require('../Models/UserSchema');
const bcrypt = require('bcrypt'); 

exports.userSignUp = async (req, res) => {
    try {
        const {email,username,password } = req.body;
        console.log(username)

       
        const hashedPassword = await bcrypt.hash(password,10)
        console.log(hashedPassword)

       
        const response = await User.create({email,username,password: hashedPassword });
        console.log(response)

        res.status(200).json({
            success: true,
            message: "User signed up successfully",
            data: response,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Problem occurred while signing up",
            error: error.message
        });
    }
};
