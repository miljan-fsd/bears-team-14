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
    it('should add a SINGLE new job on /job/create POST', async function() {
      let res = await chai.request(server).post('/api/v1/job/create').send({
        companyName: 'Company2 Name',
        title: 'Job2 Title',
        description: 'Job2 Description',
        imgUrl: 'Job2 Image URL',
        website: 'Job2 Website',
        location: 'Job2 Location',
        tags: 'Second, Job, Tags',
        expDate: 'October 10, 1975 11:13:00',
      });
      res.should.have.status(201);
      res.body.should.be.a('object');
      res.body.should.have.property('SUCCESS');
      res.body.SUCCESS.should.have.property('_id');
      res.body.SUCCESS.should.have.property('companyName');
      res.body.SUCCESS.should.have.property('info').with.property('title');
      res.body.SUCCESS.should.have
        .property('info')
        .with.property('description');
      res.body.SUCCESS.should.have.property('info').with.property('imgUrl');
      res.body.SUCCESS.should.have.property('info').with.property('website');
      res.body.SUCCESS.should.have.property('location');
      res.body.SUCCESS.should.have.property('tags');
      res.body.SUCCESS.should.have.property('expDate');
      res.body.SUCCESS.companyName.should.equal('Company2 Name');
      res.body.SUCCESS.info.title.should.equal('Job2 Title');
      res.body.SUCCESS.info.description.should.equal('Job2 Description');
      res.body.SUCCESS.info.imgUrl.should.equal('Job2 Image URL');
      res.body.SUCCESS.info.website.should.equal('Job2 Website');
      res.body.SUCCESS.location.should.equal('Job2 Location');
      res.body.SUCCESS.tags.should.deep.equal(['Second', 'Job', 'Tags']);
      new Date(res.body.SUCCESS.expDate).should.deep.equal(
        new Date('October 10, 1975 11:13:00')
      );
    });
  });

  describe('#GET ONE', function() {
    it('should list ONE job on /job/<id> GET', async function() {
      let jobs = await chai.request(server).get('/api/v1/jobs/');

      let res = await chai
        .request(server)
        .get('/api/v1/job/' + jobs.body[0]._id);

      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('_id');
      res.body.should.have.property('companyName');
      res.body.should.have.property('info').with.property('title');
      res.body.should.have.property('info').with.property('description');
      res.body.should.have.property('info').with.property('imgUrl');
      res.body.should.have.property('info').with.property('website');
      res.body.should.have.property('location');
      res.body.should.have.property('tags');
      res.body.should.have.property('expDate');
      res.body.companyName.should.equal(jobs.body[0].companyName);
      res.body.info.title.should.equal(jobs.body[0].info.title);
      res.body.info.description.should.equal(jobs.body[0].info.description);
      res.body.info.imgUrl.should.equal(jobs.body[0].info.imgUrl);
      res.body.info.website.should.equal(jobs.body[0].info.website);
      res.body.location.should.equal(jobs.body[0].location);
      res.body.tags.should.deep.equal(jobs.body[0].tags);
      new Date(res.body.expDate).should.deep.equal(
        new Date(jobs.body[0].expDate)
      );
    });
  });

  describe('#PUT', function() {
    it("should update a SINGLE job's ONE property (companyName) on /job/<id> PUT", async function() {
      const newCompanyName = 'Google';
      let jobs = await chai.request(server).get('/api/v1/jobs');
      const jobId = jobs.body[0]._id;
      let res = await chai
        .request(server)
        .put('/api/v1/job/' + jobId)
        .send({ companyName: newCompanyName });
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('UPDATED');
      res.body.UPDATED.should.have.property('companyName');
      res.body.UPDATED.should.have.property('_id');
      res.body.UPDATED.companyName.should.equal(newCompanyName);
      res.body.UPDATED._id.should.equal(jobId);
    });

    it("should update a SINGLE job's WHOLE body on /job/<id> PUT", async function() {
      let jobs = await chai.request(server).get('/api/v1/jobs');
      const jobId = jobs.body[0]._id;
      let res = await chai.request(server).put('/api/v1/job/' + jobId).send({
        companyName: 'Company Updated Name',
        title: 'Job Updated Title',
        description: 'Job Updated Description',
        imgUrl: 'Job Updated Image URL',
        website: 'Job Updated Website',
        location: 'Job Updated Location',
        tags: 'Updated, Job, Tags',
        expDate: 'November 12, 2000 11:13:00',
      });
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('UPDATED');
      res.body.UPDATED.should.have.property('_id');
      res.body.UPDATED.should.have.property('companyName');
      res.body.UPDATED.should.have.property('info').with.property('title');
      res.body.UPDATED.should.have
        .property('info')
        .with.property('description');
      res.body.UPDATED.should.have.property('info').with.property('imgUrl');
      res.body.UPDATED.should.have.property('info').with.property('website');
      res.body.UPDATED.should.have.property('location');
      res.body.UPDATED.should.have.property('tags');
      res.body.UPDATED.should.have.property('expDate');
      res.body.UPDATED.companyName.should.equal('Company Updated Name');
      res.body.UPDATED.info.title.should.equal('Job Updated Title');
      res.body.UPDATED.info.description.should.equal('Job Updated Description');
      res.body.UPDATED.info.imgUrl.should.equal('Job Updated Image URL');
      res.body.UPDATED.info.website.should.equal('Job Updated Website');
      res.body.UPDATED.location.should.equal('Job Updated Location');
      res.body.UPDATED.tags.should.deep.equal(['Updated', 'Job', 'Tags']);
      new Date(res.body.UPDATED.expDate).should.deep.equal(
        new Date('November 12, 2000 11:13:00')
      );
      res.body.UPDATED._id.should.equal(jobId);
    });
  });

  describe('#DELETE', function() {
    it('should delete a SINGLE job on /job/<id> DELETE', async function() {
      let jobs = await chai.request(server).get('/api/v1/jobs');
      const jobId = jobs.body[0]._id;
      let res = await chai.request(server).delete('/api/v1/job/' + jobId);
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('REMOVED');
      res.body.REMOVED.should.have.property('name');
      res.body.REMOVED.should.have.property('_id');
      res.body.REMOVED.name.should.equal('Job Title');
      res.body.REMOVED._id.should.equal(jobId);
    });
  });
});
