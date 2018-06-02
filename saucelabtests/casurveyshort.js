describe('CDBU Modern Software Factory UI Short Test - Survey Environment', function() {
  it('Test for Survey App', function() {
    browser.ignoreSynchronization = true;    browser.get('http://preprod.survey.cdbu.io');
    browser.sleep(6000);
    element(by.css('input')).click();
// URL: 
element(by.css('input')).clear().sendKeys('Alfie Antoine');
// URL: 
element(by.css('button')).click();
// URL: 
element(by.css('label:nth-of-type(4)>span:nth-of-type(1)>svg')).click();
// URL: 
element(by.css('.css-wk8to2')).click();
// URL: 
element(by.css('label:nth-of-type(2)>span:nth-of-type(1)>svg')).click();
// URL: 
element(by.css('.css-wk8to2')).click();
// URL: 
element(by.css('label:nth-of-type(3)>span:nth-of-type(1)>svg')).click();
// URL: 
element(by.css('.css-wk8to2')).click();
// URL: 
element(by.css('label:nth-of-type(4)>span:nth-of-type(1)>svg')).click();
// URL: 
element(by.css('.css-wk8to2')).click();

    });
})
