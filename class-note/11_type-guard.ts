interface Developer {
  name: string;
  skill: string;
}

interface MyPerson {
  name: string;
  age: number;
}

function introduce(): Developer | MyPerson {
  return { name: 'Tony', age: 33, skill: 'Iron making' }
}
var tony = introduce();
// console.log(tony.skill);

if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Developer).age;
  console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
  
}