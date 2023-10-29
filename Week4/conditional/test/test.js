const expect = require('chai').expect

it('expect passing test', function(){
    expect(true).to.equal(true)
})


function conditions(arg){
    if(typeof input !== "number"){
        return "Error not a number"
    }
    if(arg === 1){
        return "1"
    }
    if(arg === 2){
        return "2"
    }
    if(arg === 3 || arg % 3 === 0){
        return "Good Morning"
    }
    if(arg === 7 || arg % 7 === 0){
        return "Good Afternoon"
    }
    if(arg % 3 === 0 && arg % 7 === 0){
        return "Good Evening"
    }
    else{
        return arg.toString()
    }
}

it('expect 1 when passed 1'), function(){
    expect(conditions("1")).to.equal(1)
}
it('expect 2 when passed 2'), function(){
    expect(conditions("2")).to.equal(2)
}
it('expect Good Morning when passed 3', function(){
    expect(conditions("Good Morning")).to.equal(3)
})
it("expect Good Afternoon when passed 7"), function(){
    expect(conditions("Good Afternoon")).to.equal(7)
}
it("expect Good Morning when passed a 3 or a multiple thereof", function(){
    expect(conditions("Good Morning")).to.equal(6)
})
it("expect Good Afternoon when passed a 7 or a multiple thereof", function(){
    expect(conditions("Good Afternoon")).to.equal(14)
})
it("expect Good Evening when passed a multiple of 3 and 7", function(){
    expect(conditions("Good Evening")).to.equal(21)
})
it("expect a string", function(){
    expect(conditions(String)).to.equal(5)
})
it("expect error message", function(){
    expect(conditions("words")).to.equal("Error not a number")
})