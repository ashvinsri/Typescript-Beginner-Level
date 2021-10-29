
- What is Typescript ?

    TypeScript is an open source programming language from Microsoft
    Typed superset of JavaScript
    Easily compiled to JavaScript

-Why Should We Use TypeScript? 
    
    TypeScript simplifies JavaScript code, making it easier to read and 
    debug.
    TypeScript gives us all the benefits of ES6 (ECMAScript 6)
    plus more productivity. TypeScript can help us to avoid painful
    bugs that developers commonly run into when writing JavaScript by 
    type checking the code

-Installation

    npm install -g typescript

-Compile

    tsc main.ts --watch
    It will generate .js file 
    Now run by `node main.js'

- Variable Declaration

    let x;   //This is correct
    const x; //Incorrect
    const y=50; //Correct const is always intialised

- Variable Types

    let isBeginner =true;

    Now how will we know that it is boolean?

    let isBeginner: boolean = true;

    let str:string="Hi"

- Accessing Variable 

    let name:string="Ashvin";
    let welcome:string=`Hi guyz,
    Let's welcome ${name} for the prize distribution.`

- Typescript provides us type checking

    let name:string;
    name=true // will raise type mismatch error

- sub types

        let n:null=null;
        let u:undefined=undefined;

        we can assign it to any type no problem

- Array in Typescript

        let arr:number[]=[1,2,3]
        let arr:Array<number>=[1,2,3]

- any type in js
        let random:any=10
        random=true;
        random="ashvin";
    any type never checks data type when we call it by name 

-unknown type in js
        it is similar to any but we can't call it without specifying type;
        let r:unknown = 10;
        r="Hi";
        r.toUpperCase()  will raise an error
        (r as string).toUpperCase();  will not raise an error

-multitype
        let multitype: number|boolean;
        multitype=20;
        multitype=true;

        ok so we could achieve this using any right???
        correct but we will not get good recommendations of function

-Functions in TypeScript
                           parameters        return type
                               |                 |
        function add(num1:number,num2:number):number{
            return num1+num2;
        }
        add(5,10)

- Optional argument
                          parameters        return type
                               |                 |
        function add(num1:number,num2?:number):number{
            return num1+num2;
        }
        We use question mark to make variable as optional

 
