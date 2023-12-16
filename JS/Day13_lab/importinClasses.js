import { Employee, Manager, WorkerBee, SalesPerson, Engineer } from "./script.js";

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