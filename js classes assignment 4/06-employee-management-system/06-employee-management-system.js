"use strict";

// Q6: Employee class and annual payout calculation.
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Amit", "IT", 40000),
    new Employee(2, "Sara", "HR", 35000),
    new Employee(3, "Kiran", "Sales", 42000),
    new Employee(4, "Neha", "IT", 50000),
    new Employee(5, "Ravi", "Support", 30000)
];

employees[0].applyBonus(10);

employees.forEach(employee => {
    console.log(`${employee.name} (${employee.department}): ₹${employee.getAnnualSalary()} per year`);
});

const totalAnnualPayout = employees.reduce((total, employee) => {
    return total + employee.getAnnualSalary();
}, 0);

console.log(`Total annual company payout: ₹${totalAnnualPayout}`);
