// example that shows that null is technically an object

// var bar = null;
// console.log(typeof bar === "object")

// console.log((bar !== null) && (typeof bar === "object"))

// console.log((bar !== null) && ((typeof bar === "object") || (typeof bar === "function")))

// console.log((bar !== null) && (typeof bar === "object") && (toString.call(bar) !== "[object Array]"));

// console.log((bar !== null) && (typeof bar === "object") && (!$.isArray(bar)));

// The postfix increment operator evaluates to the value before it was incremented.

// let i = 0
// i++ // 0
// i === 1
// console.log("i++", i)


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

// console.log(typeof NaN)
//NaN is technicaly a number 

// console.log(Math.abs(0.1 + 0.2))
// console.log(0.1 + 0.2 == 0.3)

// function areTheNumbersAlmostEqual(num1, num2) {
//   return Math.abs(num1 - num2) < Number.EPSILON
// }

// console.log(areTheNumbersAlmostEqual(0.1, 0.2, 0.3))

// console.log(Number.isInteger(2))


// isInteger = (x) => { return (typeof x === 'number') && (x % 1 === 0) }

//if x is decimal x % 1 will not equal 0

// console.log(isInteger(100))

// (function () {
//   console.log(1);
//   setTimeout(function () { console.log(2) }, 1000);
//   setTimeout(function () { console.log(3) }, 0);
//   console.log(4);
// })()

// palindrone = (str) => {
 
// let first = ""
// let second = ""
// let reversedSecond = ""
// let parsingStr = str.replace(/,/g, '')
// let parsedStr = parsingStr.replace(/\s+/g, '').toLowerCase()
// console.log("parsedStr", parsedStr)

//   if (parsedStr.length % 2 === 0) {
//     first = parsedStr.substring(0, parsedStr.length / 2)
//     second = parsedStr.substring(parsedStr.length / 2, parsedStr.length)
//     console.log("first", first)
//     console.log("second", second)
//   } else {
//     first = parsedStr.substring(0, parsedStr.length / 2)
//     second = parsedStr.substring((parsedStr.length / 2) + 1, parsedStr.length)
//     console.log("first", first)
//     console.log("second", second)
//   }

//   for (let i = second.length -1; i >= 0; i--) {
//     reversedSecond += second[i]
//   }
//   console.log("reversedSecond", reversedSecond)

//   if (first === reversedSecond) {
//    return true
//  }
//  return false
// }

// console.log(palindrone("A car, a man, a maraca"))
// console.log(palindrone("dad"))


// function reverseString(str) {
//   if (str === "") // This is the terminal case that will end the recursion
//     return "";

//   else
//     console.log("charat", str.charAt(0))
//     console.log("substr", str.substr(1))
//     return reverseString(str.substr(1)) + str.charAt(0);
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
// }
// console.log(reverseString("hello"))


// let word = "facetime"
// let word = ["facetime", "jango", "timmy", "buckto"]
// console.log(word.charAt(2))
// console.log(word.indexOf("jango"))

// sum = (x) => {
//   console.log("length", arguments.length)
//   console.log("arguments", arguments[0] + arguments[1])
//   return x + y
// }

// console.log(sum(2, 3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

// let d = {}
// let arr = ['zebra', 'horse']

// arr.forEach((k) => {
//   d[k] = "value"
// })

// console.log(d)

// var arr1 = "john".split('')
// console.log("1", arr1)
// var arr2 = arr1.reverse()
// console.log("2", arr2)
// var arr3 = "jones".split('')
// console.log("3", arr3)
// arr2.push(arr3)
// console.log("final2", arr2)

// console.log("122", 1 + "2" + "2");
// console.log("++", 1 + + "2" + "2");
// console.log("+-", 1 + -"1" + "2");
// console.log("112", "1" + "1" + "2");
// console.log("a-b+string2", "A" - "B" + "2")
// console.log("a-b+2", "A" - "B" + 2)
// console.log("++5", 3 + - "2");

// var list = [6, 8, 3, 10, 12, 5, 11];

// var nextListItem = function () {
//   var item = list.pop();

//   if (item) {
//     console.log(list)
//     console.log(item)
//     setTimeout(nextListItem, 0);
//   }
// };

