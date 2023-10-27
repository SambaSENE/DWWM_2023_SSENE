class Employees {
    
    constructor(_employe) {
        Object.assign(this, _employe);
        this.email = this.calculerEmail(_employe.employee_name);
         this.salary = this.caculerSalaireMensuel(_employe.employee_salary);
    }

    calculerEmail(_fullName) {
        let fullNameArray = _fullName.split(' ');
        let firstName = fullNameArray[0].toLowerCase();
        let lastName = fullNameArray.slice(1).join('').toLowerCase();
        return `${firstName[0]}.${lastName}@email.fr`;

    }

    caculerSalaireMensuel(_salary){
        return (_salary / 12).toFixed(2)
    }
}
export { Employees };