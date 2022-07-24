// 타입 단언 (type assertion)
var x;
x = 20;
x = 'a';
var y = x as string;

// DOM API 조작
var div = document.querySelector('div') as HTMLDivElement;
div.innerHTML;