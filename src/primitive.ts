// JS - TS
// string, number, boolean, null, undefined

// TS: never, unknown, void 

let userName: string = "Subroto123";
// userName = 12; // Type 'number' is not assignable to type 'string'.

let userID = 123
// userID = '123'; // Type 'string' is not assignable to type 'number'.

// userName.tofixed() // Property 'toFixed' does not exist on type 'string'.
userID.toFixed()

let isAdmin = false
isAdmin = true 


let x : undefined = undefined; // x = 5; // Type 'number' is not assignable to type 'undefined'.
// x=5
// x='Five'
