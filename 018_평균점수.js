// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다. 

const score = prompt('국어, 수학, 영어 점수를 각각 입력해주세요.')
const scoreArr = score.split(' ')
let sum = 0

for(let i = 0; i < scoreArr.length; i++) {
    sum = sum + parseInt(scoreArr[i], 10)
}
console.log(sum/scoreArr.length)