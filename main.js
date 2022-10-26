let input = document.querySelector(".input");
let tasks = document.querySelector(".tasks");
console.log(input);
let text;
let div;
let button;
let delet;
let inputF;
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value === "") {
    alert("u need to right somethign");
    return;
  }
  let hey = / _sadasd /;

  text = document.createTextNode(input.value);

  div = document.createElement("div");
  // creatying the task

  let creatingTasks = function () {
    div.className = "task";
    tasks.appendChild(div);

    bigdiv = document.createElement("div");
    bigdiv.className = "big";

    inputF = document.createElement("input");
    inputF.type = "text";
    inputF.setAttribute("readonly", "readonly");
    inputF.className = "idk";
    inputF.value = text.textContent;
    bigdiv.appendChild(inputF);
  };
  creatingTasks();

  // creating delet button
  let creatDeleteBtn = function () {
    button = document.createElement("button");
    button2 = document.createElement("button");
    delet = document.createTextNode("edit");
    deletee = document.createTextNode("delete");

    button.appendChild(delet);
    button.className = "heyu";
    div.appendChild(bigdiv);
    bigdiv.appendChild(button);

    button2.appendChild(deletee);
    button2.className = "heyu";
    div.appendChild(button2);
  };
  creatDeleteBtn();

  button.addEventListener("click", function (e) {
    let current = e.target.closest(".big").querySelector("input"); //selecting current inmput
    console.log(current);
    if (button.textContent == "edit") {
      current.removeAttribute("readonly");
      button.textContent = "save";
      current.focus();
    } else if (button.textContent == "save") {
      current.setAttribute("readonly", "readonly");
      button.textContent = "edit";
    }
  });

  button2.addEventListener("click", function (e) {
    console.log(e.target.closest(".task")); //selecting current target
    let current = e.target.closest(".task");
    // div.removeChild(bigdiv);
    tasks.removeChild(current);

    console.log("hey");
  });

  let deleteall = function () {
    document
      .querySelector(".delete-all")
      .addEventListener("click", function () {
        document
          .querySelector(".tasks")
          .removeChild(document.querySelector(".task"));
      });
  };
  deleteall();

  input.value = "";
});
