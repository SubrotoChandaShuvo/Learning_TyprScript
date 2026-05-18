// static >> Oporibortonshil

class Counter {
    static count : number = 0;

    static increment() {
        return Counter.count+=1;
    }

    static decrement() {
        return Counter.count-=1;
    }
}


// const instance1 = new Counter();  // ekta memory
// console.log(instance1.increment()); // 1
// console.log(instance1.increment()); // 1 >> 2
// console.log(instance1.increment()); // 2 >> 3
// console.log(instance1.increment()); // 3 >> 4

// const instance2 = new Counter();  //arekta different memory
// console.log(instance2.increment()); 
// console.log(instance2.increment()); 
// console.log(instance2.increment()); 


// const instance3 = new Counter();  //arekta different memory
// console.log(instance3.increment()); 
// console.log(instance3.increment()); 
// console.log(instance3.increment()); 
// console.log(instance3.decrement());



console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.decrement());
