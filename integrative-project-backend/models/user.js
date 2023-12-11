const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  idno: String,
  firstName: String,
  middleName: String,
  lastName: String,
  age: String,
  birthday: String,
  address: String,
  username: String,
  email: String,
  password: String
  
});

userSchema.statics.userExists = async function (username) {

  const user = await this.findOne({ username });

  return !!user;

};

userSchema.statics.emailExists = async function (email) {

  const user = await this.findOne({ email });

  return !!user;

};

userSchema.statics.idNoExists = async function (idno) {

  const user = await this.findOne({ idno });

  return !!user;

};

const User = mongoose.model('User', userSchema);

module.exports = User;