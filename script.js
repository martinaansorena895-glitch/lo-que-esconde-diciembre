/* =========================================
CONFIGURACIÓN
========================================= */

const PREVIEW_MODE = true;


/* =========================================
ELEMENTOS
========================================= */

const enterButton = document.getElementById("enterButton");
const cover = document.getElementById("cover");
const calendar = document.getElementById("calendar");
const daysGrid = document.getElementById("daysGrid");

const giftScreen = document.getElementById("giftScreen");
const backButton = document.getElementById("backButton");

const giftPage = document.getElementById("giftPage");
const surpriseNumber = document.getElementById("surpriseNumber");
const surpriseTitle = document.getElementById("surpriseTitle");
const surpriseText = document.getElementById("surpriseText");
const surpriseContent = document.getElementById("surpriseContent");


/* =========================================
REGALOS
========================================= */

const surprises = [
{
title: "La bienvenida",
type: "letter",
text: "Bienvenido a diciembre. Durante los próximos 24 días vas a encontrar pequeñas sorpresas preparadas especialmente para vos."
},
{
title: "Una canción que me recuerda a vos",
type: "song",
text: "Hay canciones que quedan asociadas a un momento, y esta es una de ellas."
},
{
title: "¿Cuánto me conocés?",
type: "quiz",
text: "Llegó el momento de comprobar cuánto prestás atención."
},
{
title: "Una salida al cine",
type: "voucher",
text: "Este vale es por una salida al cine juntos. Vos elegís la película y yo invito."
},
{
title: "Un regalo para todos los días",
type: "physical",
text: "Un pequeño regalo para que uses en tu día a día. Espero que te guste."
},
{
title: "Cosas que hacés sin darte cuenta",
type: "reveal",
text: "Hay un montón de pequeñas cosas tuyas que me encantan. Hoy te cuento algunas."
},
{
title: "Elegí tu aventura",
type: "adventure",
text: "Esta vez vos decidís cómo sigue la historia."
},
{
title: "Una misión para diciembre",
type: "mission",
text: "Hoy tenés una misión. No es difícil, pero quiero que la cumplas."
},
{
title: "El museo de nosotros",
type: "gallery",
text: "Una pequeña colección de recuerdos, lugares y momentos nuestros."
},
{
title: "Un segundo regalo",
type: "physical",
text: "Bueno, este es tu segundo regalo físico de diciembre. Para el próximo vas a tener que pedírselo a Marti..."
},
{
title: "La banda sonora de nosotros",
type: "playlist",
text: "Algunas canciones que me hacen acordar a distintos momentos nuestros."
},
{
title: "Una merienda especial",
type: "invitation",
text: "Esta vez te invito yo. Te espero para compartir una merienda especial."
}
];


/* =========================================
ABRIR CALENDARIO
========================================= */

enterButton.addEventListener("click", () => {
cover.classList.add("leaving");

setTimeout(() => {
cover.classList.add("hidden");
cover.classList.remove("leaving");
calendar.classList.remove("hidden");
}, 800);
});


/* =========================================
FUNCIONES PARA CREAR ELEMENTOS
========================================= */

function createElement(tag, className, text = "") {
const element = document.createElement(tag);

if (className) {
element.className = className;
}

if (text) {
element.textContent = text;
}

return element;
}

function createButton(text, className, action) {
const button = createElement("button", className, text);
button.addEventListener("click", action);
return button;
}


/* =========================================
DÍA 1: CARTA
========================================= */

function showLetter() {
const letter = createElement("div", "letter-content");

letter.innerHTML = `
<p>
No quería regalarte simplemente 24 cosas.
Quería preparar algo que pudiéramos ir descubriendo
juntos, un poquito cada día.
</p>

<p>
Hay regalos, recuerdos, canciones, juegos y algunas
sorpresas que espero que te gusten.
</p>

<p>
Así que, por los próximos días, te toca descubrir
qué esconde diciembre.
</p>

<p class="letter-signature">Con mucho amor, Marti.</p>
`;

surpriseContent.appendChild(letter);
}


/* =========================================
DÍA 2: CANCIÓN
========================================= */

