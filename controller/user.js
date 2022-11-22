const { User } = require('../model/user')
const { Interest } = require('../model/interest')
const { validate } = require('../model/user')
const mongoose = require('mongoose')

exports.postUser = async (req, res, next) => {
    try {
        const user = new User(req.body);
        await user.save()
        res.send(user)

    }
    catch (err) {
        res.send(err)
    }




    // const { error } = validate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

    // const firstname = req.body.firstname;
    // const lastname = req.body.lastname;
    // const email = req.body.email;
    // const gender = req.body.gender;
    // // const interest_id = Interest._id

    // const user = new User({
    //     firstname: firstname,
    //     lastname: lastname,
    //     email: email,
    //     gender: gender,
    //     // interests: Interest._id
    // })
    // // const interest = new Interest({
    // //     name: 'running',
    // //     user: user.id
    // // })
    // // // user.interests.push(interest.id)
    // // interest.save()
    // user.save()
    // res.send(user)

}

exports.getUser = async (req, res, next) => {
    try {
        const users = await User.find()
            .populate({path:'*'})
            .exec()


        res.send({ data: users });
    }
    catch (err) { console.log(err) }
}

exports.getUserData = (req, res, next) => {
    User_intrests.find()
        .populate('userId')
        .populate('interestId')
        .then(user => {
            res.send(user);
        })
        .catch(err => console.log(err))
}

exports.getData = (req, res, next) => {
    const id = req.params.id;
    User_intrests.findById(id)
        .populate('userId')
        .populate('interestId')
        .then(user => {
            res.send(user);
        })
        .catch(err => console.log(err))
}

exports.deleteUser = (req, res, next) => {
    const id = req.params.id;
    User_intrests.findByIdAndRemove(id)
        .then(result => {
            res.send('user deleted')
        })
        .catch(err => console.log(err))
}

exports.postInterest = async (req, res, next) => {
    try {
        const interest = new Interest(req.body);
        await interest.save()

        const user = await User.findById({ _id: interest.user })
        user.posts.push(interest)
        await user.save();

        res.send(user);

    }
    catch (err) {
        res.send(err)
        console.log(err)
    }

    // const name = req.body.name;
    // const userId = User.id;
    // const interest = new Interest({
    //     name: name,
    //     // user: User_id
    // })
    // interest.save()
    //     .then(result => {
    //         res.send(result)
    //     })
    //     .catch(err => console.log(err))

}

exports.getInterest = (req, res, next) => {
    Interest.find()
        .then(result => {
            res.send(result)
        })
        .catch(err => console.log(err))
}









// exports.updateUser = (req, res, next) => {
//     const id = req.params.id;
//     User_intrests.findByIdAndUpdate(id, {
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         email: req.body.email,
//         gender: req.body.gender
//     })
//     .then(()=>res.send('updtaed'))

// }


