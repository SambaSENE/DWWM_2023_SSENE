class Employees {
    
    constructor(_employe) {
        Object.assign(this, _employe);
        this.email = this.calculerEmail(_employe.employee_name);
         this.salary = this.caculerSalaireMensuel(_employe.employee_salary);
        //  this.salaryAll =  this.calculerSalairesTotaux();
    }

    calculerEmail(_fullName) {
        let fullNameArray = _fullName.split(' ');
        let firstName = fullNameArray[0].toLowerCase();
        let lastName = fullNameArray.slice(1).join('').toLowerCase();
        return `${firstName[0]}.${lastName}@email.fr`;

    }

    caculerSalaireMensuel(_salary){
        let salary = ((_salary / 12).toFixed(2))
        return (salary.split().sort()).toString();
    }
     
    calculerSalairesTotaux(_salary){
        let salaire = _salary.split(',')
        return salaire.reduce((accumulator , currentValue) => accumulator + currentValue , _salary);
    }
//     const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10



    
}
export { Employees };