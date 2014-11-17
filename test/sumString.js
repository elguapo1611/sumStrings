var expect = require("chai").expect;
require("../lib/sumString.js");

describe("sumString", function(){

  it("should sum two numbers", function(){
      expect(sumStrings("1","1")).equal('2');
  });

  it("should sum 15 + 15", function(){
      expect(sumStrings("15","15")).equal('30');
  });

  it("should sum 5000, 14234", function(){
    expect(sumStrings("5000","14234")).equal('19234');
  });

  it("should be declared on a class", function(){
    lsMath = new LSMath();
    expect(lsMath.sumStrings("1","2"), "3");
  });

  it("should sum two huge numbers", function(){
    expect(sumStrings('712569312664357328695151392','8100824045303269669937')).equal('712577413488402631964821329');
  });

});
