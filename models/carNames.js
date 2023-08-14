const mongoose = require('mongoose');

const carNamesSchema = new mongoose.Schema({
carNames : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('carNames', carNamesSchema);