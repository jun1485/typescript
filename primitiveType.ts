let str: string = 'hi';
let num: number = 10;
let isLoggedIn: boolean = false;

let arr: number[] = [1,2,3];
let arr: Array<number> = [1,2,3];

let arr: [string, number] = ['hi', 10]; // tuple
arr[1].concat('!'); // Error, 'number' does not have 'concat'
arr[5] = 'hello'; // Error, Property '5' does not exist on type '[string, number]'.
