let homepage = function(){



    let firstInput= element(by.model('first'));
    let secondInput = element(by.model('second'));
    let operator = element(by.model('operator'));
    let goButton = element(by.id('gobutton'));
    var output = element(by.tagName('h2'));


    this.get = function(url){
        browser.get(url);

    }

    this.enterFirstNumber = function(firstNo){
        firstInput.sendKeys(firstNo);

    }

    this.enterSecondNumber = function(secondNo){
        secondInput.sendKeys(secondNo);

    }

    this.enterOperator = function(){
        operator.click();

    }

    this.goButtonClick= function(){

        goButton.click();

    }

    this.verifyResult = function(result){

        expect(output.getText()).toEqual(result);


    }

}

module.exports = new homepage();