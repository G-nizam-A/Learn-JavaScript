function greeting() {
 console.log("hello");
};
greeting();

function greeting1() {
 console.log("hello1");
};
 greeting1();

(function greeting() {
  console.log("inside");
  return 10;
})();

function greeting2() {
  console.log("hello");
}
greeting2();


var privateVar;
function myFunction() {
  privateVar = "I'm private!";

  return privateVar;
}

var result = myFunction();
console.log(result)

console.log(privateVar);


function ad() {
  let blockScopedVar; // Declare it in the function scope
  if (true) {
    blockScopedVar = "I'm in a block scope";
    console.log("if", blockScopedVar); // Accessible inside the block
  }
  console.log("func", blockScopedVar); // Accessible inside the function
  return blockScopedVar; // Return it from the function
}

ad(); // Call the function
console.log(ad()); // Accessible outside both the block and the function

function createMultiplier(factor) {
    console.log('factor',factor);
  return function (number) {
    console.log('number',number);

    return function (number1) {
    console.log('number1',number1);

      return number * factor + number1;
    };
  };
}

console.log(createMultiplier(12)(5)(10));