// console.log(nextListItem())

// const globalVar = "xyz";

// outerFunc = outerArg => {
//   let outerVar = 'a';

//   innerFunc = (innerArg) => {
//     let innerVar = 'b';

//     console.log(
//       "outerArg = " + outerArg + "\n" +
//       // "innerArg = " + innerArg + "\n" +
//       "outerVar = " + outerVar + "\n" +
//       "innerVar = " + innerVar + "\n" +
//       "globalVar = " + globalVar);
//   }

// } 

// outerFunc(123)
// innerFunc(456)

// for (let i = 0; i <= 5; i++) {
//   setTimeout(() => { 
//     console.log(i); 
//   }, i * 1000)
// }

// console.log("0 || 1 = " + (0 || 1))
// console.log("1 || 2 = " + (1 || 2))
// console.log("0 && 1 = " + (0 && 1))
// console.log("1 && 2 = " + (1 && 2))

// console.log(false == '0')
// console.log(false === '0')

// var a = {},
//   b = 'b',
//   c = 'c';

// a[b] = 123;
// a[c] = 456;

// console.log(a);

// var a = {},
//   b = { key: 'b' },
//   c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// console.log("first");
// setTimeout(function () {
//   console.log("second");
// }, 0);
// console.log("third");

// {
//   console.time("loop");
//   for (var i = 0; i < 1000000; i += 1) {
//     // Do nothing
//     console.log(i)
//   }
//   console.timeEnd("loop");
// }

// console.log(hoist)
// var hoist = "value"

// var hoist
// console.log(hoist)
// hoist = "value"

// myFunction() // No error; logs "hello"
// function myFunction() {
//   console.log("hello")
// }

// myFunction() // Error: `myFunction` is not a function
// var myFunction = function () {
//   console.log("hello")
// }

// let i = 0
// console.log("before", i)
// i++ // 0
// console.log("after", i)
// // i === 1

// function example() {
//   console.log(this)
// }
// const boundExample = bind(example, { a: true })
// boundExample.call({ b: true }) // logs { a: true }

// const map = (arr) => {
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] * 2)
//   }
//   return result
// }
// console.log(map([1, 2, 3, 4, 5])) // [2, 4, 6, 8, 10]


// const map = (arr, callback) => {
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i], i))
//   }
//   return result
// }
// map([1, 2, 3, 4, 5], n => n * 2) // [2, 4, 6, 8, 10]

// const obj = { a: 1, b: 2 }
// const shallowClone = { ...obj }

// console.log(shallowClone)

// function isDeepEqual(obj1, obj2, testPrototypes = false) {
//   if (obj1 === obj2) {
//     return true
//   }

//   if (typeof obj1 === "function" && typeof obj2 === "function") {
//     return obj1.toString() === obj2.toString()
//   }

//   if (obj1 instanceof Date && obj2 instanceof Date) {
//     return obj1.getTime() === obj2.getTime()
//   }

//   if (
//     Object.prototype.toString.call(obj1) !==
//     Object.prototype.toString.call(obj2) ||
//     typeof obj1 !== "object"
//   ) {
//     return false
//   }

//   const prototypesAreEqual = testPrototypes
//     ? isDeepEqual(
//       Object.getPrototypeOf(obj1),
//       Object.getPrototypeOf(obj2),
//       true
//     )
//     : true

//   const obj1Props = Object.getOwnPropertyNames(obj1)
//   const obj2Props = Object.getOwnPropertyNames(obj2)

//   return (
//     obj1Props.length === obj2Props.length &&
//     prototypesAreEqual &&
//     obj1Props.every(prop => isDeepEqual(obj1[prop], obj2[prop]))
//   )
// }

// var array1 = [1, 2, 3]
// var array2 = [1, 2, 3]

// console.log(array1 == array2)

// compare = (arr1, arr2) => {

//   for (let i = 0; i <= arr1.length; i++ ) {
//     if (arr1[i] !== arr2[i]) {
//       return false
//     }
//   }

//   return true
// }

// console.log(compare(array1, array2))

// var object1 = { a: 1, b: 2}
// var object2 = { a: 1, b: 2 }

// compare = (obj1, obj2) => {

