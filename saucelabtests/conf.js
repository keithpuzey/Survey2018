exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
   browser.manage().window().setSize(1600, 1200),
  specs: ['Protractor3.js','Protractor1.js','Protractor2.js']
};
