const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: 'Username is required',
    trim: true,
  },
  savedJobs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Job',
    },
  ],
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
