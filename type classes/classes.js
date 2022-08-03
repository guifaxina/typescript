"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} and is ${this.age} years old.`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    get getLevel() {
        return this.level;
    }
}
const faxina = new UserAccount("Faxina", 19);
const guilherme = new CharAccount("Guilherme", 21, "GuiSlayer", 311);
faxina.logDetails();
guilherme.logDetails();