function showSong() {
const card = createElement("div", "song-card");

card.innerHTML = `
<div class="song-cover">
<span>AM</span>
<small>ARCTIC MONKEYS</small>
</div>

<p class="song-label">A SONG FOR YOU</p>

<h2>I Wanna Be Yours</h2>
<p class="song-artist">Arctic Monkeys · AM</p>

<a
class="music-button"
href="https://open.spotify.com/search/I%20Wanna%20Be%20Yours%20Arctic%20Monkeys"
target="_blank"
rel="noopener noreferrer"
>
Escuchar canción ↗
</a>

<div class="song-memory">
<p>
Fue una de las primeras canciones que pusiste
en tus notas de Instagram y no te imaginás
lo que me emocioné cuando la vi.
</p>

<p>
Obviamente, se la mandé a todas mis amigas.
Me acuerdo de ese momento y me sigue pareciendo
increíble que una canción haya terminado
significando tanto para mí.
</p>
</div>
`;

surpriseContent.appendChild(card);
}


/* =========================================
DÍA 3: CUESTIONARIO
========================================= */

const quizQuestions = [
{
question: "¿Cuál es una de mis bandas favoritas?",
answers: ["Oasis", "Coldplay", "Imagine Dragons"],
correct: 0
},
{
question: "¿Qué materias me gustan más?",
answers: [
"Historia y Literatura",
"Matemática y Física",
"Biología y Filosofía"
],
correct: 1
},
{
question: "¿Qué estilo musical suelo escuchar?",
answers: [
"Rock alternativo y música de los 80/90",
"Reggaetón exclusivamente",
"Música electrónica exclusivamente"
],
correct: 0
},
{
question: "¿Qué me gusta más?",
answers: [
"Los planes sin organizar",
"Los planes y detalles bien pensados",
"No hacer absolutamente nada"
],
correct: 1
}
];

function showQuiz() {
let questionIndex = 0;
let score = 0;

const area = createElement("div", "quiz-area");

const progress = createElement("p", "quiz-progress");
const question = createElement("h2", "quiz-question");
const answers = createElement("div", "quiz-answers");
const feedback = createElement("p", "quiz-feedback");

area.append(progress, question, answers, feedback);
surpriseContent.appendChild(area);

function renderQuestion() {
const current = quizQuestions[questionIndex];

progress.textContent =
`PREGUNTA ${questionIndex + 1} DE ${quizQuestions.length}`;

question.textContent = current.question;
answers.innerHTML = "";
feedback.textContent = "";

current.answers.forEach((answer, index) => {
const button = createButton(
answer,
"quiz-option",
() => {
if (index === current.correct) {
score++;
feedback.textContent = "¡Bien! Esa era.";
} else {
feedback.textContent = "Mmm... esa no era.";
}

answers.querySelectorAll("button").forEach(btn => {
btn.disabled = true;
});

const next = createButton(
questionIndex === quizQuestions.length - 1
? "Ver resultado"
: "Siguiente pregunta →",
"gift-action",
() => {
questionIndex++;

if (questionIndex < quizQuestions.length) {
renderQuestion();
} else {
showResult();
}
}
);

answers.appendChild(next);
}
);

answers.appendChild(button);
});
}

function showResult() {
area.innerHTML = `
<p class="quiz-progress">RESULTADO FINAL</p>
<h2>${score} de ${quizQuestions.length}</h2>
<p>
${score === quizQuestions.length
? "Bueno, parece que prestás atención."
: "Todavía te quedan algunas cosas por aprender de mí."}
</p>
<p class="quiz-final">Igual, te quiero.</p>
`;
}

renderQuestion();
}


/* =========================================
DÍA 4: VALE PARA EL CINE
========================================= */

function showVoucher() {
const voucher = createElement("div", "voucher-card");

voucher.innerHTML = `
<p class="voucher-label">A LITTLE DATE FOR US</p>
<div class="voucher-symbol">✦</div>
<h2>VALE POR</h2>
<h3>Una salida al cine</h3>
<p>Una película elegida por vos.</p>
<p>Las entradas corren por mi cuenta.</p>
<div class="voucher-footer">VÁLIDO PARA DOS · MARTI & TIAGO</div>
`;

surpriseContent.appendChild(voucher);
}


/* =========================================
DÍAS 5 Y 10: REGALOS FÍSICOS
========================================= */

function showPhysical(day) {
const card = createElement("div", "physical-card");

if (day === 5) {
card.innerHTML = `
<span class="physical-icon">✦</span>
<p>UN REGALO PARA ACOMPAÑARTE</p>
<h2>Para todos los días.</h2>
<p>
Algo para que uses, lleves contigo
y te acuerdes de mí.
</p>
<small>iPhone 13 Pro edition</small>
`;
} else {
card.innerHTML = `
<span class="physical-icon">✦</span>
<p>SECOND PHYSICAL GIFT</p>
<h2>Un segundo regalo.</h2>
<p>
Bueno, este es tu segundo regalo físico
de diciembre.
</p>
<p>
Para el próximo vas a tener que
pedírselo a Marti...
</p>
`;
}

surpriseContent.appendChild(card);
}


