// 5th Questions
document.getElementById("main-heading").innerHTML = "Hello!";
let elements = document.getElementsByClassName("highlight");

// 17th Questions
if (typeof (Storage) !== "undefined") {
    console.log("Web Storage is supported.");
} else {
    console.log("Web Storage is not supported.");
};

// 19th Questions
navigator.geolocation.getCurrentPosition((position) => {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
});

// Store data
localStorage.setItem("usernames", "Vijayant and Trisha");
// Retrieve data
console.log(localStorage.getItem("usernames"));

const canvas = document.getElementById("myCanva");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(20, 20, 150, 75);

let socket = new WebSocket("wss://example.com/socket");
socket.onopen = () => console.log("Connected!");
socket.onmessage = (event) => console.log("Message:", event.data);

let worker = new Worker("worker.js");
worker.postMessage("Start work");
worker.onmessage = (event) => console.log("Worker says:", event.data);

Notification.requestPermission().then(permission => {
    if (permission === "granted") {
        new Notification("Hello! This is a notification.");
    }
});

navigator.clipboard.writeText("Copied text!")
    .then(() => console.log("Text copied!"));