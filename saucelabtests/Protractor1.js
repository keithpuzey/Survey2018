describe('CDBU Modern Software Factory UI Test - Survey Environment', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;    browser.get('http://survey.cdbu.io');element(by.css('input')).click();// URL: 
element(by.css('input')).clear().sendKeys('Keith');// URL: 
element(by.css('button')).click();// URL: 
element(by.css('label:nth-of-type(2)>span:nth-of-type(1)>svg')).click();
// URL: 
    element(by.xpath('//button[contains(text(),"Next")]')).click();
// URL: 
element(by.css('button>span:nth-of-type(1)>span')).click();// URL: 
element(by.css('label:nth-of-type(2)>span:nth-of-type(1)>svg')).click();
// URL: 
    element(by.xpath('//button[contains(text(),"Next")]')).click();
// URL: 
element(by.css('button>span:nth-of-type(1)>span')).click();// URL: 
element(by.css('label:nth-of-type(2)>span:nth-of-type(1)>svg')).click();
// URL: 
    element(by.xpath('//button[contains(text(),"Next")]')).click();;
// URL: 
element(by.css('button>span:nth-of-type(1)>span')).click();// URL: 
element(by.css('label:nth-of-type(2)>span:nth-of-type(1)>svg')).click();
// URL: 
    element(by.xpath('//button[contains(text(),"Finish")]')).click();
// URL: 
element(by.css('button>span:nth-of-type(1)>span')).click();
    });
});
