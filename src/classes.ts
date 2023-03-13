abstract class Department {
    // private readonly id: string; // readonly 초기화 한 번만 가능 
    // private name: string;
    static readonly fiscalYear : number = 2020;
    protected employees: string[] = []; // private -> protected 가시성 수정

    constructor( protected readonly id: string, private name: string ) {
        // this.id = id;
        // this.name = name;
        // console.log(Department.fiscalYear);
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe() : void 

    addEmployee(employee: string) : void {
        this.employees.push(employee)
    }

    printEmployeeInformation() : void {
        console.log(`this.employees.length : ${this.employees.length}`);
        console.log(this.employees)
    }
}

class ITDepartment extends Department {

    constructor(id: string, private admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }

    describe(): void {
        console.log('IT Department - ID: ' + this.id);
    }

    printAdminsInfomation(this : ITDepartment) : void {
        console.log('admin information')
        console.log(this.admins.length);
        console.log(this.admins);
    }
}

class AccountingDepartment extends Department {

    private lastReport: string;
    private static instacne : AccountingDepartment;

    private constructor(id: string, private reports: string[]) {
        super(id, 'IT');
        this.lastReport = reports[0];
    }

    static getInstance() : AccountingDepartment {
        if (!AccountingDepartment.instacne) {
            this.instacne = new AccountingDepartment("d2", []);
        }

        return this.instacne;
    }

    describe(): void {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }

        // super.addEmployee(name);
        this.employees.push(name);
    }

    addReport(text: string) {
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

    set mostRecentReport(value: string) {
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