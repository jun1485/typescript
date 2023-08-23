// Decorators는 TS에서 클래스, 메서드, 접근자, 프로퍼티, 매개변수 등을 수정하거나 추가 기능을 부여하는 기능.

// Decorators 사용 전 'tsconfig.json'에서 다음 옵션을 설정.
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "target": "ES5" // 또는 그 이상
  }
}


// Class Decorators
// 클래스 선언 바로 앞에 위치, 클래스의 생성자를 대상으로 작동.
function Logger(constructor: Function) {
  console.log('Class created:', constructor);
}

@Logger
class Person {
  constructor(public name: string, public age: number) {}
}


// Method Decorators
// 메서드 선언 바로 앞에 위치, 클래스의 프로토타입, 메서드 이름, 메서드의 속성 설명자에 대한 접근 가능.
function LogMethod(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  console.log('Method decorated:', propertyName);
}

class Person {
  @LogMethod
  greet() {
    console.log('Hello!');
  }
}


// 접근자 데코레이터
// getter 또는 setter 선언 앞에 위치.
function LogAccessor(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorated:', name);
}

class Person {
  private _age: number = 0;

 @LogAccessor
  get age() {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}


// Property Decorators
// 프로퍼티 선언 앞에 위치.
function LogProperty(target: any, propertyName: string) {
  console.log('Property decorated:', propertyName);
}

class Person {
  @LogProperty
  public name: string;
}


// Parameter Decorators
function LogParameter(target: any, methodName: string, parameterIndex: number) {
  console.log(`Parameter in method ${methodName} at index ${parameterIndex} decorated`);
}

class Person {
  greet(@LogParameter name: string) {
    console.log(`Hello, ${name}!`);
  }
}
