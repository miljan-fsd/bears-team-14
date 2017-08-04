process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

const server = require('../server.js');
const Job = require('../server/models/Job.js');

const should = chai.should();
chai.use(chaiHttp);

describe('Jobs', function() {
  beforeEach(async function() {
    const newJob = new Job({
      companyName: 'Company Name',
      info: {
        title: 'Job Title',
        description: 'Job Description',
        imgUrl: 'Job Image URL',
        website: 'Job Website',
      },
      location: 'Job Location',
      tags: ['Job', 'Tags'],
      expDate: new Date('October 13, 1975 11:13:00'),
    });
    await newJob.save();
  });

  afterEach(async function() {
    await Job.collection.drop();
  });

  describe('#GET ALL', function() {
    it('should list ALL jobs on /jobs GET', async function() {
      let res = await chai.request(server).get('/api/v1/jobs');
      res.should.have.status(200);
      res.body.should.be.a('array');
      res.body[0].should.have.property('_id');
      res.body[0].should.have.property('companyName');
      res.body[0].should.have.property('info').with.property('title');
      res.body[0].should.have.property('info').with.property('description');
      res.body[0].should.have.property('info').with.property('imgUrl');
      res.body[0].should.have.property('info').with.property('website');
      res.body[0].should.have.property('location');
      res.body[0].should.have.property('tags');
      res.body[0].should.have.property('expDate');
      res.body[0].companyName.should.equal('Company Name');
      res.body[0].info.title.should.equal('Job Title');
      res.body[0].info.description.should.equal('Job Description');
      res.body[0].info.imgUrl.should.equal('Job Image URL');
      res.body[0].info.website.should.equal('Job Website');
      res.body[0].location.should.equal('Job Location');
      res.body[0].tags.should.deep.equal(['Job', 'Tags']);
      new Date(res.body[0].expDate).should.deep.equal(
        new Date('October 13, 1975 11:13:00')
      );
    });
  });

  describe('#POST', function() {
    it('should add a SINGLE new job on /jobs/create POST', async function() {
      let res = await chai.request(server).post('/api/v1/jobs/create').send({
        companyName: 'Company2 Name',
        title: 'Job2 Title',
        description: 'Job2 Description',
        imgUrl: 'Job2 Image URL',
        website: 'Job2 Website',
        location: 'Job2 Location',
        tags: 'Second, Job, Tags',
        expDate: 'October 20, 1975 11:13:00',
      });
      res.should.have.status(201);
    });
  });

  describe('#PUT', function() {
    it('should update a SINGLE job on /job/<id> PUT', async function() {
      let jobs = await chai.request(server).get('/api/v1/jobs');
      let res = await chai
        .request(server)
        .put('/api/v1/job/' + jobs.body[0]._id)
        .send({ companyName: 'Google' });
      res.should.have.status(204);
    });
  });

  describe('#DELETE', function() {
    it('should delete a SINGLE job on /job/<id> DELETE', async function() {
      let jobs = await chai.request(server).get('/api/v1/jobs');
      let res = await chai
        .request(server)
        .delete('/api/v1/job/' + jobs.body[0]._id);
      res.should.have.status(204);
    });
  });
});
