function sum(a, b) {    // normal JS
  return a + b;
}

function sum(a: number, b: number): number {
  return a + b;
}
sum(10, 20); // 30
sum(10, 20, 30); // error, too many parameters
sum(10); // error, too few parameters

function sum(a: number, b?: number): number {     // ?연산
  return a + b;
}
sum(10, 20); // 30
sum(10, 20, 30); // error, too many parameters
sum(10); // 타입 에러 없음



function sum(a: number, ...nums: number[]): number {    // REST 
  const totalOfNums = 0;
  for (let key in nums) {
    totalOfNums += nums[key];
  }
  return a + totalOfNums;
}


interface UIElement {
  // 아래 함수의 `this: void` 코드는 함수에 `this` 타입을 선언할 필요가 없다는 의미
  addClickListener(onclick: (this: void, e: Event) => void): void;
}
