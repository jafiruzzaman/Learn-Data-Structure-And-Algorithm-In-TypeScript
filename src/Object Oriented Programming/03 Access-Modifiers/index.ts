export {};

export class BankAccount {
  public owner: string; // 🙋‍♂️ Access from Anywhere
  private balance: number; // 🚨 accessible only inside the class
  private branch: string; // 🚨 accessible only inside the class
  constructor(owner: string, balance: number, branch: string) {
    this.owner = owner;
    this.balance = balance;
    this.branch = branch;
  }

  // set balance using setters
  public deposit(amount: number): void {
    this.balance += amount;
  }
  public getBalance(): number {
    return this.balance;
  }
}

// Create a Object of Bank
const BracBank: BankAccount = new BankAccount('Mohammad', 500, 'Uttara');
BracBank.deposit(500);
// BracBank.balance ❌ Error: private
console.log('Account Owner ', BracBank.owner);
console.log(BracBank.getBalance());
