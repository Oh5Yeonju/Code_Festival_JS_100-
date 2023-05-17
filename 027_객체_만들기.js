// 학생이름이 key이고 수학 점수가 value인 객체를 출력하세요.
// 첫 번째 입력 minji woohyun 두 번째 입력 70 100 
// {'minji': 80, 'woohyun': 90}

let students = prompt('학생 이름을 입력하세요.').split(' ')
let score = prompt('점수를 입력하세요.').split(' ')
let obj = new Object()

for(let i = 0; i < students.length; i++) {
    obj[students[i]] = score[i]
}