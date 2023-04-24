// 공백으로 구분하여 두 숫자가 주어집니다. 
// 두 번째 숫자로 첫 번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분해 출력하세요. 
// 강사님 코드
const num = ["7", "2"]

let val1 = Math.floor(parseInt(num[0], 10) / parseInt(num[1], 10))
let val2 = parseInt(num[0], 10) % parseInt(num[1], 10)

console.log(val1, val2)

// 내 코드
const nums = prompt('두 가지 숫자를 입력하세요').split(' ')
console.log(`${Math.floor(parseInt(nums[0]) / parseInt(nums[1]))} ${parseInt(nums[0]) % parseInt(nums[1])}`)
