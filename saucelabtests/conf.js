exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  maxInstances: 1,
  sequential: true,
  specs: ['CASurveyshort.js']
};
