let secretValue: unknown = "typescript is awesome";

// Type Assertion
let upperValue = (secretValue as string).toUpperCase();

console.log(upperValue);