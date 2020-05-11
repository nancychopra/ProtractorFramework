let homepage = require('../pages/homepage');

describe('Protractor Demo App Test',function(){
    it('should add two numbers',function(){

        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber(1);
        homepage.enterSecondNumber(3);
        homepage.enterOperator();
        homepage.goButtonClick();
        homepage.verifyResult('4');

        browser.sleep(3000);

        // element($('.ng-binding'));
        
       


    });

    it('should substract two numbers',function(){

        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber(1);
        homepage.enterSecondNumber(3);
        homepage.enterOperator();
        homepage.goButtonClick1();
        homepage.verifyResult('4');

        browser.sleep(3000);

        // element($('.ng-binding'));

    });
});