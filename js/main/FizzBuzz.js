/**
 * If the number is divisible by 3, print "Fizz".
 * If the number is divisible by 5, print "Buzz".
 * If the number is divisible by both 3 and 5, print "FizzBuzz".
 */

class FizzBuzz {
    constructor(fizz, buzz) {
      this.fizz = fizz;
      this.buzz = buzz;
    }
    
    isFizz(num) {
        return num % this.fizz === 0;
        //returns `true` if the given number is divisible by the `fizz` property of the object.
    }
    
    isBuzz(num) {
        return num % this.buzz === 0;
        //returns `true` if the given number is divisible by the `buzz` property of the object.
    }
    
    isFizzBuzz(num) {
        return this.isFizz(num) && this.isBuzz(num);
        //returns `true` if the given number is divisible by both the `fizz` and `buzz` properties of the object.
    }
  
    getOutput(num) {
        if (this.isFizzBuzz(num)){
            return 'FizzBuzz';
        } else if (this.isFizz(num)){
            return 'Fizz';
        } else if (this.isBuzz(num)){
            return 'Buzz'
        } else
        return num;

        //returns the appropriate string for the given number, according to the Fizz Buzz rules
    }
  }
  