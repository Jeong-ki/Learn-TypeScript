function Person1(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person1('캡틴', 100);

class Person1 {
  // 클래스 로직
  constructor(name, age) {
    console.log('생성 되었습니다.');
    this.name = name;
    this.age = age;
  }
}

var seho = new Person1('세호', 30); // 생성 되었습니다.
console.log(seho);

// prototype
var user = { name: 'capt', age: 100 };
var admin = {};
admin.__proto__ = user;
console.log(admin.name, admin.age);
admin.role = 'admin';
console.log(admin);