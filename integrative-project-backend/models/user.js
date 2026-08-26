const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lastLogout: Date,
});

userSchema.statics.userExists = async function (username) {
  const user = await this.findOne({ username });
  return !!user;
};

userSchema.statics.emailExists = async function (email) {
  const user = await this.findOne({ email });
  return !!user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
