const mongoose = require('mongoose');
const config = require('../../Config/');

module.exports.connection = async () => {
  try {
    await mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Base De datos Conectada',config.database);
  } catch (error) {
    console.log(error,'Error :P');
    throw error;
  }
}

module.exports.isValidObjectId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
}