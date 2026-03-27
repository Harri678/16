export interface Employee {
    name: string;
    age: number;
    salary: number;
}

export class EmployeeStatistics{

    private employees: Employee[]

    constructor(employees: Employee[]){
        if(employees.length == 0){
            throw new Error("A dolgozók megadása kötelező")
        }
        this.employees = employees
    }

    getMaxSalary(): number{
        let max = 0

        this.employees.forEach(element => {
            if(element.salary > max){
                max = element.salary
            }
        });
        return max
    }

    getAverageAge(): number{
        let sum = 0
        this.employees.forEach(element => {
            sum += element.age
        });
        return sum/this.employees.length
    }

    getHighestPaidEmployee(): Employee {
        let max = this.employees[0]!

        this.employees.forEach(element => {
            if(element.salary > max.salary){
                max = element
            }
        });
        return max
    }

    countEmployeesOverSalary(salary: number): number{
        let sum = 0
        this.employees.forEach(element => {
            if(element.salary > salary){
                sum++
            }
        });
        return sum
    }

}