// Access >> modify

class BankAccount {
    private userId: number;
    private userName: string;
    protected  userBalance: number;
    
    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;


    }

    private addBalance(amount: number) {
        this.userBalance += amount;
    }

    getBalance() {
        return this.userBalance;
    }


}




class StudentBankAccount extends BankAccount {
    constructor(userId: number, userName: string, userBalance: number) {
        super(userId, userName, userBalance);
    }    
}


const subrotoAccount = new BankAccount(101, 'Subroto', 500);

// subrotoAccount.addBalance(20); // modify
// subrotoAccount.addBalance(100); // modify

console.log(subrotoAccount);
