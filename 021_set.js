// set을 만드는 방법은? new Set(빈값 또는 배열)
// set: 중복되지 않는 데이터를 저장하는 데이터 구조입니다. 

const list = [1, 2, 2, 3, 6, 5, 6, 6, 7, 12]

let setVal = new Set(list)

// set에서 지원하는 메서드
setVal.add(10)
setVal.delete(6)

// 해당 데이터에 값이 있는지 없는지를 확인하고 boolean 출력
setVal.has(10)