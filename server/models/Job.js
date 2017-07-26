const mongoose = require('mongoose');
const Company = require('./Company');

const jobSchema = new mongoose.Schema({
    companyName: { type: String, default: '' },
    info: {
    	title: { type: String, default: '' },
    	description: { type: String, default: '' },
    	imgUrl: { type: String, default: '' },
    	website: { type: String, default: '' }
    },
    location: { type: String, default: '' },
    tags: [{ type: String, default: '' }],
    isFeatured: Boolean, 
    expDate: Date,
});

const jobModel = mongoose.model('Job', jobSchema);

module.exports = jobModel;
