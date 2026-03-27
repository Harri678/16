import { describe, expect, test } from "vitest";
import { EmployeeStatistics } from "./EmployeeStatistics.js";
import type { Employee } from "./EmployeeStatistics.js";

const test1: Employee[] = [
    { name: "Anna", age: 25, salary: 3000 },
    { name: "Béla", age: 30, salary: 4000 },
    { name: "Cecil", age: 35, salary: 5000 }
];

const test2: Employee[] = [
    { name: "Dani", age: 20, salary: 2000 },
    { name: "Erika", age: 40, salary: 6000 }
];

describe("EmployeeStatistics", () =>{
    test("Nem lehet üres", () => {
        expect(() => new EmployeeStatistics([])).toThrow
    })

    test("getMaxSalary test1-el", () => {
        const employee = new EmployeeStatistics(test1)
        expect(employee.getMaxSalary()).toBe(5000)
    })

    test("getMaxSalary test2-vel", () => {
        const employee = new EmployeeStatistics(test2)
        expect(employee.getMaxSalary()).toBe(6000)
    })

    //avg age
    test("getAverageAge test1-el", () => {
        const employee = new EmployeeStatistics(test2)
        expect(employee.getAverageAge()).toBe(30)
    })

    test("getAverageAge test2-vel", () => {
        const employee = new EmployeeStatistics(test2)
        expect(employee.getAverageAge()).toBe(30)
    })

    //highest paid
    test("gethighestPaidEmployee test1-el", () => {
        const employee = new EmployeeStatistics(test1)
        expect(employee.getHighestPaidEmployee()).toBe(test1[2])
    })

    test("gethighestPaidEmployee test2-vel", () => {
        const employee = new EmployeeStatistics(test2)
        expect(employee.getHighestPaidEmployee()).toBe(test2[1])
    })


    test("countEmployeesOverSalary test1-el", () => {
        const employee = new EmployeeStatistics(test1)
        expect(employee.countEmployeesOverSalary(10)).toBe(3)
        expect(employee.countEmployeesOverSalary(4000)).toBe(1)
        expect(employee.countEmployeesOverSalary(10000)).toBe(0)
    })
    
    test("countEmployeesOverSalary test2-vel", () => {
        const employee = new EmployeeStatistics(test2)
        expect(employee.countEmployeesOverSalary(10)).toBe(2)
        expect(employee.countEmployeesOverSalary(4000)).toBe(1)
        expect(employee.countEmployeesOverSalary(4555000)).toBe(0)
    })

})