const fs = require('fs')

function question(){
    fs.readFile('./direction.txt',(err,data) => {
        const direction = data.toString().split('')
        //const  directionArray = direction.split('')
        const answer = direction.reduce((acc, currentValue) =>{
            if (currentValue === '('){
                return acc += 1
            }else if (currentValue === ')'){
                return acc -= 1
            }

    }, 0)
    console.log('floor', answer)
})
}
question()

function question2(){
    fs.readFile('./direction.txt',(err,data) => {
        const direction = data.toString()
        const  directionArray = direction.split('')
        let counter = 0
        let acc = 0
        const answer = directionArray.some((currentItem) =>{
            if (currentItem === '('){
                acc += 1
            }else if (currentItem === ')'){
                 acc -= 1
            }
            counter ++
            return acc < 0

    })
    console.log('basement entered at', counter)
})
}
question2()

