var Account = /** @class */ (function () {
    function Account(initialBalance) {
        this.balance = initialBalance;
    }
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited ".concat(amount, ". New balance: ").concat(this.balance));
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
var account = new Account(1000);
account.deposit(500);
console.log("Account balance: ".concat(account.getBalance()));
