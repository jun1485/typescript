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

class Handler {
    info: string;
    onClick(this: Handler, e: Event) {
        // 위의 `UIElement` 인터페이스의 스펙에 `this`가 필요없다고 했지만 사용했기 때문에 에러가 발생합니다.
        this.info = e.message;
    }
}
let handler = new Handler();
uiElement.addClickListener(handler.onClick); // error!

    // UIElement 스펙에 맞춘 Handler 구현
class Handler {
    info: string;
    onClick(this: void, e: Event) {
        // `this`의 타입이 void이기 때문에 여기서 `this`를 사용할 수 없습니다.
        console.log('clicked!');
    }
}
let handler = new Handler();
uiElement.addClickListener(handler.onClick);
