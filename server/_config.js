module.exports = {
  mongoURI: {
    development: process.env.DEV_DB_URI,
    test: process.env.TEST_DB_URI,
  },
};
