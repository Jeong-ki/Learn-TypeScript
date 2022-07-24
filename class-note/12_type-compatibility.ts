// 인터페이스
interface Development {
  name: string;
  skill: string;
}
interface Guys {
  name: string;
}

var development: Development;
var guys: Guys;
// development = guys;
// guys = development;

// 함수
var plus = function (a: number) {
  // ...
}
var more = function (a: number, b: number) {
  // ...
}
// plus = more;
more = plus;

// 제네릭
interface Empty<T> {
  // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempyt1 = notempyt2;
notempyt2 = notempty1;
