document.getElementById("buttons").innerHTML = "";
const sounds=['black', 'blue', 'brown', 'green', 'red', 'white', 'yellow'];

sounds.forEach(sound => {
    let btn = document.createElement("button");
    btn.classList.add('btn');
    btn.innerHTML = sound;
    btn.addEventListener("click", function() {
        stopSound()
        document.getElementById(sound).play();
    })
    document.getElementById("buttons").appendChild(btn);
})

function stopSound() {
    sounds.forEach(sound => {
        const curr = document.getElementById(sound);
        curr.pause();
        curr.currentTime = 0;
    })
}