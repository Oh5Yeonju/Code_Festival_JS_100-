// 2-gram은 문자열에서 두 개의 연속된 요소를 출력하는 방법입니다. 
// 예: happy -> ha ap pp py
const words = prompt('문자를 입력하세요.')

for(let i = 0; i < words.length-1; i++) {
    console.log(words[i], words[i+1])
}


// const words = prompt('문자를 입력하세요.')
// for(let i = 0; i < words.length; i++) {
//     for(let j = 0; j < 2; j++) {
//         let newWords = '';
//         newWords += words[j]
//     }
// }