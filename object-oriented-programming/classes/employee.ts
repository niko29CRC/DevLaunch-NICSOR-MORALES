/* EJERCICIO DEL EMPLEADO */


class Employee {
   
    public _firstName: string
    public _lastName: string
    private _salary: number

    constructor (pFN: string, pLN: string, pSalary: number) {
        this._firstName = pFN
        this._lastName = pLN
        this._salary = pSalary
    }

    set salary(pNewsalary: number) {
        if(pNewsalary > 0) {
            this._salary = pNewsalary
        }
    }

    get salary() : number {
        return this._salary
    }

    giveRaise(extra: number) {
        const newSalary = this._salary + extra
        this._salary = newSalary
        return newSalary
    }
}

const e1 = new Employee('Anthony', 'Soto', 10000)
console.log('Salary:', e1.salary)
e1.giveRaise(2500)
console.log('New Salary:', e1.salary)