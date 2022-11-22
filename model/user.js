const { Schema, model } = require('mongoose')
const Joi = require('@hapi/joi');
const Interest = require('./interest')
const mongoose = require('mongoose')

const schema = new Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    lastname: {
        type: String,
        minlength: 5,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other']
    },
    // interests: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Interest'
    // }]
})

schema.virtual('posts', {
    ref: 'Interest',
    localField: '_id',
    foreignField: 'post'
})
// schema.set('toObject', { virtuals: true });
// schema.set('toJSON', { virtuals: true });

module.exports.User = model('User', schema);

function validate(user) {
    const schema = Joi.object({
        firstname: Joi.string().min(5).required(),
        lastname: Joi.string().min(5).required(),
        email: Joi.string().email().required(),
        gender: Joi.string().required().valid('male', 'female', 'other'),
    });
    return Joi.validate(user, schema)
}

exports.validate = validate
