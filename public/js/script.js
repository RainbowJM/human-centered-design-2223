const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recButton = document.getElementById('microphone');
let recognition;
let listen = false;
let selectedText = "";
let lastMessage = "";

recButton.addEventListener('change', function () {
    if (this.checked) {
        console.log("checked");
        start()
    }
    else {
        console.log("unchecked");
        stop();
    }
});

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = false;
}

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