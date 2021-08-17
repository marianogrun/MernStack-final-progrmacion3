const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema ({
    username: { type: String, required: true},
    accountType: {type: String, required: true},
    clientType: {type: String, required: true},
    nroCuenta: {type: Number, required: true},
    cbu: {type: Number, requiered: true},
    saldo: {type: Number, required: true}
},{
    timestamps: true,
});

const BankingAccount = mongoose.model('BankingAccount',accountSchema);

module.exports = BankingAccount;
