"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = []; // private -> protected 가시성 수정
        // this.id = id;
        // this.name = name;
        // console.log(Department.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(`this.employees.length : ${this.employees.length}`);
        console.log(this.employees);
    }
}
// private readonly id: string; // readonly 초기화 한 번만 가능 
// private name: string;
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
    printAdminsInfomation() {
        console.log('admin information');
        console.log(this.admins.length);
        console.log(this.admins);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'IT');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (!AccountingDepartment.instacne) {
            this.instacne = new AccountingDepartment("d2", []);
        }
        return this.instacne;
    }
    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        // super.addEmployee(name);
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    getReports() {
        console.log(this.reports);
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found!');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
}
// const accounting = new Department("d1", "회계");
const itDept = new ITDepartment("d2", ['Max']);
// const accounting2 = new AccountingDepartment("d2", []);
const accounting2 = AccountingDepartment.getInstance();
// console.log(accounting2.mostRecentReport);
accounting2.addReport("Something went wrong");
// accounting2.mostRecentReport = '';
console.log(accounting2.mostRecentReport);
accounting2.addEmployee('Max');
accounting2.addEmployee('Manu');
accounting2.getReports();
accounting2.printEmployeeInformation();
accounting2.describe();
const employee1 = Department.createEmployee('Max');
// itDept.addEmployee('Max');
// itDept.addEmployee('Manu');
// itDept.describe();
// itDept.printEmployeeInformation();
// itDept.printAdminsInfomation();
// accounting.describe();
// const accountingCopy = { name: "전산", describe : accounting.describe } // 포인터 전달
// accountingCopy.describe(); // undefined -> this가 accountingCopy 인스턴스를 가르킴
// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");
// accounting.printEmployeeInformation();
