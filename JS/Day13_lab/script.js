export class Employee {
  name = "";
  dept = "general";

  constructor(name, dept) {
    this.name = name;
    this.dept = dept;
  }
}

export class Manager extends Employee {
  report = [];

  constructor(name, dept, report) {
    super(name, dept);
    this.report = report || [];
  }
}

export class WorkerBee extends Employee {
  projects = [];

  constructor(name, dept, projects) {
    super(name, dept);
    this.projects = projects || [];
  }
}

export class SalesPerson extends WorkerBee {
  quota = 100;
  dept = "sales";

  constructor(name, dept, quota) {
    super(name, dept);
    this.dept = "sales";
    this.quota = quota || 100;
  }
}

export class Engineer extends WorkerBee {
  machine = "";
  dept = "engineering";

  constructor(name, dept, machine) {
    super(name, dept);
    this.dept = "engineering";
    this.machine = machine || "";
  }
}
