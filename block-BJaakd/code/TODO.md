1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`


// Your code
```js

let a = new Promise((resolve ,reject) =>{
 setTimeout(() => {
     resolve(`Promise Resolved!`)
 },1000)

})
a.then((val) => console.log(val));
```

2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

```js
let b = new Promise((resolve , reject) => {
 
     reject(`Rejected Promise!`);

})
b.catch((val) => console.log(val));
```

3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log message `Promise Settled!`.

```js
  let a = new Promise((resolve ,reject) =>{
 setTimeout(() => {
     reject(`Rejected Promise!`)
 },1000)

})
.catch(() => console.log(`Promise Settled!`));
.finally(() => console.log(`Promise Settled!`));
```

4. What will be the output of the code below.

```js
console.log('A');

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log('B'), 0); // callback queue

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log('C'));

console.log('D');

//Output A,D,C,B
```

5. Write a function named `wait` that accepts `time` in ms returns a promise. The promise gets resolved after given time.

```js

function wait(time) {
  return new Promise((resolve , reject) =>{
    setTimeout(()=> {
        resolve('promise resolve');
    } , time)

  })
}
wait(1000).then((msg) => console.log(msg));
```

6. Do the following:


- Create a new promise
- Resolve with 21
- Use `.then` and return adding `10` to the value you will get as parameter
- Use `.then` and return adding `100` to the value you will get as parameter
- Use `.then` and check if the value you get is greater than `100` throw new error with any message
- Catch the error using `.catch`

```js
 let b = new Promise((resolve , reject) =>{
     resolve(21);
 })
 .then((val) => val +10)
 .then((val) => val+100)
 .then((val) =>{
     if(val > 100){
         throw new Error ('Something went wrong ')
     }
 }).catch(console.log)
```

7. Do the following:

- Create a new promise
- Resolve the promise with `['A']`
- Use `.then` and concat `B` into the parameter and return
- Use `.then` and return and object like `{0: 'A', 1: 'B'}`
- Use `.then` and log the value

```js
  
  let b = new Promise((resolve , reject) =>{
     resolve(["A"]);
 })
 .then((val) => val.concat('B'))
 .then((val) =>  console.log({...val}));
 
 })
```

8. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Chain `.then` on above and return `3` also check the value you get access to by logging
- Chain `.then` on above and return `4` also check the value you get access to by logging

```js

let first = new Promise((resolve , reject) =>{
     resolve(1);
 })
 .then((val) =>{ 
     console.log(val +1);
      return val +1
 })
 .then((val) => {
     console.log(val+1);
     return val+1
 })
 .then((val) => {
     console.log(val +1);
      return val +1
 
 })
    

```

9. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Use `.then` on `first` and return `3` also check the value you get access to by logging
- Use `.then` on `first` and return `4` also check the value you get access to by logging

```js
/ let first = new Promise((resolve , reject) =>{
     resolve(1);
 })
 .then((val) =>{ 
     console.log(val +1);
      return val +1
 })

 let first = new Promise((resolve , reject) =>{
     resolve(1);
 })
 .then((val) => {
     console.log(val+2);
     return val+2
 })

 let first = new Promise((resolve , reject) =>{
     resolve(1);
 })
 .then((val) => {
     console.log(val +3);
      return val +3
 
 })
```

10. Try to understand the difference between the problem 8 and 9. Write your observation.



11. Do the following

- Create a promise and resolve it with `John`
- Use `.then` and return another promise that resolves with `Arya`
- Use `.then` log the value you get access to and return another promise that resolves after 2000ms with value `Bran`
- Use `.then` to log the value

```js

let first = new Promise((resolve , reject) =>{
     resolve("John");
 })
 .then((val) => { 
     
      return Promise.resolve("Arya")
 })
.then((v) => {
    console.log(v)
    return new Promise((resolve) =>{
        setTimeout(() => resolve('Bran') ,1000)
    })
}).then(console.log)
```
