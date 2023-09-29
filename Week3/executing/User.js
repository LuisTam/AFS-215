class User{
    constructor(num1, num2, name = "Kane", age = 29){
        this.num1 = num1,
        this.num2 = num2,
        this.name = name,
        this.age = age
    }
    add = (num1,num2) => {
        return num1 + num2
    }
    subtract = (num1, num2) => {
        return num1 - num2
    }
    multiply = (num1, num2) => {
        return num1 * num2
    }
    divide = (num1, num2) => {
        return num1 / num2
    }
    greeting = () =>{
        return `Hello ${this.name}, today you are ${this.age} years old. CONGRATS!!`
    }
    numbersToString = () =>{
        var num1ToString = String(this.num1)
        var num2ToString = String(this.num2)
        return num1ToString + num2ToString
    }
}
module.exports = User