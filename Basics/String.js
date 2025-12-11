// Core String////////////////////
// 1) What a string is

// In JavaScript a string is a sequence of UTF-16 code units representing textual data.

// There are string primitives (type string) and String objects (created with new String(...)). Usually you use primitives.

// typeof "x" === "string".

// new String("x") creates an object wrapper — avoid it; it behaves weirdly in comparisons.

// Strings are immutable: operations produce new string values; methods do not modify the original.

// ****2) Creating strings / literal forms
const a = "hello";            // double quotes
const b = 'hello';            // single quotes
const c = `hello`;            // backticks (template literal)
const d = String(123);        // conversion
const e = new String("x");    // String object (avoid)

// const s = "hello";
// s[1] === "e";  //true
// s.charAt(1) === "e";  //true

"💩".length        // 2 (surrogate pair or it's store unicode)
// // Because “💩” cannot fit in a single 16-bit value.
// JavaScript stores it as two pieces internally: like [D83D] [DCA9]


"🇺🇸".length       // 4 (it's not usual 'us', here 2 imogies, so 2*2=4)

"e\u0301".length   // 2 (e + combining acute accent)
Array.from("💩").length // 1 (Array.from() works on code points, not code units. thath's why 1)

// string iteration
// const str = "hello";

// for (const ch of str) {
//   console.log(ch);  // h e l l w  =>it will come new line
// }

// console.log(Array.from("hello"));  //["h", "e", "l", "l", "o"]









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
