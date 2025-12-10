// ==========================
// STRING PROPERTIES
// ==========================

// length
let str = "Hello";
console.log(str.length); // 5


// ==========================
// SEARCHING METHODS
// ==========================

// charAt()
console.log("Hello".charAt(1)); // "e"

// charCodeAt()
console.log("A".charCodeAt(0)); // 65

// includes()
console.log("Hello world".includes("world")); // true

// indexOf()
console.log("banana".indexOf("na")); // 2

// lastIndexOf()
console.log("banana".lastIndexOf("na")); // 4

// startsWith()
console.log("Hello".startsWith("He")); // true

// endsWith()
console.log("Hello".endsWith("lo")); // true


// ==========================
// EXTRACTING PARTS OF STRING
// ==========================

// slice(start, end)
console.log("Hello".slice(1, 4)); // "ell"
console.log("Hello".slice(-3));   // "llo"

// substring(start, end)
console.log("Hello".substring(1, 4)); // "ell"

// substr(start, length) (deprecated)
console.log("Hello".substr(1, 3)); // "ell"


// ==========================
// MODIFYING STRINGS
// ==========================

// toUpperCase()
console.log("hello".toUpperCase()); // "HELLO"

// toLowerCase()
console.log("HELLO".toLowerCase()); // "hello"

// trim()
console.log("  hi  ".trim()); // "hi"

// trimStart()
console.log("  hi".trimStart()); // "hi"

// trimEnd()
console.log("hi  ".trimEnd()); // "hi"

// repeat()
console.log("ha".repeat(3)); // "hahaha"

// replace()
console.log("cat dog cat".replace("cat", "rat")); 
// "rat dog cat"

// replaceAll()
console.log("cat cat cat".replaceAll("cat", "rat"));
// "rat rat rat"


// ==========================
// SPLITTING
// ==========================

// split()
console.log("apple,banana,orange".split(","));
// ["apple", "banana", "orange"]


// ==========================
// PADDING
// ==========================

// padStart()
console.log("5".padStart(4, "0")); // "0005"

// padEnd()
console.log("5".padEnd(4, "*")); // "5***"


// ==========================
// UNICODE METHODS
// ==========================

// codePointAt()
console.log("😀".codePointAt(0)); // 128512

// String.fromCharCode()
console.log(String.fromCharCode(65)); // "A"

// String.fromCodePoint()
console.log(String.fromCodePoint(128512)); // "😀"


// ==========================
// CONCATENATION
// ==========================

// concat()
console.log("Hello".concat(" ", "World")); 
// "Hello World"


// ==========================
// RAW STRING (TEMPLATE LITERAL)
// ==========================

// String.raw
console.log(String.raw`Hello\nWorld`);
// Output: Hello\nWorld (no actual newline)


// ==========================
// TEMPLATE LITERALS (not a method)
// ==========================

let name = "Ali";
console.log(`Hello ${name}`); 
// Hello Ali
