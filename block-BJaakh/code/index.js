let form = document.querySelector('input');
let todos = document.querySelector('.todos');

let todoUrl = 'https://basic-todo-api.vercel.app/api/todo'
fetch(todoUrl).then((res) => res.json()).then((data) => {
    console.log(data.todos);
     displayUI(data.todos);
})

function displayUI(alltodo) {
    alltodo.forEach(element => {
        let ul = document.createElement('ul');
        let checkbox = document.createElement('input')
            checkbox.type ="checkbox"
           let todo = document.createElement('p');
               todo.innerText = element.title
           let delele = document.createElement('span');
             delele.innerText = "❎"  
             ul.append(checkbox , todo ,delele);
             todos.append(ul) 
    });
    
}
form.addEventListener("keyup" , (event) => {
    event.preventDefault();
    if(event.keyCode === 13){
        
        console.log(event)
        console.log(event.target.value)
    }
    
    
    
})
// update
const data1 = {
    "todo": {
      "title": "arya",
      "isCompleted": true
    },
   
  }

fetch(todoUrl +"/6228e2dd9d8dcc000993ff68" , {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data1) // body data type must match "Content-Type" header
  });

  //add
  const data2 = {
    "todo": {
      "title": "Yogi baba ki kal jeet hogi",
      "isCompleted": true
    },
   
  }

fetch(todoUrl , {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data2) // body data type must match "Content-Type" header
  });

  // Delete
  fetch(todoUrl+`/6228e64e50b9e2000969789e` , {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data2) // body data type must match "Content-Type" header
  });