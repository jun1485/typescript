// Partial<T> 유틸리티 타입은 'T' 타입의 모든 속성을 선택적으로 만듦.
// 'T'타입에 있는 모든 속성을 포함하되, 각 속성이 필수가 아닌 선택 사항으로 변경됨.
// 기존 타입의 일부 속성만을 사용해야 할 때 유용하게 사용.

interface User {
  id: number;
  name: string;
  email: string;
}

// User 인터페이스의 모든 속성을 선택적으로 만듭니다.
const updateUser: Partial<User> = {
  email: "example@example.com"
};
