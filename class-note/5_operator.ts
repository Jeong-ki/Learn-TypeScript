// function logMessage(value: string) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(5);

// Union Type
let jeong: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(5)

interface Developers {
  name: string;
  skill: string;
}

interface People {
  name: string;
  age: number;
}

// function askSomeone(someone: Developers | People) {
//   // someone.name;
//   // someone.age;
//   // someone.skill;
// }
// askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
// askSomeone({ name: '캡틴', age: 100 });

function askSomeone(someone: Developers & People) {
  someone.name;
  someone.age;
  someone.skill;
}
// askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 10 });
// askSomeone({ name: '캡틴', age: 100 });

let gogo: string | number | boolean;
let hello: string & number & boolean;