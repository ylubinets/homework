class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    set name (name) {
        this._name = name;
    }

    get name () {
        return this._name;
    }
    set age (age) {
        this._age = age;
    }

    get age () {
        return this._age;
    }
    set salary (salary) {
        this._salary = salary;
    }

    get salary () {
        return this._salary;
    }
}

class Programmer extends Employee{
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this.lang = lang;
    }
    set salary (salary){
        this._salary = salary * 3;
    }
    get salary () {
        return this._salary ;
    }
}

const user1 = new Programmer("LaFlame", "40", 5000, ["JS", "C#", "Python"]);
const user2 = new Programmer("LaFleur", "30", 4000, ["JS", "C"]);
const user3 = new Programmer("LaFlam", "20", 1000, ["JS"]);
const user4 = new Employee('La', '18',750);


console.log("user1", user1);
console.log("user2", user2);
console.log("user3", user3);
console.log("user4", user4);

