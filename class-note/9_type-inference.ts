// 타입 추론 기본 1
var a = 'abc';

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

// 타입 추론 기본 2
// interface Dropdown2<T> {
//   value: T;
//   title: string;
// }

// var shoppingItem: Dropdown2<string> = {
//   value: 'abc',
//   title: 'title',
// }

// 타입 추론 기본 3
interface Dropdown2<T> {
  value: T;
  title: string;
}
interface DetailDropdown<K> extends Dropdown2<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailDropdown<number> = {
  title: 'abc',
  description: 'ab',
  value: 1,
  tag: 2,
}

// Best Common Type
var myArr = [1, 2, true, true, 'a'];