/* =========================================
DÍA 6: PEQUEÑOS DETALLES
========================================= */

function showReveal() {
const details = [
"Acá va una de esas pequeñas cosas que hacés y me encantan.",
"Acá va otro detalle que quizás ni te das cuenta de que hacés.",
"Y acá, una cosa más que hace que seas vos."
];

const area = createElement("div", "reveal-area");

const card = createElement("div", "reveal-card");
const number = createElement("p", "reveal-number", "01 / 03");
const text = createElement("p", "reveal-text", details[0]);

let current = 0;

const button = createButton(
"Descubrir otra",
"gift-action",
() => {
current++;

if (current >= details.length) {
card.innerHTML = `
<p class="reveal-number">FIN</p>
<p class="reveal-text">
Podría seguir, pero algunas cosas
prefiero decírtelas en persona.
</p>
`;
button.remove();
return;
}

number.textContent =
`${String(current + 1).padStart(2, "0")} / 03`;

text.textContent = details[current];
}
);

card.append(number, text);
area.append(card, button);
surpriseContent.appendChild(area);
}


/* =========================================
DÍA 7: ELEGÍ TU AVENTURA
========================================= */

function showAdventure() {
const area = createElement("div", "adventure-area");

area.innerHTML = `
<p class="adventure-label">A STORY FOR TWO</p>
<h2>Es sábado y tenemos la tarde libre.</h2>
<p>¿Qué hacemos?</p>
`;

const result = createElement("p", "adventure-result");

const options = [
{
text: "Salir a recorrer algún lugar nuevo",
result: "Terminamos descubriendo un lugar que no conocíamos. Y, seguramente, buscando dónde merendar."
},
{
text: "Quedarnos juntos viendo una película",
result: "Elegimos una película, preparamos algo rico y convertimos una tarde cualquiera en un buen plan."
},
{
text: "Improvisar y ver qué pasa",
result: "No hay plan, no hay horarios y no sabemos dónde terminamos. Pero estamos juntos."
}
];

options.forEach(option => {
const button = createButton(
option.text,
"adventure-option",
() => {
area.querySelectorAll("button").forEach(btn => {
btn.disabled = true;
});

result.textContent = option.result;
}
);

area.appendChild(button);
});

area.appendChild(result);
surpriseContent.appendChild(area);
}


/* =========================================
DÍA 8: MISIÓN
========================================= */

function showMission() {
const card = createElement("div", "mission-card");

card.innerHTML = `
<p class="mission-label">YOUR DECEMBER MISSION</p>
<span class="mission-symbol">✳</span>
<h2>Tu misión:</h2>
<p>
Elegí un día de diciembre para que hagamos
algo distinto de nuestra rutina.
</p>
<p>
Puede ser conocer un lugar nuevo,
probar algo diferente o simplemente
hacer un plan que nunca hacemos.
</p>
<small>La única regla: hacerlo juntos.</small>
`;

surpriseContent.appendChild(card);
}


/* =========================================
DÍA 9: MUSEO DE NOSOTROS
========================================= */

function showGallery() {
const gallery = createElement("div", "memory-gallery");

const memories = [
{
title: "Un lugar",
description: "Un lugar que forma parte de nuestra historia."
},
{
title: "Un momento",
description: "Uno de esos recuerdos que me gusta volver a mirar."
},
{
title: "Nosotros",
description: "Una foto que merece estar en este pequeño museo."
}
];

memories.forEach(memory => {
const item = createElement("div", "memory-item");

item.innerHTML = `
<div class="memory-photo">
<span>✧</span>
</div>
<h3>${memory.title}</h3>
<p>${memory.description}</p>
`;

gallery.appendChild(item);
});

const note = createElement(
"p",
"gallery-note",
"Este museo todavía tiene algunas piezas por descubrir."
);

surpriseContent.append(gallery, note);
}


/* =========================================
DÍA 11: BANDA SONORA
========================================= */

const soundtrack = [
{
title: "I Wanna Be Yours",
artist: "Arctic Monkeys",
album: "AM",
year: "2013",
note: "La canción que me hizo acordar de aquel momento."
}

// Acá vamos a agregar las demás canciones.
];

