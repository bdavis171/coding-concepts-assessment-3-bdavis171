// accounts schema

// reference mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define AccountSchema
const AccountSchema = new Schema(
    {
        number: { type: Number, unique: true },
        type: String,
        name: String,
        balance: Number
    },{timestamps: true}
)

// export model
module.exports = mongoose.model('account',AccountSchema);