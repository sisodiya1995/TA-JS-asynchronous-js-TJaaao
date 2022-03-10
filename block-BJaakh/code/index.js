let form = document.querySelector("input");
let todoss = document.querySelector(".todos");

let todoUrl = "https://basic-todo-api.vercel.app/api/todo";
function allTodos() {
  fetch(todoUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.todos);
      displayUI(data.todos);
    });
}
allTodos();

function handleDelete(id) {
  fetch(todoUrl + `/${id}`, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    allTodos();
  });
}

function handleToggle(id, status) {
  let data = {
    todo: {
      isCompleted: !status,
    },
  };
  fetch(todoUrl + `/${id}`, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(() => {
    allTodos();
  });
}

function handleEdit(event, id, title) {
  let input = document.createElement("input");
  input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13 && event.target.value) {
      let data = {
        todo: {
          title: event.target.value,
        },
      };
      fetch(todoUrl + `/${id}`, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => {
        allTodos();
      });
    }
  });
  //  input.value = event.target.innerText;
  input.value = title;
  let p = event.target;
  let parent = event.target.parentElement;
  parent.replaceChild(input, p);
  console.log(input, p, parent);
}
function displayUI(alltodo) {
  todoss.innerHTML = "";
  alltodo.forEach((element) => {
    let ul = document.createElement("ul");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = element.isCompleted;
    checkbox.addEventListener("click", () =>
      handleToggle(element._id, element.isCompleted)
    );
    let todo3 = document.createElement("p");
    todo3.innerText = element.title;
    todo3.addEventListener("dblclick", (event) =>
      handleEdit(event, element._id, element.title)
    );
    let delele = document.createElement("span");
    delele.innerText = "❎";
    delele.style.cursor = "pointer";
    delele.addEventListener("click", () => handleDelete(element._id));
    delele.setAttribute("data-id", element._id);
    ul.append(checkbox, todo3, delele);
    todoss.append(ul);
  });
}
function addTodos(event) {
  // event.preventDefault();
  console.log(event.target.value);
  if (event.keyCode === 13 && event.target.value) {
    console.log("click me");
    let data = {
      todo: {
        title: event.target.value,
        isCompleted: false,
      },
    };
    console.log(data);
    fetch(todoUrl, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(() => {
      event.target.value = "";
      allTodos();
    });
  }
}
form.addEventListener("keyup", addTodos);





// // update

// fetch(todoUrl +"/6228e2dd9d8dcc000993ff68" , {
//     method: 'PUT', // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data1) // body data type must match "Content-Type" header
//   });

//   //add
//   const data2 = {
//     "todo": {
//       "title": "Yogi baba ki kal jeet hogi",
//       "isCompleted": true
//     },

//   }

// //   // Delete
// //   fetch(todoUrl+`/6228e64e50b9e2000969789e` , {
// //     method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
// //     headers: {
// //       'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify(data2) // body data type must match "Content-Type" header
// //   });