function showPlaylist() {
const wrapper = createElement("div", "wrapped-card");

wrapper.innerHTML = `
<p class="wrapped-label">MARTI & TIAGO PRESENT</p>
<h2>OUR SOUNDTRACK</h2>
<p class="wrapped-subtitle">A little bit of us.</p>
<div class="wrapped-decoration">✳</div>
`;

const list = createElement("div", "track-list");

soundtrack.forEach((song, index) => {
const track = createElement("div", "track");

track.innerHTML = `
<span class="track-number">
${String(index + 1).padStart(2, "0")}
</span>

<div class="album-art">
<span>${song.album}</span>
</div>

<div class="track-info">
<h3>${song.title}</h3>
<p>${song.artist}</p>
<small>${song.album} · ${song.year}</small>
<p class="track-note">${song.note}</p>
</div>
`;

list.appendChild(track);
});

wrapper.appendChild(list);

const footer = createElement(
"p",
"wrapped-footer",
"Not just songs. Little pieces of us."
);

wrapper.appendChild(footer);
surpriseContent.appendChild(wrapper);
}


/* =========================================
DÍA 12: MERIENDA
========================================= */

function showInvitation() {
const card = createElement("div", "invitation-card");

card.innerHTML = `
<p class="invitation-label">YOU ARE INVITED</p>
<span class="invitation-symbol">☕</span>
<h2>Esta vez invito yo.</h2>
<p>
Te espero para compartir una merienda especial.
</p>
<p>
Algo rico, una mesa linda y un rato
para nosotros.
</p>
<div class="invitation-footer">
CON AMOR, MARTI
</div>
`;

surpriseContent.appendChild(card);
}


/* =========================================
MOSTRAR CONTENIDO SEGÚN EL REGALO
========================================= */

function showGift(surprise, day) {
surpriseContent.innerHTML = "";

switch (surprise.type) {
case "letter":
showLetter();
break;

case "song":
showSong();
break;

case "quiz":
showQuiz();
break;

case "voucher":
showVoucher();
break;

case "physical":
showPhysical(day);
break;

case "reveal":
showReveal();
break;

case "adventure":
showAdventure();
break;

case "mission":
showMission();
break;

case "gallery":
showGallery();
break;

case "playlist":
showPlaylist();
break;

case "invitation":
showInvitation();
break;
}
}


/* =========================================
FECHA ACTUAL EN URUGUAY
========================================= */

function getUruguayDate() {
const parts = new Intl.DateTimeFormat("en-US", {
timeZone: "America/Montevideo",
year: "numeric",
month: "numeric",
day: "numeric"
}).formatToParts(new Date());

const dateParts = {};

parts.forEach(part => {
dateParts[part.type] = Number(part.value);
});

return {
year: dateParts.year,
month: dateParts.month,
day: dateParts.day
};
}


/* =========================================
ABRIR REGALO
========================================= */

function openGift(day) {
const surprise = surprises[day - 1];

surpriseNumber.textContent = `DÍA ${day}`;

if (surprise) {
surpriseTitle.textContent = surprise.title;
surpriseText.textContent = surprise.text;

giftPage.className =
surprise.type === "letter"
? "gift-page letter-page"
: "gift-page experience-page";

showGift(surprise, day);
} else {
surpriseTitle.textContent = "Todavía falta descubrirlo";
surpriseText.textContent =
"Esta sorpresa está esperando su momento.";

surpriseContent.innerHTML = "";
giftPage.className = "gift-page experience-page";
}

giftScreen.classList.remove("hidden");
giftScreen.classList.remove("gift-visible");

void giftScreen.offsetWidth;

giftScreen.classList.add("gift-visible");
}


/* =========================================
CREAR LOS 24 DÍAS
========================================= */

const currentDate = getUruguayDate();

const isDecember =
currentDate.year === 2026 &&
currentDate.month === 12;

const currentDay = isDecember ? currentDate.day : 0;

for (let day = 1; day <= 24; day++) {
const button = document.createElement("button");

button.classList.add("day");
button.textContent = String(day).padStart(2, "0");

if (!PREVIEW_MODE && (!isDecember || day > currentDay)) {
button.disabled = true;
}

button.addEventListener("click", () => {
openGift(day);
});

daysGrid.appendChild(button);
}


/* =========================================
VOLVER AL CALENDARIO
========================================= */

backButton.addEventListener("click", () => {
giftScreen.classList.add("hidden");
giftScreen.classList.remove("gift-visible");
});
