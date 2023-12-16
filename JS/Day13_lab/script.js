class Employee {
  name = "";
  dept = "general";

  constructor(name, dept) {
    this.name = name;
    this.dept = dept;
  }
}

class Manager extends Employee {
  report = [];

  constructor(name, dept, report) {
    super(name, dept);
    this.report = report || [];
  }
}

class WorkerBee extends Employee {
  projects = [];

  constructor(name, dept, projects) {
    super(name, dept);
    this.projects = projects || [];
  }
}

class SalesPerson extends WorkerBee {
  quota = 100;
  dept = "sales";

  constructor(name, dept, quota) {
    super(name, dept);
    this.dept = "sales";
    this.quota = quota || 100;
  }
}

class Engineer extends WorkerBee {
  machine = "";
  dept = "engineering";

  constructor(name, dept, machine) {
    super(name, dept);
    this.dept = "engineering";
    this.machine = machine || "";
  }
}

const employee1 = new Employee("Ali", "Marketing");
console.log("employee:", employee1);

const manager1 = new Manager("Mohamed", "Sales", [employee1]);
console.log("manager:", manager1);

const worker1 = new WorkerBee("Salem", "Development", ["ProjectA", "ProjectB"]);
console.log("workerBee:", worker1);

const salesPerson1 = new SalesPerson("Mahmoud", "Sales", 150);
console.log("salesPerson:", salesPerson1);

const engineer1 = new Engineer("Zaki", "Engineering", "MachineX");
console.log("engineer:", engineer1);
