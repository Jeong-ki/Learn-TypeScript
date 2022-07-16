// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', '10'];
let items: number[] = [1, 2, 3];

// TS 튜플 (배열의 모든index에 타입이 정의된 것)
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
// let person: object = {
//   name: 'capt',
//   age: 100,
// };
let person: { name: string, age: number } = {
  name: 'thor',
  age: 33,
}

// TS 진위값 (boolean)
let show: boolean = true;