// example that shows that null is technically an object

var bar = null;
// console.log(typeof bar === "object")

// console.log((bar !== null) && (typeof bar === "object"))

// console.log((bar !== null) && ((typeof bar === "object") || (typeof bar === "function")))

// console.log((bar !== null) && (typeof bar === "object") && (toString.call(bar) !== "[object Array]"));

// console.log((bar !== null) && (typeof bar === "object") && (!$.isArray(bar)));

// The postfix increment operator evaluates to the value before it was incremented.

let i = 0
i++ // 0
i === 1
console.log("i++", i)


// The prefix increment operator evaluates to the value after it was incremented.

// let i = 0
// ++i // 1
// i === 1
// console.log("++i", i)

// function foo1() {
//   return {
//     bar: "hello"
//   };
// }


// function foo2() {
//   return
//   {
//     bar: "hello"
//   };
// }

console.log(typeof NaN)
//NaN is technicaly a number 

// console.log(Math.abs(0.1 + 0.2))
// console.log(0.1 + 0.2 == 0.3)

// function areTheNumbersAlmostEqual(num1, num2) {
//   return Math.abs(num1 - num2) < Number.EPSILON
// }

// console.log(areTheNumbersAlmostEqual(0.1, 0.2, 0.3))

// console.log(Number.isInteger(2))


isInteger = (x) => { return (typeof x === 'number') && (x % 1 === 0) }

//if x is decimal x % 1 will not equal 0

// console.log(isInteger(100))

// (function () {
//   console.log(1);
//   setTimeout(function () { console.log(2) }, 1000);
//   setTimeout(function () { console.log(3) }, 0);
//   console.log(4);
// })()

// palindrone = (str) => {
//  let first = ""
//  let second = ""
//  let reversedSecond = ""

//   first = str.substring(0, str.length/2)
//   second = str.substring(str.length / 2, str.length)

  // for (let i = second.length -1; i >= 0; i--) {
  //   reversedSecond += second[i]
  // }
  // console.log("first", first)
  // console.log("second", first)
  // console.log("reversedSecond", reversedSecond)

//   if (first === second) {
//    return true
//  }
//  return false
// }

// console.log(palindrone("daddad"))


function reverseString(str) {
  if (str === "") // This is the terminal case that will end the recursion
    return "";

  else
    console.log("charat", str.charAt(0))
    console.log("substr", str.substr(1))
    return reverseString(str.substr(1)) + str.charAt(0);
  /* 
  First Part of the recursion method
  You need to remember that you won’t have just one call, you’ll have several nested calls
  Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
  1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
  2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
  3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
  4th call – reverseString("lo")      will return   reverseString("o")              + "l"
  5th call – reverseString("o")       will return   reverseString("")               + "o"
  Second part of the recursion method
  The method hits the if condition and the most highly nested call returns immediately
  5th call will return reverseString("") + "o" = "o"
  4th call will return reverseString("o") + "l" = "o" + "l"
  3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
  2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
  1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
  */
}
console.log(reverseString("hello"))






