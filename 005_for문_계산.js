// 다음 코드의 출력값으로 알맞은 것은?
var a = 10
var b = 2

for(var i = 1; i < 5; i+= 2) {
    a += i
}

console.log(a+b)

// for문을 만나면 코드 실행
// i = 1일 때 a = 10 + 1 b = 2
// i = 3일 때 a = 11 + 3 b = 2
// i = 5일 때 x

// 따라서 a + b = 14 + 2 = 16