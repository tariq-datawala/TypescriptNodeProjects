import { BankAccount } from "./bankAccount.js";

export class Customer {
    private _firstName: string;
    private _lastName: string;
    private _gender: string;
    private _age: number;
    private mobileNumber: number;
    private _bankAccount: BankAccount;
    
    get FirstName() { return this._firstName; }
    set FirstName(val) { this._firstName = val; }

    get LastName() { return this._lastName;}
    set LastName(val) { this._lastName = val;}

    get Gender() { return this._gender; }
    set Gender(val) { this._gender = val; }
    
    get Age() { return this._age; }
    set Age(val) { this._age = val; }

    get MobileNumber() { return this.mobileNumber; }
    set MobileNumber(val) { this.mobileNumber = val; }

    get BankAccount() { return this._bankAccount; }
    set BankAccount(val) { this._bankAccount = val; }

    customerInfo():string {
        return `Name :${this.FirstName} ${this.LastName}
        Age: ${this.Age}
        Gender: ${this.Gender}
        Mobile: ${this.MobileNumber}
        Account Balance: ${this.BankAccount.AccountBalance}`
    }
}