let input = document.querySelector("input");

let div = document.querySelector(".photos");

function displayUI(data1) {
  div.innerHTML = "";
  data1.forEach((element) => {
    let div = document.querySelector(".photos");
    let img = document.createElement("img");
    img.src = element;
    div.append(img);
  });
}

let url = `https://api.unsplash.com/search/photos?query=god&client_id=bkP7I_IdKGRijQDLHFPMFhBstqaauL9WTwtSLC8Nk6s`;

let serchUrl = (query) =>
  `https://api.unsplash.com/search/photos?query=${query}&client_id=bkP7I_IdKGRijQDLHFPMFhBstqaauL9WTwtSLC8Nk6s`;
function handleChange(event) {
  //  console.log(event);
  // console.log(event.target.value);
  if (event.keyCode === 13) {
    fetch(serchUrl(input.value)).then((serchresult) => {
      let data = serchresult.results.reduce((acc, cv) => {
        if (cv.urls.small) {
          acc.push(cv.urls.small);
        }
        return acc;
      }, []);

      console.log(data);

      displayUI(data);
      input.value = "";
    });
  }
}

input.addEventListener("keyup", handleChange);
function fetch(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(JSON.parse(xhr.response));
    xhr.onerror = () => reject("Some thing went wrong");
    xhr.send();
  });
}
fetch(url).then(displayUI);

//${event.target.value}
