//abstract class will be used as a class that other classes can extend from
abstract class Department {
  //only accessible from classes that extend from this class
  protected employees: string[] = [];

  constructor(private readonly id: string, private readonly name: string) {}

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

class ItDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }
  describe(this: Department) {
    console.log('IT DEP');
  }
}

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;

  private lastReport: string;

  static getInstance(id: string, accountants: string[], report: string) {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment(id, accountants, report);
    return this.instance;
  }

  private constructor(
    id: string,
    public accountants: string[],
    report: string
  ) {
    //inheritance
    super(id, 'accounting');
    this.lastReport = report;
  }
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('report not found');
  }

  set mostRecentReport(newReport: string) {
    this.lastReport = newReport;
  }

  addEmployee(employee: string): void {
    if (employee === 'alex') return;
    this.employees.push(employee);
  }

  static displayAccountant(text: string) {
    console.log(`accountant ${text}`);
  }
  describe(this: Department): void {
    console.log('accounting' + this.describe());
  }
}

const itDep = new ItDepartment('2', ['alex']);

const employee: string = 'george';
itDep.addEmployee(employee);
// dep.describe();

// const accountingDep = new AccountingDepartment(
//   '3',
//   ['tommy'],
//   "we're bleeding cash"
// );

const accountant = AccountingDepartment.getInstance(
  '3',
  ['tommy'],
  "we're bleeding cash"
);
accountant.addEmployee('alex the worker');
console.log(accountant);
// accountingDep.addEmployee('alex'); // accountingDep.addEmployee(employee);
// console.log(accountingDep);
// console.log(itDep);
// console.log('getter', accountingDep.mostRecentReport);
// accountingDep.mostRecentReport = 'nvm false alarm';
// console.log('getter after', accountingDep.mostRecentReport);

AccountingDepartment.displayAccountant('alex');
