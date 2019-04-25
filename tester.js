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

function areTheNumbersAlmostEqual(num1, num2) {
  return Math.abs(num1 - num2) < Number.EPSILON
}

console.log(areTheNumbersAlmostEqual(0.1, 0.2, 0.3))





