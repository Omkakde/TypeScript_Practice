// Allows any type, disabling type-checking for that variable
var valuet;
valuet = 42; // OK
valuet = "Hello"; // OK
valuet = true; // OK
// Similar any, but requires type narrowing before use
var unknownValue;
unknownValue = 42; // OK
unknownValue = "Hello"; // OK
// Represents the absence of return value
function logMessage(message) {
    console.log(message);
}
var result = logMessage("Hello");
// result can only be undefined (in strict mode).
//values that never occur
function throwError(message) {
    throw new Error(message); // Function never returns
}
function infiniteLoop() {
    while (true) {
        console.log("hallo");
    }
}
