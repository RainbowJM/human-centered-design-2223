const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recButton = document.getElementById('microphone');
let recognition;
let listen = false;
let selectedText = "";
let lastMessage = "";

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = false;
}

recButton.addEventListener('change', function () {
    if (this.checked) {
        console.log("checked");
        start()
    }
    else {
        listen = false;
        stop();
    }
});

function start() {
    listen = true;
    alert("Mic is on");
    recognition.start();
}

function stop() {
    listen = false;
    alert("Mic is off");
    recognition.stop();
}