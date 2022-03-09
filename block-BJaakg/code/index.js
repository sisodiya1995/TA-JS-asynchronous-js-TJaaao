let books = document.querySelector('.books');
let charactername = document.querySelector('charactername');

let url = "https://www.anapioficeandfire.com/api/books"
fetch(url).then((data) =>data.json()).then((data) => {
    console.log(data);
    displayUI(data);
})

function displayUI(bookData) {
bookData.forEach(element => {
    let div = document.createElement('div')
        div.classList.add('book');
    let name = document.createElement('h2');
        name.innerText = element.name
    let author = document.createElement('cite');
        author.innerText =element.authors;
    let charactrer = document.createElement("button");
        charactrer.addEventListener('click' ,()=>{
            fetch(url).then((data) =>data.json()).then((data) => {
               console.log(data.filter((e) =>e.name === 'A Game of Thrones')[0].characters)
                // console.log(data);
                // console.log(data.map((elm) =>{
                //    let data1 = elm.characters;
                //    console.log(data1)
                // }));
                //displayUI(data);
               // displayCharacterName(data.filter((e) =>e.name === 'A Game of Thrones')[0].characters);

            }) 
        })
      charactrer.innerText = `Characthers :( ${element.characters.length})`;
     div.append(name ,author ,charactrer);
     books.append(div); 
});
    
}

function displayCharacterName (charactersData){
    charactersData.forEach((elm) => {
        let div = document.createElement('div')
        let name = document.createElement('p')
            name.innerText =elm.name;
        div.append(name);
        charactername.append(div);
    })
    

}