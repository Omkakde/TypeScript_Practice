class Account {
    private balance: number;
  
    constructor(initialBalance: number) {
      this.balance = initialBalance;
    }
  
    public deposit(amount: number): void {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
  
    public getBalance(): number {
      return this.balance;
    }
  }
  
  const account = new Account(1000);
  account.deposit(500);
  console.log(`Account balance: ${account.getBalance()}`);
  