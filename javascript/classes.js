"use strict";
//abstract class will be used as a class that other classes can extend from
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //only accessible from classes that extend from this class
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
class ItDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT DEP');
    }
}
class AccountingDepartment extends Department {
    constructor(id, accountants, report) {
        //inheritance
        super(id, 'accounting');
        this.accountants = accountants;
        this.lastReport = report;
    }
    static getInstance(id, accountants, report) {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment(id, accountants, report);
        return this.instance;
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('report not found');
    }
    set mostRecentReport(newReport) {
        this.lastReport = newReport;
    }
    addEmployee(employee) {
        if (employee === 'alex')
            return;
        this.employees.push(employee);
    }
    static displayAccountant(text) {
        console.log(`accountant ${text}`);
    }
    describe() {
        console.log('accounting' + this.describe());
    }
}
const itDep = new ItDepartment('2', ['alex']);
const employee = 'george';
itDep.addEmployee(employee);
// dep.describe();
// const accountingDep = new AccountingDepartment(
//   '3',
//   ['tommy'],
//   "we're bleeding cash"
// );
const accountant = AccountingDepartment.getInstance('3', ['tommy'], "we're bleeding cash");
accountant.addEmployee('alex the worker');
console.log(accountant);
// accountingDep.addEmployee('alex'); // accountingDep.addEmployee(employee);
// console.log(accountingDep);
// console.log(itDep);
// console.log('getter', accountingDep.mostRecentReport);
// accountingDep.mostRecentReport = 'nvm false alarm';
// console.log('getter after', accountingDep.mostRecentReport);
AccountingDepartment.displayAccountant('alex');
