let person = { name: 'Capt', age: 28 };

function logAge(obj: { age: number }) {
  console.log(obj.age); // 28
}
logAge(person); // 28


interface personAge {
  age: number;
}

function logAge(obj: personAge) {
  console.log(obj.age);
}
let person = { name: 'Capt', age: 28 };
logAge(person);

// option 속성은 꼭 사용하지 않아도 오류로 나타나지 않는다.
interface CraftBeer {
  name: string;
  hop?: number;  
}

let myBeer = {
  name: 'Saporo'
};
function brewBeer(beer: CraftBeer) {
  console.log(beer.name); // Saporo
}
brewBeer(myBeer);

// 정의되지 않은 속성이 사용되면 오류를 나타내준다.
function brewBeer(beer: CraftBeer) {
  console.log(beer.brewery); // Error: Property 'brewery' does not exist on type 'Beer'
}
