const job1 = {
  id: 12,
  companyId: 42,
  companyName: 'Google Ltd.', // is populated on server from company table
  info: {
    title: 'This is a job',
    description: 'A fancy and long job description',
    imgUrl: 'https://url.to.free.image.png.com',
    website: 'https://example.com',
    social: [
      { Twitter: 'https://twitter' },
      { LinkedIn: 'https://linkedin.com' },
    ],
  },
  tags: ['JavaScript', 'WebDev', 'Europe'],
  isFeatured: true,
  expDate: 1500959439702,
  location: 'San Francisco, US', // populated on server???
};

const job2 = {
  id: 14,
  companyId: 42,
  companyName: 'Google Ltd.', // is populated on server from company table
  info: {
    title: 'Bot creating guru',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imgUrl: 'https://url.to.free.image.png.com',
    website: 'https://example.com',
    social: [
      { Twitter: 'https://twitter' },
      { LinkedIn: 'https://linkedin.com' },
    ],
  },
  tags: ['Python', 'Machine Learning', 'UK'],
  isFeatured: false,
  expDate: 1500959249702,
  location: 'London, UK', // populated on server???
};

export default [job1, job2];
