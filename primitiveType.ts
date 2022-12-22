let str: string = 'hi';
let num: number = 10;
let isLoggedIn: boolean = false;

let arr: number[] = [1,2,3];
let arr: Array<number> = [1,2,3];

let arr: [string, number] = ['hi', 10];   // tuple
arr[1].concat('!'); // Error, 'number' does not have 'concat'
arr[5] = 'hello'; // Error, Property '5' does not exist on type '[string, number]'.

enum Avengers { Capt, IronMan, Thor }
let hero: Avengers = Avengers.Capt;     // enum

enum Avengers { Capt, IronMan, Thor }
let hero: Avengers = Avengers[0];

enum Avengers { Capt = 2, IronMan, Thor }     // enum index change
let hero: Avengers = Avengers[2]; // Capt
let hero: Avengers = Avengers[4]; // Thor

let str: any = 'hi';
let num: any = 10;
let arr: any = ['a', 2, true];

letunuseful: void = undefined;    // void
function notuse(): void {
  console.log('sth');
}   
