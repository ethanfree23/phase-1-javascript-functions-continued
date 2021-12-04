

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}


function wrapAdjective(symbol ="*") { //they want a function named wrapAdjective, and the default symbol to be *
  return function(statement = 'a hard worker') { //they want to make a statment using the defualt symbol, on both sides of the statement, and the default to be 'a hard worker'
    return `You are ${symbol}${statement}${symbol}!` //this returns the whole statement, when wrapAdjective is called.
  }
}



// function saturdayFun(activity="roller-skate"){
//   return `This Saturday, I want to ${activity}!`;
// }


// function mondayWork(activity='go to the office') {
//   return `This Monday, I will ${activity}.`
// }

// function wrapAdjective(symbol = "*") {
//   return function (statement = "a hard worker") {
//     return `You are ${symbol}${statement}${symbol}!`;
//   }
// }

/* 
Notes:
Function declaration: function fun(){}
^ the word fun is now a pointer to the function, does not need to stay
you can write function declarations after you call them: 
- fun(){}
- (then later in the text) function fun() {means this*}

Functions can be given default arguments
^ just put an equal sign after parameter and set it to a string

Hoisting - javascripts ability to call functions before they appear in code
*note: the funciton must be declared using a function declaration

we can use grouping operator to declar a function: need to put it all in parentheses ie. (function () {'this is da function'})

Anonymous function - a function that does not have a name
*often seen as arguments for event listeners
ie: 
const button = document.getElementByID("button");
button.addEventListener("click", function () {
  return "yet more function types"
})
^ The anonymous function is within the parentheses for addEventListener (later written as arrow function)

Another way to handle an anonymous function:
Set it to a variable, ie:
const fn = function () {"something"};

then, in console, fn ==> f () {("something")}
or fn() = "something"

**Function expressions are not joisted**
-function declaration and function expression are different-
^ function expression is assining anonymous function to a variable

IIFE: immediatly invoked function expression

(function (baseNumber) {
  return baseNumber + 3;
})(2); //=> ???

first () tells JS to interpret contents as a value
second () is what we are using as the base number, in this instance


Function Level Scope: if a function is defined within another function, it has access to its parameters, as well as the parameters of the outer function

EXAMPLE:
function outer(greeting, msg = "It's a fine day to learn") {
  // 2
  const innerFunction = function (name, lang = "Python") {
    // 3
    return `${greeting}, ${name}! ${msg} ${lang}`; // 4
  };
  return innerFunction("student", "JavaScript"); // 5
}

outer("Hello"); // 1
//=> "Hello, student! It's a fine day to learn JavaScript"

1. We call the outermost function: outer() and pass 'Hello' as the argument
2. Hello is saved as outers greeting parameter
3. This is a function expression, with parameters of name and lang (to be used in the overall return value for outer())
4. we make use of the function expressions parameters, as well as the outer() parameters. Note, we do not have to include them because of scope
5. inside the out() function, we invoke in innerfunction and passing arguments


The above is not super ideal since the arguments for the innerFunction are now a part of the definition of outer(), to change that:

function outer(greeting, msg = "It's a fine day to learn") {
  const innerFunction = function (name, lang = "Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`;
  };
  return innerFunction;
}

outer("hello")("Ethan", "JavaScript")
//=> hello, Ethan! It's a fine day to learn JavaScript.

we can go even further by setting out("hello") to a variable:
const storedFunction = outer("hello")
storedFunction("Ethan", "JavaScript") => hello, Ethan! It's a fine day to learn JavaScript.

Closure:

const array = (function (thingToAdd) {
  const base = 3;
  return [
    function () {
      return base + thingToAdd;
    },
    function () {
      return base;
    },
  ];
})(2);

array is a function expression
the array is a combo of two functions
the (2) at the end immediatley invokes the function

array[0]; //=> ƒ () { return base + thingToAdd; }
array[1]; //=> ƒ () { return base; }

array[0]() => 5
array[1]() => 3


Scope Chain:
The mechanism behind all of the above information
*/