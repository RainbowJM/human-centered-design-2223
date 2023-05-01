const popup = document.querySelector('.message');
const pastText = document.querySelector('#paste p');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;
let listen = false;
let selectedText = '';
let lastMessage = '';

window.addEventListener('keydown', (e) => {
    if (e.key === 's') {
        console.log('start');
        start();
    }
    else if (e.key === 'p') {
        console.log('stop');
        stop();
    }
})

document.addEventListener('selectionchange', () => {
    let select = window.getSelection();
    if (select.toString() !== '') {
        selectedText = select.toString();
    }
});

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = true;
    recognition.interimResults = false;
}

recognition.addEventListener('result', (message) => {
    const results = message.results.length -1 ;
    const lastResult = message.results[results].length -1;
    let word = message.results[results][lastResult].transcript;
    let splitWord = word.split(' ')
    let text = splitWord[splitWord.length - 1]
    
    if (text === 'copy') {
        copy();
    } else if (text === 'paste') {
        paste();
    }
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
    .then(() => {
        setTimeout(() => {
            popup.classList.add('show'), 5000;
            popup.innerHTML = 'Copied';
        })
    }) 
}

function paste() {
    popup.classList.remove('show');
    navigator.clipboard
        .readText()
        .then(text => {
            console.log(text);
            pastText.innerHTML = text;
        })
}