let input = document.querySelector('input');

let div = document.querySelector('.photos');

 function displayUI(data1) {
     div.innerHTML ="";
     data1.forEach((element) => {
        let div = document.querySelector('.photos');
         let img = document.createElement('img');
         img.src =element;
         div.append(img);
     });
     
 } 
function handleChange(event) {
  //  console.log(event);
  // console.log(event.target.value);
    if(event.keyCode === 13) {
     
        let xhr = new XMLHttpRequest();
xhr.open('GET' ,`https://api.unsplash.com/search/photos?query=${event.target.value}&client_id=bkP7I_IdKGRijQDLHFPMFhBstqaauL9WTwtSLC8Nk6s`);
xhr.onload = function() {

    let userData = JSON.parse(xhr.response);

      console.log(userData.results);
     let data = userData.results.reduce((acc , cv) =>{
     if(cv.urls.small) {
         acc.push(cv.urls.small)
     }
     return acc;
     },[]);

     console.log(data);

    displayUI(data);
    event.target.value ="";
    }
    
    xhr.send();
    
}

}
     input.addEventListener("keyup" ,handleChange);
    


//${event.target.value}