let secretValue: unknown = "typescript is awesome";

// Type Assertion
// as keyword is used to tell the compiler that we know the type of the variable
let upperValue = (secretValue as string).toUpperCase();

console.log(upperValue);