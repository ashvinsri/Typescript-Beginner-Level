export {}
let message = "Welcome World"
console.log(message)

let sum;
const title="Ram Rahim School";

let name:string="Ashvin";
let total:number=0;

let welcome:string=`Hi guyz,
Let's welcome ${name} for the prize distribution.`

console.log(welcome)

let n:null=null;
let u:undefined=undefined;

let list1:Array<number>=[1,2,3,4,5,6]
let list2:number[]=[1,2,3,4,5,6]
console.log(list1)

// Tuple Generation

let tup1:[string,number]=['Ashvin',2]
console.log(tup1);

//any

let random:any=10;
random=true;
random="ashvin"


// See it is not throwing any type error because data type is any

random.toUpperCase();
//not throwing any error but its not good 

let r:unknown = 10;
r="Hi";

(r as string).toUpperCase();  // Ya know its working

//multitype

let multitype: number|boolean|string;
multitype=20;
multitype=true;
multitype="Ashvin";

//function in typescript

function add(num1:number,num2:number):number{
    return num1+num2;
}
add(5,6);

function sub(num1:number,num2?:number):number{
    return num1-num2;
}
sub(5);
sub(10,5);

interface Person{
    firstName:string;
    lastName:string;
}

function fullName(person:Person){
    console.log(`${person.firstName} ${person.lastName}`)
}


class Employee{
    employeeName:string;

    constructor(name:string)
    {
        this.employeeName=name 
    }
    greet():string{
        return(`Hello I am ${this.employeeName}`);

    }
}
let emp1=new Employee('Ashvin Sri');
console.log(emp1.employeeName);
console.log(emp1.greet());

class Manager extends Employee{
    constructor(managerName:string)
    {
        super(managerName);
    }
    delegateWork(){
        console.log(`Manager delegated task`)
    }
}


