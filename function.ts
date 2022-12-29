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
