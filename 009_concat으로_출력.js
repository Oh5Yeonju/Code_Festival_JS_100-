// 다음 소스코드를 완성하여 날짜와 시간을 출력하세요. 
// 출력 2019/04/26 11:34:27

var year = '2019'
var month = '04'
var day = '26'
var hour = '11'
var minute = '34'
var second = '27'

// 정답
var result = year.concat(`/${month}/${day} ${hour}:${minute}:${second}`)
// 또는 year.concat('/',month,'/',day,' ',hour,':',minute,':',second)

console.log(result)