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

document.addEventListener('selectionchange', () => {
    var select = window.getSelection();
    if (select.toString() !== '')
        selectedText = select.toString();
});

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = true;
    recognition.interimResults = false;
}

recognition.addEventListener('result', (message) => {
    const text = Array.from(message.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    if (text === 'copy') {
        copy();
    } else if (text === 'paste') {
        paste();
    }

    console.log(text);
})

function start() {
    listen = true;
    alert('Mic is on');
    recognition.start();
}

function stop() {
    listen = false;
    alert('Mic is off');
    recognition.stop();
}

function copy() {
    navigator.clipboard
        .writeText(selectedText)
}

function paste() {
    navigator.clipboard
        .readText()
        .then(text => {
            console.log(text);
        })
}