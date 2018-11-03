const dogs = new Animal(true, "Woof!");
const cats = new Animal(false, "Meow!");

describe('Animal validation', function(){

      it("Animal validation - all animals making noice", function() {
        expect (massHysteria(dogs, dogs)).to.equal("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");

      });

      it("Animal validation - not all animals making noice", function() {
        expect (massHysteria(dogs, cats)).to.equal("Not all animinal are making noices!");

      });

      it("Animal validation negative - undefined input", function() {
        expect (massHysteria("dogs", "cats")).to.equal("not defined");

      });

      it("Animal validation negative - undefined input", function() {
        expect (massHysteria(true, false)).to.equal("not defined");

      });

});


const unsortedArray1 = [1,3,2];
const unsortedArray2 = ['c','b','a'];

describe('Bubble sort validation', function(){


  it("Bubble sort validation - three numbers", function() {
    expect (sortArray(unsortedArray1)).to.eql([ 1, 2, 3 ]);

  });

  it("Bubble sort validation - three alphabet", function() {
    expect (sortArray(unsortedArray2)).to.eql(['a','b','c']);

  });


  it("Bubble sort validation negative - not an array", function() {
    expect (sortArray(1)).to.eql('not an array');

  });


  it("Bubble sort validation negative - not an array", function() {
    expect (sortArray(1,2)).to.eql('not an array');

  });

});


describe('Calculator validation', function(){
  
  it("Calculator validation 1+2=3", function() {
    expect (calculators(1,'+',2)).to.equal(3);

  });


  it("Calculator validation 5-2=3", function() {
    expect (calculators(5,'-',2)).to.equal(3);

  });

  it("Calculator validation 2*3=6", function() {
    expect (calculators(2,'*',3)).to.equal(6);

  });

  it("Calculator validation 6/3=2", function() {
    expect (calculators(6,'/',3)).to.equal(2);

  });


  it("Calculator validation negative - not an valid operator", function() {
    expect (calculators(1,'@',3)).to.equal('not an valid operator');

  });


  it("Calculator validation negative - not a number input", function() {
    expect (calculators('a','/',3)).to.equal('number1 or number2 not number!');

  });


});
