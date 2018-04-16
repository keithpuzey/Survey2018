exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  concurrent: {
        specs: ['Protractor3.js','Protractor1.js','Protractor2.js']
    },
};
