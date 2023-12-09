const Users = require('../models/users');

exports.postAddUser = async (req, res, next) => {
    try {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const user = new Users(null, name, phone, email);

    console.log(req.body)

    const data = await Users.create({
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
        const data = await Users.findAll();
        res.status(201).json({allUserDetails: data});
    } catch (err) {
        console.log(err);
    }

};

exports.deleteUser = async (req, res, next) => {
    try{
        console.log(req.body);
        const userId = req.body.id;

        Users.findByPk(userId)
        .then(user => {
            return user.destroy();
        })
        .then(result => {
            console.log('Destroyed Users');
        })
    } catch (err) {
        console.log(err);
    }
};