// boolean
let isOpen: boolean;
isOpen = true;

// string
let message: string;
message = "foo";

// number
let total: number;
total = 20.3; // it can be hexadecimal

// array (type[])
let array: string[];
array = ["foo", "bar"];

let values: Array<number>;
values = [1,2,3,4,5];

// tuple, you know how much items it has and what type 
let tupla: [number, string]; 
tupla = [12, "April"];

// enum
enum Colors {
    white = '#fff',
    black = '#000'
};

// any
let thing: any; // bad, if thing can be anything, then, thing is nothing, there's no place for type
thing = [1];

// void
function logger(){
    console.log('foo');
}

// null | undefined
type Bla = string | undefined;

// never
function error(): never {
    throw new Error("error");
}

// object 
let cart: object;

cart = {
    key: "foo"
};









