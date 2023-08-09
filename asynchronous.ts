// TS는 비동기 프로그래밍을 수행하는 데 매우 유용한 기능과 패턴 제공.
// TS의 타입 시스템과 비동기 패턴으로 안정적이고 유지보수 가능한 비동기 코드 작성 가능.

// Promise
// Promise는 비동기 작업을 표현하고 처리하는 데 사용되는 내장 객체.
// TS는 제네릭을 통해 비동기 작업의 결과 타입을 추론 가능.
// Promise 체이닝을 통해 비동기 작업을 순차적으로 연결, 효과적인 에러 처리 가능.

function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    // 비동기 작업 수행: 2초 후에 작업 완료 흉내
    setTimeout(() => {
      const success = true; // 이 값이 false라면 실패로 간주

      if (success) {
        resolve('데이터를 성공적으로 불러왔습니다.');
      } else {
        reject(new Error('데이터 불러오기 실패!'));
      }
    }, 2000);
  });
}

// 사용 예:
fetchData()
  .then(data => console.log(data)) // '데이터를 성공적으로 불러왔습니다.' 출력
  .catch(error => console.error(error));
