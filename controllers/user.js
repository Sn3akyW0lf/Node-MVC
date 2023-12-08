const User = require('../models/user');

exports.postAddUser = async (req, res, next) => {
    try {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const user = new User(null, name, phone, email);

    console.log(req.body)

    const data = await User.create({
        name: name,
        phone: phone,
        email: email
    });
    res.status(201).json({newUserDetail: data});
    } catch (err) {
        console.log(err);
    }
};

exports.getAllUsers = async (req, res, next) => {
    try {
        const data = await User.findAll();
        res.status(201).json({allUserDetails: data});
    } catch (err) {
        console.log(err);
    }

};

exports.deleteUser = async (req, res, next) => {
    try{
        console.log(req.body);
        const userId = req.body.id;

        User.findByPk(userId)
        .then(user => {
            return user.destroy();
        })
        .then(result => {
            console.log('Destroyed User');
        })
    } catch (err) {
        console.log(err);
    }
};