// getter
// setter

class BankAccount {
  private userId: number;
  private userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }


//   //balance k set kortese
//   addBalance(amount: number) {
//     this.userBalance += amount;
//   }


  //sertter use kore set korte chai
   set addBalance(amount: number) {
    this.userBalance += amount;
  }

  //get korbe
//   getBalance(){
//     return this.userBalance;
//   }


//getter use kore get korte chai
    get getBalance() {
        return this.userBalance;
    }  
}

class StudentBankAccount extends BankAccount {
  constructor(userId: number, userName: string, userBalance: number) {
    super(userId, userName, userBalance);
  }
}

const subrotoAccount = new BankAccount(101, "Subroto", 20);

// subrotoAccount.addBalance(100); // modify. // function call kore balance add kortese
// subrotoAccount.addBalance(60); // modify
// console.log(subrotoAccount.getBalance()); // getBalance function call kore balance ta print kortese     
// console.log(subrotoAccount.getBalance())


subrotoAccount.addBalance = 100; // setter use kore balance add kortese
subrotoAccount.addBalance = 60; // setter use kore balance add kortese
console.log(subrotoAccount); 
console.log(subrotoAccount.getBalance); // getter use kore balance print kortese