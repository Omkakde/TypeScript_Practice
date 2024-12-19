
// Allows any type, disabling type-checking for that variable
let valuet: any;
valuet = 42; // OK
valuet = "Hello"; // OK
valuet = true; // OK


// Similar any, but requires type narrowing before use
let unknownValue: unknown;
unknownValue = 42; // OK
unknownValue = "Hello"; // OK


// Represents the absence of return value
function logMessage(message: string): void {
  console.log(message);
}

let result: void = logMessage("Hello");
// result can only be undefined (in strict mode).


//values that never occur
function throwError(message: string): never {
  throw new Error(message); // Function never returns
}

function infiniteLoop(): never {
  while (true) {
    console.log("hallo");
  }
}
