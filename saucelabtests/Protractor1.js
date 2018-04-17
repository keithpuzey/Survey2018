describe('CDBU Modern Software Factory UI Test - Survey Environment', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;    browser.get('http://survey.cdbu.io:3000');element(by.css('input')).click();// URL: 
element(by.css('input')).clear().sendKeys('Keith');// URL: 
element(by.css('button')).click();// URL: 
element(by.css('label:nth-of-type(1)>span:nth-of-type(1)>svg')).click();
// URL: 
element(by.css('.css-wk8to2')).click();// URL: 
element(by.css('label:nth-of-type(4)>span:nth-of-type(1)>svg')).click();
// URL: 
element(by.css('.css-wk8to2')).click();// URL: 
element(by.css('label:nth-of-type(3)>span:nth-of-type(1)>svg')).click();
// URL: 
element(by.css('.css-wk8to2')).click();// URL: 
element(by.css('label:nth-of-type(1)>span:nth-of-type(1)>svg')).click();
// URL: 
element(by.css('.css-wk8to2')).click();
    });
});