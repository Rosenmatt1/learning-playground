// example that shows that null is technically an object

var bar = null;
// console.log(typeof bar === "object")

console.log((bar !== null) && (typeof bar === "object"))