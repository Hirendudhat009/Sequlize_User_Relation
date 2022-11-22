const { Schema, model } = require('mongoose')
const Joi = require('@hapi/joi');
const  User = require('./user')
const mongoose = require('mongoose')

const schema = new Schema({
    name: {
        type: String
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});
// schema.set('toObject', { virtuals: true });
// schema.set('toJSON', { virtuals: true });

module.exports.Interest = model("Interest", schema)
