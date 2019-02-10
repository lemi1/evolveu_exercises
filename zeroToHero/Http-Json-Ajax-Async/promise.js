const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    } else {
        reject('Error, it broke')
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'hii')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'pookie')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'is it me')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values)
    })

promise.then(result => console.log(result));