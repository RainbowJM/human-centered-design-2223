const popup = document.querySelector('.message');
const pastText = document.querySelector('#paste p');
const mainElement = document.querySelector('main');
const mainNonsense = document.querySelector('main#rain');
const body = document.querySelector('body');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;
let listen = false;
let selectedText = '';
let lastMessage = '';


window.addEventListener('keydown', (e) => {
    if (e.key === 's' || e.key === 'S') {
        console.log('start');
        start();
    }
    else if (e.key === 'p' || e.key === 'P') {
        console.log('stop');
        stop();
    }
    else if (e.key === 'c' || e.key === 'C') {
        navigator.clipboard.writeText(selectedText)
            .then(() => {
                setTimeout(() => {
                    popup.classList.add('show'), 5000;
                    popup.innerHTML = 'Gekopieerd';
                })
            });
    } else if (e.key === 'v' || e.key === 'V') {
        popup.classList.remove('show');
        navigator.clipboard
            .readText()
            .then(text => {
                console.log(text);
                pastText.innerHTML = text;
            })
    } else if (e.key === 'l' || e.key === 'L') {
        mainElement.classList.toggle('hidden')
        nonsense();
    } else if (e.key === 'Escape' || e.key === 'Esc'){
        mainElement.classList.remove('hidden');
        main();
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
    recognition.continuous = true;
    recognition.interimResults = false;
    // recognition.interimResults = true;
    if (localStorage.getItem("language")) {
        recognition.lang = "en-US"
    } else {
        recognition.lang = "nl-NL"
    }
}

recognition.addEventListener('result', (message) => {
    const results = message.results.length - 1;
    const lastResult = message.results[results].length - 1;
    let word = message.results[results][lastResult].transcript;
    let splitWord = word.split(' ')
    let text = splitWord[splitWord.length - 1]

    if (text === 'kopiëren' || text === 'kopieer' || text === 'koppie') {
        copy();
    } else if (text === 'plakken' || text === 'plak' || text === 'Plak') {
        paste();
    }
})

function start() {
    listen = true;
    alert('Microfoon staat aan');
    recognition.start();
}

function stop() {
    listen = false;
    alert('Microfoon staat uit');
    recognition.stop();
}

function copy() {
    navigator.clipboard
        .writeText(selectedText)
        .then(() => {
            setTimeout(() => {
                popup.classList.add('show'), 5000;
                popup.innerHTML = 'Gekopieerd';
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

function nonsense() {

    body.innerHTML = `<main id='rain'>
    <div class="container">
  <div class="rain">
    <div class="raindrop"></div>
    <div class="raindrop"></div>
    <div class="raindrop"></div>
    <div class="raindrop"></div>
    <div class="raindrop"></div>
    <div class="raindrop"></div>
    <div class="raindrop"></div>
    <div class="raindrop"></div>
    <div class="raindrop"></div>
    <div class="raindrop"></div>
  </div>
</div>
</main>`
}

function main() {

    body.innerHTML = ` <main>
    <section>
        <h1>Copy & Paste 2.0</h1>
        <p>Een webapplicatie waarmee u tekst kunt kopiëren en plakken met behulp van uw stem.</p>
    </section>
    <section>
        <h2>Gebruiksaanwijzing</h2>
        <p> <u>Spraak tool aan en uit doen:</u><br>
            Druk op <b>S</b> om de spraak tool te starten. <br>
            Druk op <b>P</b> om de spraak tool te pauzeren. <br><br>

            <u>Spraak gebruiken om te kopiëren en te plakken:</u><br>
            Selecteer de tekst die u wilt kopiëren en zeg <b>kopiëren</b>. <br>
            Zeg dan <b>plakken</b> om de tekst te plakken. <br><br>

            <u>Toetsenbord gebruiken om te kopiëren en te plakken:</u><br>
            Selecteer de tekst die u wilt kopiëren en druk op <b>C</b>. <br>
            Druk dan op <b>V</b> om de tekst te plakken.
        </p>
    </section>
    <section>
        <article>
            Het klimaat verandert.
            De temperatuur op aarde stijgt.
            Dit komt door de toename van broeikasgassen in de lucht.
            Klimaatverandering heeft grote gevolgen voor mens, natuur en milieu.
            Daarom neemt Nederland maatregelen om zich aan te passen aan de gevolgen van klimaatverandering en om
            verdere klimaatverandering te beperken.
            Deze maatregelen samen vormen het Nederlandse klimaatbeleid.

            <a href="https://www.rijksoverheid.nl/onderwerpen/klimaatverandering">Bekijk website</a>
        </article>
    </section>
    <section id="paste">
        <h3>Tekst wordt hier geplakt</h2>
            <p></p>
    </section>
    <section class="message"></section>
</main>`
}