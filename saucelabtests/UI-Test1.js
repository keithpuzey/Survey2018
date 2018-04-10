describe('CDBU Modern Software Factory UI Test - cdbu Environment', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://preprod.cdbu.io/');
    element(by.css('[name="Test 1"]')).sendKeys('Selenium Test User');
    element(by.buttonText('Submit')).click();
    });
});
