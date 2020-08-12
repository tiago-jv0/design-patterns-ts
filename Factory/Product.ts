interface Employee {
	doWork: () => void;
}


class Designer implements Employee {
    doWork(): void {
        console.log('Making design')
    }
}

class Programmer implements Employee {
    doWork(): void {
        console.log('Making software')
    }
}

abstract class Company {

    abstract getEmployees() : Array<Employee>

    createSoftware() {
        const employees = this.getEmployees();

        employees.forEach(employee => {
            employee.doWork()
        })
    }
}

class SoftwareCompany extends Company {
    getEmployees() : Array<Employee> {
        return [new Designer, new Programmer]
    }
}

const company : Company = new SoftwareCompany();

company.createSoftware()