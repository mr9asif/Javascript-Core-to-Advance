```js
/* =====================================================
   JAVASCRIPT VARIABLES – COMPLETE NOTES (CODE VERSION)
   ===================================================== */

/* 1. WHAT IS A VARIABLE?
   A variable is a named container that stores data in memory.
*/
let age = 15;

/* 2. WAYS TO DECLARE VARIABLES
   JavaScript has 3 keywords:
   let, const, var
*/

/* 3. let
   - Block scoped
   - Can be reassigned
   - Cannot be redeclared in same scope
*/
let name = "Alex";
name = "Sam"; // reassignment allowed

// let name = "John"; // ❌ redeclaration error

/* 4. const
   - Block scoped
   - Cannot be reassigned
   - Must be initialized immediately
*/
const pi = 3.14;

// pi = 3.15; // ❌ error

// IMPORTANT: const with objects
const user = { name: "Alex" };
user.name = "Sam"; // ✅ allowed (reference is constant)

/* 5. var (OLD – AVOID)
   - Function scoped
   - Can be redeclared
   - Hoisted with undefined
*/
var score = 10;
var score = 20; // allowed (bad practice)

/* 6. DECLARATION & INITIALIZATION */
let x;       // declaration
x = 10;      // initialization
let y = 20;  // both together

/* 7. VARIABLE NAMING RULES */
// Valid
let userName;
let _count;
let $price;
let user1;

// Invalid
// let 1user;
// let my-name;
// let let;

/* Rules:
   - Start with letter, _ or $
   - Cannot start with number
   - No spaces or hyphens
   - Case-sensitive
*/

/* 8. SCOPE */

// Block scope (let, const)
{
  let a = 10;
  const b = 20;
}
// console.log(a); // ❌ error

// Function scope (var)
if (true) {
  var c = 30;
}
console.log(c); // ✅ works (bad design)

/* 9. HOISTING */

// var hoisting
console.log(d); // undefined
var d = 10;

// let / const hoisting (TDZ)
// console.log(e); // ❌ ReferenceError
let e = 20;

/* 10. UNDEFINED vs NOT DEFINED */
let f;
console.log(f); // undefined

// console.log(g); // ❌ ReferenceError (not defined)

/* 11. REASSIGNMENT vs REDECLARATION */
let h = 10;
h = 20; // reassignment ✅

// let h = 30; // ❌ redeclaration

/* 12. PRIMITIVE vs REFERENCE */

// Primitive (copy by value)
let p1 = 10;
let p2 = p1;
p2 = 20;
// p1 is still 10

// Reference (copy by reference)
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
// obj1.value is now 20

/* 13. BEST PRACTICES
   - Use const by default
   - Use let if value changes
   - Avoid var
   - Use meaningful names
*/

/* 14. QUICK SUMMARY
   - Variable = named memory storage
   - let → changeable, block scoped
   - const → no reassignment
   - var → avoid
   - Scope + hoisting are critical
   - Reference vs primitive matters
*/
```





 //-----------------------------------------
// const accountId = 144553
// let accountEmail = "hitesh@google.com"
// var accountPassword = "12345"
// // accountCity = "Jaipur"
// let accountState;

// accountId = 2 // not allowed


// accountEmail = "hc@hc.com"
// accountPassword = "21212121"
// accountCity = "Bengaluru"

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


// console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// ---------------------core -------------------
// 1.1 var
// ✔ What it is:

// The old way of declaring variables (before ES6).

// Has function scope.

// Can be redeclared.

// Can be updated.

// Is hoisted, but initialized with undefined.

// var x = 10;
// var x = 20; // allowed

// function test() {
//   if (true) {
//     var a = 5;
//   }
//   console.log(a); // 5 (still accessible)
// }
// But outside the function not allowed because var functin scope.
// It's also hoisted so we can get undefine even before declare like
// console.log(x);
// var x;  // undefine  (it will not work for let)


// ***let
// What it is:

// Introduced in ES6.

// Has block scope.

// Can be updated.

// Cannot be redeclared in the same scope.

// Is hoisted, but not initialized → leads to Temporal Dead Zone (TDZ).

// let x = 10;
// x = 20; // allowed
// let x = 30; // ❌ Error: already declared

// if (true) {
//   let a = 5;
// }
// console.log(a); // ❌ Error

// console.log(a); // ❌ ReferenceError
// let a = 10;    //(let can not hoisted)

// ** const
// Block-scoped (like let).

// Must be initialized at declaration.

// Cannot be reassigned.

// Cannot be redeclared.

// Hoisted but stuck in TDZ(temporal dead zone).
// csdkflsdkfsdl
// sdlkflsdfksdlfkdsll55555

