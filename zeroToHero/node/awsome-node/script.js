const fs = require('fs')

fs.readFile('./hello.txt',(err, data)=>{
    if (err){
        console.log("errrrrrr")
    }
    console.log('1-Async',data.toString('utf8'));
})

const file = fs.readFileSync('./hello.txt')
console.log('2-Sync',file.toString())


//Append//////
// fs.appendFile('./hello.txt','this is so cool',err => {
//     if (err){
//         console.log(err)
//     }
// })


//write//////////
// fs.writeFile('bye.txt','sad to see you go', err => {
//     if(err){
//         console.log(err)
//     }
// })

// Delete///////////

fs.unlink('./bye.txt', err => {
    if (err){
        console.log(err)
    }
    console.log('Inception')
})