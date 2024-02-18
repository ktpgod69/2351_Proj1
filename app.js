const names = ["Levi", "Olivia", "Ellisa", "Priscilla", "George", "Robert", "Rj"];

for (name of names) {
    console.log(name);
    if (name === "Olivia") {
        console.log("Olivia is running for President");
        break;
    }
}

let loading = 10;

while(loading < 80) {
    console.log("game is still loading");

    loading++;
}

const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

text.style.color = "teal"
text.style.backgroundColor = "pink";

text.classList.add("change");

changeColor.addEventListener("click", function() {
    text.classList.toggle("change");
});
const userlist = document.querySelectorAll(".name-list");
const listinput = document.querySelector(".listinput");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", function() {
//Create an Li out of thin air
const newLi = document.createElement("Li");
const liContent = document.createTextNode("listInput.value");
//Add the input value inside that new Li
newLi.appendChild(licontent);
//Attaching the Li to the user list
userlist.appendChild(newLi);
});

for (user of userList) {
    user.addEventListener("click", function() {
        this.style.color = "pink";
        console.log(this);
      });
    }

