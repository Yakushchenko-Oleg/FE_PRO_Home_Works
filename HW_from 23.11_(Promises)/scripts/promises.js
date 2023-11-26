    // 1.1 Что выведет следующий код
console.log('start') // 1 синхронный код

const promise11 = new Promise((resolve, reject) => {
  console.log(1) // 2 синхронный код
})

const fn1 = () => { console.log('3') // функция нигде не вызывается
}

console.log('end') // 3 синхронный код





// 1.2 Какой результат выполнения этого кода?
console.log('start') // 1 синхронный код

const promise12 = new Promise((resolve, reject) => {
  console.log(1) // 2 синхронный код
  resolve(200)
})

promise12.then((response) => { console.log(response)}) // 4 асинхронная микрозадача

console.log('end') // 3 синхронный код





// 1.3 Какой результат выполнения этого кода?
console.log('start') // 1 синхронный код

const promise13 = new Promise((resolve, reject) => {
  console.log(1) // 2 синхронный код
})

promise13.then((res) => {console.log(2)  }) // Промис не вызывается

console.log('end')   // 3 синхронный код




// 1.4 Какой результат выполнения этого кода?
console.log('start') // 1 синхронный код

setTimeout(() => { // асинхронная макрозадача
  console.log('setTimeout')
})

Promise.resolve().then(() => { // асинхронная микрозадача
  console.log('resolve')
})

console.log('end') // // 2 синхронный код




// 1.5
function job() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world')
    }, 2000)
  })
}

job().then((data) => console.log(data)) // через 2 секунды в консоль выведится 'hello world'



// 1.6
function job(data) {
  return new Promise((resolve, reject) => {
    if (isNaN(data)) {
      reject('error')
    } else if (data % 2 === 0) {
      setTimeout(() => {
        reject('even')
      }, 2000)
    } else {
      setTimeout(() => {
        resolve('odd')
      }, 1000)
    }
  })
}

job('aasd')
  .then((data) => console.log(data))
  .catch((error) => console.log(error)) // сработает catch без таймера и выведет в консоль "error"

job(2)
  .then((data) => console.log(data)) 
  .catch((error) => console.log('rejected: ' + error))// сработает catch и через 2 секунды  выведет в консоль "rejected: even" т.к. передаваемое число 2 является четнм числом, соответствует и условию reject (else if )

job(3).then((data) => console.log(data)) //  срабатывает then который соответствует resolve выводится 'odd' через 1 секунду 

// 1.7
console.log('start') // 1 синхронный код

const promise1 = new Promise((resolve, reject) => {
  console.log(1) // 2 синхронный код
  resolve(200)                              // 5 асинхронная микрозадача
  console.log(3) // 2 синхронный код
})

promise1.then((res) => {  console.log(res)}) // 5 асинхронная микрозадача

console.log('end') // 4 синхронный код



//1.8
console.log('start') // 1 синхронная код

const fn = () => new Promise((resolve, reject) => {
    console.log(1) // 3 синхронная код (срабатывает после вызова функции)
    resolve('success')                     // 5 асинхронная задача
  })
console.log('middle') // 2 синхронная код

fn().then((res) => {  console.log(res)})    // 5 асинхронная задача
console.log('end') //  4 синхронная код

//1.9
const promise = new Promise((resolve, reject) => {
  console.log(1) //1 синхронная код (колбек функция)

  setTimeout(() => {
    console.log('timerStart') //4 асинхронная макрозадача
    resolve('success')// 6 асинхронная макрозадача
    console.log('timerEnd')// 5 асинхронная макрозадача
  }, 0)

  console.log(2) // 2 синхронная код
})

promise.then((res) => {console.log(res)})// 3,5 асинхронная микрозадача запускается после 3, выхывает setTimeout и отрабатывает после его окончания

console.log(4) // 3 синхронная код






//1.10
console.log(1) //1 синхронная код

setTimeout(() => console.log(2))// 5 асинхронная микрозадача 

Promise.resolve().then(() => console.log(3)) // 3 асинхронная микрозадача

Promise.resolve().then(() => setTimeout(() => console.log(4))) // 7 асинхронная микрозадача после выполнение таймера (асинхронной макрозадачи)

Promise.resolve().then(() => console.log(5)) // 4 асинхронная микрозадача

setTimeout(() => console.log(6)) // 6 асинхронная микрозадача 

console.log(7) //2 синхронная код






// 1.11
let promise1111 = new Promise(function (resolve, reject) {
  resolve(1) // 1 асинхронная микрозадача
  
  setTimeout(() => resolve(2), 1000)// 2 асинхронная макрозадача Таймера таймера Двойка в консоль не выводится т.к. промис на первом шаге и уже вернул resolve 
})

promise1111.then((data) => console.log(data))