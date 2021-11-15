const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movementSchema = new Schema ({
    username: { type: String, required: true},
    movementType: {type: String, required: true},
    amount: {type: Number, required: true},
    accountResultBalance: {type: Number, required: true},
    date: {type: Date, requiered: true}
},{
    timestamps: true,
});

const Movement = mongoose.model('Movement',movementSchema);

module.exports = Movement;