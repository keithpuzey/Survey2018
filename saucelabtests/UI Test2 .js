describe('CDBU Modern Software Factory UI Test - Win Environment', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://win-preprod.cdbu.io/');
    element(by.css('[name="Test 2"]')).sendKeys('Selenium Test User');
    element(by.buttonText('Submit')).click();
    });
});
