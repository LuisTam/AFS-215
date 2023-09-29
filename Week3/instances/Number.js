class Number{
    constructor(num){
    this.num = num
    }
    messages = () =>{
        if(this.num % 3 === 0 && this.num % 7 === 0 && this.num !== 3){
            return "Good Evening"
        }
        else if(this.num === 3 || this.num % 3 === 0){
            return "Good Morning"
        }
        else if (this.num == 7 || this.num % 7 === 0){
            return "Good Afternoon"
        }
        else if (typeof this.num !== "number"){
            return "Error this is not a number!! Please Try Again!"
        }
        else{
            return this.num.toString()
        }
    }
    
}
module.exports = Number