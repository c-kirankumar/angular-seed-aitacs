'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {

        browser.get('index.html#!/view1');
        browser.sleep(2000);
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
        browser.get('index.html#!/view2');
        browser.sleep(2000);

    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });


  describe('greet', function () {

      beforeEach(function () {
          browser.get('index.html#!/greet');
          browser.sleep(2000);

      });


      it('should render greet when user navigates to /greet', function () {
          expect(element.all(by.css('[ng-view] h2')).first().getText()).
            toMatch(/Greeting over here/);
      });

      it('should update the greet msg when name is entered and greet button is clicked', function () {

          var txtName = element(by.model('name'));
          txtName.sendKeys('kiran');
          var button = element(by.buttonText('greet'));
          button.click();
          browser.sleep(2000);

          var msgDiv = element(by.binding('greetMsg'));
          expect(msgDiv.getText()).toBe('Hi Mr. kiran, Have a nice day!');

      });



  });
});
