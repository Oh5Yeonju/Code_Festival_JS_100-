// 다음 소스코드에서 class를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드세요.
// 출력
// 545 210 10
// 파이어볼
class Wizard {
    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack() {
        console.log('파이어볼')
    }
}

const x = new Wizard(545, 210, 10)
const y = new Wizard(100, 100, 100)
console.log(x.health, x.mana, x.armor)
console.log(y.health, y.mana, y.armor)
x.attack()
y.attack()

// 다음 데이터에서 변수의 이름만 출력하고 싶으면 방법은? 

class Wizard {
    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack() {
        console.log(`${JSON.stringify(this)}의 파이어볼 공격`)
    }
}