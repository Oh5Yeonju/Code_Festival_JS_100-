// 입력으로 키가 주어집니다. 이때 주어진 키가 150이 넘으면 Yes, 틀리면 No를 출력하세요.

let height = prompt('키를 입력하세요.')
if(parseInt(height) >= 150) {
    console.log('YES')
} else {
    console.log('NO')
}