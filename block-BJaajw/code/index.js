let news = document.querySelector(".news");
let form = document.querySelector("form");
let isLoading = false;

function handleSpineer() {
  if (isLoading) {
    news.innerHTML = ` <div class="donut"></div>`;
  }
}
let newsData = fetch(
  "https://api.spaceflightnewsapi.net/v3/articles?_limit=30"
);

let data = newsData
  .then((data) => {
    if (!data.ok) {
      throw new Error(`Something went wrong ${data.status}`);
    }
    return data.json();
  })
  .then((value) => {
    console.log(value);
    displayUI(value);
  })
  .catch((error) => {
    // console.log(error)}
    news.innerText = error;
  });

function displayUI(data2) {
  data2.forEach((element) => {
    let div = document.createElement("div");
    div.classList.add("parent");
    let img = document.createElement("img");
    let div1 = document.createElement("div");
    div1.classList.add("description");
    img.src = element.imageUrl;
    let title = document.createElement("small");
    title.innerText = element.newsSite;
    let description = document.createElement("p");
    description.innerText = element.summary;
    let link = document.createElement("a");
    link.href = element.url;
    link.innerText = "Read More";
    div1.append(title, description, link);
    div.append(img, div1);
    news.append(div);
  });
}
function handleSelect(event) {
  //event.preventDefault();
  console.log(form.elements.news.value);
  isLoading = true;
  handleSpineer();
  let newsData = fetch(
    "https://api.spaceflightnewsapi.net/v3/articles?_limit=30"
  );

  newsData
    .then((data) => data.json())
    .then((value) => {
      console.log(value);
      console.log(value.filter((p) => p.newsSite == form.elements.news.value));
      news.innerHTML = "";
      displayUI(value.filter((p) => p.newsSite == form.elements.news.value));
    });
}

form.addEventListener("click", handleSelect);