//   let holder1 = Object.values(obj1)
//   let holder2 = Object.values(obj2)

//     for (let i = 0; i <= holder1.length; i++ ) {
//     if (holder1[i] !== holder2[i]) {
//       return false
//     }
//   }

//   return true
// }

// console.log(compare(object1, object2))

// var object1 = { a: 1, b: 2 }
// var object2 = { a: 1, b: 2 }

// compare = (obj1, obj2) => {

//   for (value in obj1) {
//     if (obj1[value] !== obj2[value]) {
//       return false
//     }
//   }
// return true
// }

// console.log(compare(object1, object2))

// false
// undefined
// null
// ""(empty string)
// NaN
// 0(both + 0 and - 0)

// var foo = 1
// foobar = () => {
//   console.log("foo1st", foo)
//   var foo = 2
//   console.log("foo2nd", foo)
// }

// foobar()

// console.log(hoist)
// var hoist = "value"

// var hoist
// hoist = "value"
// console.log(hoist)

  // < button onclick = "handleClick()" > </button >
  // < button onClick = { handleClick } />

  // <a href="#" onclick="console.log('The link was clicked.'); return false" />

// const myLibrary = (function () {
//   var privateVariable = 2
//   return {
//     publicMethod: () => privateVariable
//   }
// })()

// // console.log(privateVariable) // ReferenceError
// console.log(myLibrary.publicMethod()) // 2

// There are four different phases of component’s lifecycle:

// Initialization: In this phase, the component prepares setting up the initial state and default props.

//   Mounting: The react component is ready to mount to the DOM.This phase covers the getDerivedStateFromProps and componentDidMount lifecycle methods.

//     Updating: In this phase, the component gets updated in two ways, sending the new props and updating the state.This phase covers the getDerivedStateFromProps, shouldComponentUpdate, getSnapshotBeforeUpdate and componentDidUpdate lifecycle methods.

//       Unmounting: In this last phase, the component is not needed and gets unmounted from the browser DOM.This phase includes the componentWillUnmount lifecycle method.

// Error Handling: In this phase, the component is called whenever there's an error during rendering, in a lifecycle method, or in the constructor for any child component. This phase includes the componentDidCatch lifecycle method.

// mask = (str) => {
//   let masked = ""

//   for (let i = 0; i < str.length -4; i++) {
//     masked += "#"
//   }
//   for (let i = str.length-4; i < str.length; i++) {
//     masked += str[i]
//   }

//   return masked
// }

// console.log(mask("123456789")) // "#####6789"

// mask = (str) => {
//   let masked = ""

//   for (let i = 0; i < str.length; i++) {
//     if (i < str.length -4) {
//       masked += "#"
//     } else {
//       masked += str[i]
//     }
//   }
//   return masked
// }

// console.log(mask("123456789")) // "#####6789"

// console.log(undefined == null)

// fs.readFile(filePath, function (err, data) {
//   if (err) {
//     // handle the error, the return is important here
//     // so execution stops here
//     return console.log(err)
//   }
//   // use the data object
//   console.log(data)
// })


// console.log(linearSearch(array, num)) // 3

// function linearSearch(array, num) {

//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] === num) {
//       return array.indexOf(num)
//     }
//   }

//   return -1
// }

// var array = [4,5,6,7,8,9]
// var num = 9

// function binarySearch(array, num) {
//   var minIndex = 0;
//   var maxIndex = array.length - 1;
//   var currentIndex;
//   var currentElement;

//   while (minIndex <= maxIndex) {
//     currentIndex = Math.floor((minIndex + maxIndex) / 2)
//     console.log("currentIndex", currentIndex)
//     currentElement = array[currentIndex]
//     console.log(currentElement)
//     if (currentElement < num) {
//       minIndex = currentIndex + 1
//     } else if (currentElement > num) {
//       maxIndex = currentIndex - 1
//     } else {
//       return currentIndex
//     }
//   }
//   return -1
// }

// console.log(binarySearch(array, num))

swap = (arr, idx1, idx2) => {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

let array = [5,9,4,2,1,10,22]

median = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) {
      swap(arr, j, j+1)
      }
    }
  }
  return arr
}

console.log(median(array))



