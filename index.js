let audioPlay = document.getElementById("audio");
let front = document.querySelector(".front");
let back = document.querySelector(".back");
let clock = document.querySelector(".clock");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let welcome = document.querySelector(".welcome");
let welcome2 = document.querySelector(".welcome2");
let nameW = document.querySelector(".name");
// clock click
clock.addEventListener("click", () => {
    audioPlay.play();
    clock.style.display = "none";
    left.classList.add("leftA");
    right.classList.add("rightA");
    left.classList.remove("leftt");
    right.classList.remove("rightt");
    setTimeout(() => { front.style.display = "none"; back.classList.remove("back") }, 4000)

})

// name find
let send = document.querySelector(".send");
let userNameFind = document.querySelector(".nameU");
let userName;
let nameU = document.querySelector(".inputUser");
let mwish = document.querySelector(".mwish");
let share = document.querySelector(".share");

nameU.addEventListener("input", (e) => {
    userName = e.target.value;

})

send.addEventListener("click", () => {
    if (userName == "") {
        alert("Please Enter Your Name");
    }
    else if (userName == undefined) {
        alert("Please Enter Your Name");
    }
    else {
        userNameFind.innerHTML = userName;
        mwish.innerHTML = `${userName} की तरफ से आपको और आपके परिवार को नववर्ष
                        2025 की हार्दिक शुभकामनायें !!`
        send.style.display = "none";
        nameU.style.display = "none";
        share.style.display = "block";

    }
})

// share functionalty

share.addEventListener("click", () => {
    if (navigator.share) {
        navigator.share({
            title: 'New Year 2025',
            text: `Happy New Year 2025${userName}`,
            url: `https://satyendrachaudhary143.github.io/happyNewYear/?name=${userName}`,
            // url: `http://127.0.0.1:5500/index.html?name=${userName}`
        })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));

    }
})

// params fanctionalty
// Assume the URL is: https://example.com/?name=John&age=30

// Step 1: Get the full URL
const url = window.location.href;

// Step 2: Create a URL object
const urlObj = new URL(url);

// Step 3: Use URLSearchParams to extract parameters
const params = new URLSearchParams(urlObj.search);

// Step 4: Retrieve specific parameters
const nameByParams = params.get('name'); // "John"

userNameFind.innerHTML = nameByParams;
// Step 5: Use the parameters as needed