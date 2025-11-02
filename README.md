javascript matherds

#String Methods

1. length

Use: Returns length of a string (string me kitne characters hain).

let str = "Rajat";
console.log(str.length); // 5

2. toUpperCase()

Use: Converts all letters to uppercase (sab letters ko capital me karta hai).

console.log("hello".toUpperCase()); // "HELLO"

3. toLowerCase()

Use: Converts all letters to lowercase (sab letters ko chhota karta hai).

console.log("HELLO".toLowerCase()); // "hello"

4. trim()

Use: Removes spaces from start and end (extra spaces hata deta hai).

let name = "   Rajat   ";
console.log(name.trim()); // "Rajat"


5. slice(start, end)

Use: Extracts part of a string (string ka hissa nikalta hai).


let text = "JavaScript";
console.log(text.slice(0, 4)); // "Java"

6. substring(start, end)

Use: Same as slice() but doesn’t accept negative index.

console.log("Hello".substring(1, 4)); // "ell"

7. replace(a, b)

Use: Replaces one part with another (ek word ko doosre se badalta hai).

console.log("Hi Rajat".replace("Rajat", "Jangra")); // "Hi Jangra"

8. includes(value)

Use: Checks if a string contains given value.

console.log("Hello world".includes("world")); // true

9. split(separator)

Use: Splits string into an array.

console.log("a,b,c".split(",")); // ["a","b","c"]

10. concat()

Use: Joins two or more strings.

console.log("Hello".concat(" ", "Rajat")); // "Hello Rajat"

11. charAt(index)

Use: Returns character at given position.

console.log("Rajat".charAt(2)); // "j"

12. indexOf(value)

Use: Returns index of first occurrence.


console.log("banana".indexOf("n")); // 2

13. startsWith(value)

Use: Checks if string starts with value.

console.log("JavaScript".startsWith("Java")); // true







