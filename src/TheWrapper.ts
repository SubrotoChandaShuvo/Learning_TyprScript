type DataType<T> = T extends any[] ? "Large" : "Small";

type A = DataType<string[]>;  // "Large"
type B = DataType<number[]>;  // "Large"

type C = DataType<string>;    // "Small"
type D = DataType<number>;    // "Small"