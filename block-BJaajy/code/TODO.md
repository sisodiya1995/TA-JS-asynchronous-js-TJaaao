- Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with.

```js
let five = new Promise((res, rej) =>{
     setTimeout(() => {
       res(5);
     },1000)
})

let four = new Promise((res, rej) =>{
     setTimeout(() => {
       res(4);
     },2000)
})

let three = new Promise((res, rej) =>{
     setTimeout(() => {
       res(3);
     },3000)
})
let two = new Promise((res, rej) =>{
     setTimeout(() => {
       res(2);
     },4000);
})

let all = Promise.all([five , four ,three ,two])
.then((val) =>console.log(val))
```
- Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. Log the number of followers of each user.

```js

let allUser = ["Akash" ,"Vikas" ,"Abhisek" ,"Ravi" ,"Ram"]
  
 let AllData = Promise.all(
  allUser.map((user) => {
    fetch(`url /${user}`).then((data) => data.Json());
  })).then((res) => console.log(res));

```
- Use `Promise.race` to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.

  - https://random.dog/woof.json
  - https://aws.random.cat/meow

```js
let dog = fetch('https://random.dog/woof.json');
let cat = fetch('https://aws.random.cat/meow');
let race = Promise.race([dog ,cat]);
```
- Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

```js
const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);

let allSettled = Promise.allSettled([one , two ,three]);
let allpromise = Promise.all([one ,two , three]);
```

- What will be the output of the following code snippet? How much time will it take for the promise to resolve?

```js
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then(console.log);

['Arya' ,'Sam' , {name : "John"}]
```