class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    logDetails(): void {
        console.log(`The player ${this.name} and is ${this.age} years old.`);
    }
}

class CharAccount extends UserAccount{
    private nickname: string; // it cant be read or changed outside of this class
    readonly level: number; // it can be read, but it can not be changed

    constructor(name: string, age: number, nickname: string, level: number){
        super(name, age)

        this.nickname = nickname;
        this.level = level;
    }

    get getLevel(){
        return this.level;
    }
}


const faxina = new UserAccount("Faxina", 19);
const guilherme = new CharAccount("Guilherme", 21, "GuiSlayer", 311)

faxina.logDetails()
guilherme.logDetails()
console.log(guilherme.getLevel);
 