describe('CDBU Modern Software Factory UI Test - Survey Environment', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://survey.cdbu.io:3000');
    // URL: 
element(by.css('input')).click();
// URL: 
element(by.css('input')).clear().sendKeys('Keith');
// URL: 
element(by.css('button')).click();
// URL: 
element(by.css('label:nth-of-type(1)>span:nth-of-type(1)>svg')).click();
// URL: 
element(by.css('label:nth-of-type(1)>input[name="answers"]')).click();
// URL: 
element(by.css('button>span:nth-of-type(1)>span')).click();
// URL: 
element(by.css('label:nth-of-type(3)>span:nth-of-type(2)')).click();
// URL: 
element(by.css('label:nth-of-type(3)>span:nth-of-type(1)>svg')).click();
// URL: 
element(by.css('label:nth-of-type(3)>input[name="answers"]')).click();
// URL: 
element(by.css('button')).click();
// URL: 
element(by.css('label:nth-of-type(4)>span:nth-of-type(1)>svg')).click();
// URL: 
element(by.css('label:nth-of-type(4)>input[name="answers"]')).click();
// URL: 
element(by.css('button>span:nth-of-type(1)>span')).click();
// URL: 
element(by.css('label:nth-of-type(3)>span:nth-of-type(1)>svg')).click();
// URL: 
element(by.css('label:nth-of-type(3)>input[name="answers"]')).click();
// URL: 
element(by.css('button>span:nth-of-type(1)>span')).click();
    });
});
