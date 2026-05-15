function logLength<T extends { length: number }>(input: T): number {
  return input.length;
}

console.log(logLength("TypeScript")); // 10

console.log(logLength([1, 2, 3, 4])); // 4

console.log(logLength(100)); // Error: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.