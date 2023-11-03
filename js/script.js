let holder = document.querySelector(".holder");
console.log(holder);
// this command displays contained text

if (holder.classList.contains("dark")) {
    console.log("Holder is dark")
}

let button = document.querySelector(".button");
let body = document.querySelector(".container");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    // this specific command means we can make sth happen only after clicking at the button
    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";

});

