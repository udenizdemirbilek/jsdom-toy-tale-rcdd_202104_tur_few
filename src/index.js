// const { forEach } = require("core-js/core/array");

let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  document.querySelector(".submit").addEventListener("click", (e) => {
    e.preventDefault()
    const toyName = document.querySelector("div.container form.add-toy-form input[name='name']").value
    const toyImage = document.querySelector("div.container form.add-toy-form input[name='image']").value
    console.log("abc")

    let postObj = {
      method: "POST",
      headers: 
      {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
       
      body: JSON.stringify({
        "name": `${toyName}`,
        "image": `${toyImage}`,
        "likes": 0
      })
    }
    //Can't stop it from reloading page after POST request, it prints out a console.log here, than reloads.
    // NEED HELP HERE

    return fetch("http://localhost:3000/toys",postObj)
    // .then(event => event.preventDefault())
  });
  

  function makeDiv (obj){
    for (const element of obj){
      const createDiv = document.createElement("div");
      const toysHere = document.querySelector("#toy-collection");
      createDiv.setAttribute("class","card");
      // console.log(element)
      createDiv.innerHTML = `<h2> ${element.name}</h2>` + `<img src=${element.image} class=toy-avatar>` 
      + `<p>${element.likes} Likes</p> <button class=like-btn> Like! </button>`
      toysHere.appendChild(createDiv);
    }    
    // like button implementation
    // NEED HELP HERE
      const toys = document.querySelectorAll(".like-btn")
      for (item of toys){
      item.addEventListener("click", (e) => {
        e.preventDefault()
      console.log("like")
      return fetch("http://localhost:3000/toys/:id",patchObj)
    })

    let patchObj = {
      method: "PATCH",
      headers: 
      {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      
      body: JSON.stringify({
        // "likes": likes++
      })
    }
  }
  }

  
  let configObj = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  };

  return fetch("http://localhost:3000/toys",configObj)
  .then(Response => Response.json())
  .then(json => makeDiv(json))
});
