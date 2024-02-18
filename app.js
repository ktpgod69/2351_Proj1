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

