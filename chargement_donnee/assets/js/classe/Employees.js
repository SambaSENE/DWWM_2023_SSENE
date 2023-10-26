class Employees {
    constructor(_employe) {
        Object.assign(this, _employe);
    }

    calculerEmail(_fullName) {
        let fullNameArray = _fullName.split(' ');
        let firstName = fullNameArray[0].toLowerCase();
        let lastName = fullNameArray.slice(1).join('').toLowerCase();
        return `${firstName[0]}.${lastName}@email.fr`;

    }
}
export { Employees };