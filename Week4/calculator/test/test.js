const expect = require('chai').expect

it('expect passing test', function(){
    expect(true).to.equal(true)
})

function calculator(arg){
    if(arg === "add"){
        return a + b
    }
    if(arg === "sub"){
        return a - b
    }
    if(arg === "mul"){
        return a * b
    }
    if(arg === "div"){
        return a / b
    }
    if(arg !== Number){
        return "Error Not A Number"
    }
    else{
        return "Something Went Wrong"
    }
}

it('adds when passed add', function(){
    expect(calculator(a + b)).to.equal("add")
})

it('subtracts when passed sub', function(){
    expect(calculator(a - b)).to.equal("sub")
})

it('multiplies when passed mul', function(){
    expect(calculator(a * b)).to.equal('mul')
})

it('divides when passed div', function(){
    expect(calculator(a / b)).to.equal('div')
})

it('creates error message', function(){
    expect(calculator("words")).to.equal("Error Not A Number")
})
