class Employees {
    constructor(_employe) {
        Object.assign(this, _employe);
    }

    calculerEmail(_fullName)
    {
       let firstName =_fullName.split(' ');
       let lastname = firstName[0];
       return firstName + lastname + '@email.fr'; 
    }
}
export { Employees , calculerEmail };