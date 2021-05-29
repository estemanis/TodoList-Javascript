const input = document.querySelector(".input input");
const add = document.querySelector(".input button");
const list = document.querySelector(".todoList");
const clearAll = document.querySelector(".footer button");

input.onkeyup = ()=>{
    let userData = input.value;
    if(userData.trim() != 0 ){
        add.classList.add("active");
    }else{
        add.classList.remove("active");
    }
}

display();

add.onclick = ()=>{
    let userData = input.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    if(input.value != null){
        listArr.push(userData);
        localStorage.setItem("New Todo", JSON.stringify(listArr));
        display();
        add.classList.remove("active");
    }
}

// var task = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

//add task to the list
function display(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    const count = document.querySelector(".count");
    count.textContent = listArr.length;
    if(listArr.length != 0){
        clearAll.classList.add("active");
    }
    else{
        clearAll.classList.remove("active");
    }
    let newList = '';
    listArr.forEach((element, index) => {
        // newList += `<li> ${element} <span onclick = "done(${index})";><i class="fas fa-check"></i></span></li>`;
        newList += `<li class="task">  ${element} <span onclick = "remove(${index})";><i class="fas fa-trash"></i></span></li>`;
    });
    list.innerHTML = newList;
    input.value = "";
}

//remove task
function remove(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    display(); 
}

//clear all task
clearAll.onclick = ()=>{
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    display();
}