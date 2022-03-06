let githubUser = document.querySelector(".githubUser");
let input = document.querySelector('input')

// let xhr = new XMLHttpRequest();
// xhr.open('GET' ,'https://api.github.com/users/adarshraj2720');
// xhr.onload = function() {

//     let userData = JSON.parse(xhr.response);

//       console.log(userData);


//     }
//     xhr.send();  // check the data in console

function displayUI(abc,user) {
    githubUser.innerHTML ="";
    let img = document.createElement('img');
       img.src = user.avatar_url
    let name = document.createElement('cite');
    name.innerText=user.name
    let userName = document.createElement('p');
    userName.innerText =user.login
    let follower = document.createElement('div');
       abc.forEach(element => {
           let img = document.createElement('img')
           img.src= element;
           follower.append(img);
       });
   follower.innerText=user.followers
    let following = document.createElement('small');
    following.innerText=user.following;
    githubUser.append(img ,name ,userName ,follower ,following);

}

    function handleChange(event) {
        //  console.log(event);
        // console.log(event.target.value);
          if(event.keyCode === 13) {
           
              let xhr = new XMLHttpRequest();
      xhr.open('GET' ,`https://api.github.com/users/${event.target.value}`);
      xhr.onload = function() {
      
           let userData = JSON.parse(xhr.response);
           displayUI(userData,abc);
            event.target.value ="";
          }
          
          xhr.send();

          let xhr1 = new XMLHttpRequest();
          xhr1.open('GET' ,`https://api.github.com/users/${event.target.value}/followers`);
          xhr1.onload = function() {
          
               let userData1 = JSON.parse(xhr1.response);
               console.log(userData1);
             let abc = userData1.reduce((acc , cv) =>{
               acc.push(cv.avatar_url);
               return acc;
               },[]);
               console.log(abc);
               displayUI(abc,userData);
                
               // event.target.value ="";
              }
              
              xhr1.send();

          
      }

    
      
      }
           input.addEventListener("keyup" ,handleChange);






           
           //for random cats
           function cats(){
let button =  document.querySelector('button');


button.addEventListener('click' , () =>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET' ,`https://api.thecatapi.com/v1/images/search?limit=1&size=full`);
    xhr.onload = function() {
         

         let user = JSON.parse(xhr.response);
         let img1 = document.querySelector('img');
         img1.src=user[0].url;
         
        }
        
        xhr.send();


})

           }
           cats();
