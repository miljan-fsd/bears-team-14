const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function scrapeText(html) {
  let $ = cheerio.load(html);

  const urls = $('.jb-explore-list')
    .find($('a'))
    .map((i, el) => $(el).attr('href'))
    .get();

  for (let i = 0; i < urls.length; i++) {
    // for (let i = 0; i < 5; i++) {
    console.log('Fetching', urls[i]);
    await fetch(`https://jobbatical.com${urls[i]}`)
      .then(res => res.text())
      .then(text => scrapeInfo(text))
      .then(() => new Promise(resolve => setTimeout(resolve, 1000)))
      .catch(err => console.log(err));
  }
}

function scrapeInfo(html) {
  const $ = cheerio.load(html);
  const jobData = {
    isFeatured: false,
    expDate: 1504224000,
  };
  jobData.imgUrl = `https://www.jobbatical.com${$(
    '.hero-section.js-listing-hero'
  ).data('image')}`;
  jobData.expDate = 1504224000000;

  $('.listing-main-content-block').each((i, el) => {
    const descr = {};
    descr.responsibilities = $(el).find($('#responsibilities .items')).text();
    descr.requirements = $(el).find($('#requirements .items')).text();
    descr.compensation = $(el).find($('#compensation .items')).text();
    jobData.description = JSON.stringify(descr);

    jobData.companyName = $(el).find($('.header-name').get(1)).text();
    jobData.title = $(el).find($('.header-name').get(0)).text();
    jobData.website = $(el).find($('.website-link > a')).attr('href');
    jobData.location = $(el).find($('.header-label')).text();
    jobData.tags = $(el)
      .find($('.tags > .listing-block-section'))
      .text()
      .replace(/\n/g, '')
      .split(' ')
      .join(',');
  });

  fetch('http://localhost:3001/api/v1/job/create/', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(jobData),
  }).catch(err => console.log(err));
}

fetch('https://www.jobbatical.com/jobs')
  .then(res => res.text())
  .then(text => scrapeText(text))
  .catch(err => console.log(err));
