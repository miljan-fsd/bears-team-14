const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  companyName: { type: String, default: '' },
  info: {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    imgUrl: { type: String, default: '' },
    website: { type: String, default: '' },
  },
  location: { type: String, default: '' },
  tags: [{ type: String, default: '' }],
  isFeatured: { type: Boolean, default: false },
  expDate: Date,
  created_at: { type: Date, required: true, default: Date.now() },
});

const jobModel = mongoose.model('Job', jobSchema);

module.exports = jobModel;
