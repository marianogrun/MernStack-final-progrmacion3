const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountTypeSchema = new Schema ({
    accountType: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlenght: 3
    },
}, {
    timestamps: true,
});

const AccountType = mongoose.model('Account', accountTypeSchema);

module.exports = AccountType;