// let promices =[
//     delayedPromise("1", 500),
//     delayedPromise("2", 1200),
//     delayedPromise("3", 300),
//     delayedPromise("4", 800),
//     delayedPromise("5", 1000)
// ]

// function delayedPromise(value, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value)
//         }, delay)
//     });
// }
// Promise.all(promices).then(result =>{
//     console.log('успішно')
//     console.log(result)
// })


let promices =[
    randomDelay("1"),
    randomDelay("2"),
    randomDelay("3"),
    randomDelay("4"),
    randomDelay("5")
]
function randomDelay(value) {
    const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${value} (затримка: ${delay} мс)`)
        }, delay);
    });
}
Promise.race(promices).then(result =>{
    console.log('успішно')
    console.log(result)
})
