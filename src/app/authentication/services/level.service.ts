import { Injectable } from '@angular/core'

@Injectable()
export class LevelService {
    constructor() {}

    // คำนวณ Level
    calculateLevel(exp) {
        var level
        if (exp || exp == 0) {
            if (exp < 30) {
                level = 1
            } else if (exp < 50) {
                level = 2
            } else if (exp < 100) {
                level = 3
            } else if (exp < 130) {
                level = 4
            } else if (exp < 150) {
                level = 5
            } else if (exp < 200) {
                level = 6
            } else if (exp < 230) {
                level = 7
            } else if (exp < 250) {
                level = 8
            } else if (exp < 300) {
                level = 9
            } else if (exp < 330) {
                level = 10
            } else if (exp < 350) {
                level = 11
            } else if (exp < 400) {
                level = 12
            } else if (exp < 430) {
                level = 13
            } else if (exp < 450) {
                level = 14
            } else if (exp < 500) {
                level = 15
            } else if (exp < 530) {
                level = 16
            } else if (exp < 550) {
                level = 17
            } else if (exp < 600) {
                level = 18
            } else if (exp < 630) {
                level = 19
            } else if (exp < 650) {
                level = 20
            } else if (exp < 700) {
                level = 21
            } else if (exp < 730) {
                level = 22
            } else if (exp < 750) {
                level = 23
            } else if (exp < 800) {
                level = 24
            } else if (exp < 830) {
                level = 25
            } else if (exp < 850) {
                level = 26
            } else if (exp < 900) {
                level = 27
            } else if (exp < 930) {
                level = 28
            } else if (exp < 950) {
                level = 29
            } else if (exp < 1000) {
                level = 30
            } else if (exp >= 1000) {
                level = 31
            }
        }
        return level
    }

    // คำนวณจาก % Level
    calExpLeftToNextLevel(exp) {
        var level: Number
        if (exp || exp == 0) {
            if (exp < 30) {
                level = (exp * 100) / 29
            } else if (exp < 50) {
                level = ((exp - 30) * 100) / 19
            } else if (exp < 100) {
                level = ((exp - 50) * 100) / 49
            } else if (exp < 130) {
                level = ((exp - 100) * 100) / 29
            } else if (exp < 150) {
                level = ((exp - 130) * 100) / 19
            } else if (exp < 200) {
                level = ((exp - 150) * 100) / 49
            } else if (exp < 230) {
                level = ((exp - 200) * 100) / 29
            } else if (exp < 250) {
                level = ((exp - 230) * 100) / 19
            } else if (exp < 300) {
                level = ((exp - 250) * 100) / 49
            } else if (exp < 330) {
                level = ((exp - 300) * 100) / 29
            } else if (exp < 350) {
                level = ((exp - 330) * 100) / 19
            } else if (exp < 400) {
                level = ((exp - 350) * 100) / 49
            } else if (exp < 430) {
                level = ((exp - 400) * 100) / 29
            } else if (exp < 450) {
                level = ((exp - 430) * 100) / 19
            } else if (exp < 500) {
                level = ((exp - 450) * 100) / 49
            } else if (exp < 530) {
                level = ((exp - 500) * 100) / 29
            } else if (exp < 550) {
                level = ((exp - 530) * 100) / 19
            } else if (exp < 600) {
                level = ((exp - 650) * 100) / 49
            } else if (exp < 630) {
                level = ((exp - 600) * 100) / 29
            } else if (exp < 650) {
                level = ((exp - 630) * 100) / 19
            } else if (exp < 700) {
                level = ((exp - 650) * 100) / 49
            } else if (exp < 730) {
                level = ((exp - 700) * 100) / 29
            } else if (exp < 750) {
                level = ((exp - 730) * 100) / 19
            } else if (exp < 800) {
                level = ((exp - 750) * 100) / 49
            } else if (exp < 830) {
                level = ((exp - 800) * 100) / 29
            } else if (exp < 850) {
                level = ((exp - 830) * 100) / 19
            } else if (exp < 900) {
                level = ((exp - 850) * 100) / 49
            } else if (exp < 930) {
                level = ((exp - 900) * 100) / 29
            } else if (exp < 950) {
                level = ((exp - 930) * 100) / 19
            } else if (exp < 1000) {
                level = ((exp - 950) * 100) / 49
            } else if (exp >= 1000) {
                level = 100
            }
        }

        if(level==100){
            level=99.99
        }

        return Number(level)
        // return Number(level)/10;
    }
}
