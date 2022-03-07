let githubUser = document.querySelector(".githubUser");
let input = document.querySelector('input')

// let xhr = new XMLHttpRequest();
// xhr.open('GET' ,'https://api.github.com/users/adarshraj2720');
// xhr.onload = function() {

//     let userData = JSON.parse(xhr.response);

//       console.log(userData);


//     }
//     xhr.send();  // check the data in console

function displayUI(user) {
    githubUser.innerHTML ="";
   // followers.innerHTML="";
    let img = document.createElement('img');
       img.src = user.avatar_url
    let name = document.createElement('cite');
    name.innerText=user.name
    let userName = document.createElement('p');
    userName.innerText =user.login
    
    githubUser.append(img ,name ,userName );

}

function displayFollowers(followerData){
      
     followerData.length =5;
     let followers = document.querySelector('.followers')
    let follower = document.createElement('div');
        follower.innerText= "Followers";
       followerData.forEach(element => {
           let img = document.createElement('img')
           img.src= element;
           img.style.marginLeft ="10px";
           img.style.width="100px"
           img.style.height="100px"
           follower.append(img);
       });
       followers.append(follower);
       
}

function displayFollowing(followingData){
 console.log("following");

    followingData.length =5;
    let followings = document.querySelector('.following')
   let following = document.createElement('div');
   
   following.innerText= "Following"
      followingData.forEach(element => {
          let img = document.createElement('img')
          img.src= element;
          img.style.marginLeft ="10px";
          img.style.width="100px"
          img.style.height="100px"
          following.append(img);
      });
      followings.append(following);
}

    function handleChange(event) {
        //  console.log(event);
        // console.log(event.target.value);
          if(event.keyCode === 13) {
           
              let xhr = new XMLHttpRequest();
      xhr.open('GET' ,`https://api.github.com/users/${event.target.value}`);
      xhr.onload = function() {
      
           let userData = JSON.parse(xhr.response);
           displayUI(userData);
            event.target.value ="";
          }
          
          xhr.send();
//for follower
          let xhr1 = new XMLHttpRequest();
          xhr1.open('GET' ,`https://api.github.com/users/${event.target.value}/followers`);
          xhr1.onload = function() {
          
               let userData1 = JSON.parse(xhr1.response);
               console.log(userData1);
             let followerData = userData1.reduce((acc , cv) =>{
               acc.push(cv.avatar_url);
               return acc;
               },[]);
               console.log(followerData);
               displayFollowers(followerData);
                
               // event.target.value ="";
              }
              
              xhr1.send();
// for following
              let xhr2 = new XMLHttpRequest();
              xhr2.open('GET' ,`https://api.github.com/users/${event.target.value}/following`);
              xhr2.onload = function() {
              
                   let userData1 = JSON.parse(xhr2.response);
                   console.log(userData1);
                 let followingData = userData1.reduce((acc , cv) =>{
                   acc.push(cv.avatar_url);
                   return acc;
                   },[]);
                   console.log(followingData);
                   displayFollowing(followingData);
                    
                   // event.target.value ="";
                  }
                  
                  xhr2.send();
    


          
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
                        let img1 = document.querySelector('.cat');
                        img1.src=user[0].url;
                        
                        }
                        
                        xhr.send();


                })

           }
           cats();
