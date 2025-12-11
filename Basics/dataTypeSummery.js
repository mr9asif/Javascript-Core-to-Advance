//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// memory-----------------------------
// 1. stack memory ( all premitive datatype)
// 1. heap memory ( all non-premitive datatype)

//  In Stack memory-- if i copy a variable it actually coppy the value not reference.
// in Heap memory--if i coppy a variable and change the value it also change the previous one because it actually referene the previos one.



// data types
// primitive data types -->7 types
// string, number , boolean , null , undefine,symbol, bigint



// Data type reference
// arrays

// functions

// dates

// regex

// maps

// sets