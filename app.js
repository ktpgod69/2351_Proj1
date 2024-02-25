const movielist = ["John Wick", "Scream", "Halloween", "Fury"];

const rankings = ["1", "2", "3", "4"];
console.log(movielist);
console.log(rankings);

movielist.push("Drive");

console.log(movielist);

const John = movielist.indexOf("John Wick");
console.log(movielist[John]);

const user = {
    name: "Henry",
    age: 30,
    married: true,
    favoritemovies: ["Drive", "Halloween", "It Follows", "Pearl Harbor", "The Mummy"],

    sayName: function() {
        console.log(this.name);
    }
};

user.sayName();

function sayimmarried() {
    console.log(`Am i married...true or false? ${true}`);
}

sayimmarried();

console.log(user.favoritemovies);

function movies() {
    console.log()
}



//This
window.apples();

console.log(this);