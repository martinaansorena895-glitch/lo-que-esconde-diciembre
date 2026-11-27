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
text: "Hola mi Amor, bienvenido a diciembre. Durante los próximos 24 días vas a encontrar algunas sorpresas preparadas especialmente para vos."
},
{
title: "Una canción que me recuerda a vos",
type: "song",
text: "Hay canciones que quedan asociadas a un recuerdo, y esta es una de ellas."
},
{
title: "¿Cuánto me conocés?",
type: "quiz",
text: "Llegó el momento de comprobar que tanto me prestás atención."
},
{
title: "Una salida al cine",
type: "voucher",
text: "Este vale es por una salida al cine juntos. Vos elegís la película y yo invito."
},
{
title: "Un regalo para todos los días",
type: "physical",
text: "Un regalo para que uses en tu día a día. Espero que te guste."
},
{
title: "Cosas que hacés sin darte cuenta",
type: "reveal",
text: "Hay un montón de cosas tuyas que me encantan. Hoy te cuento algunas."
},
{
title: "Elegí tu aventura",
type: "adventure",
text: "Esta vez vos decidís."
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
text: "Bueno, este es tu segundo regalo físico de diciembre. Vas a tener que pedirmelo a mi..."
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
No quería solamente regalarte 1 cosa.
Quería preparar algo que pudiéras ir descubriendo,
un poquito cada día.
</p>

<p>
Hay algunas sorpresas que espero que te gusten.
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
Fue una canción que pusiste
en tus notas de Instagram y no te imaginás
lo que me emocioné cuando la vi.
</p>

<p>
Obviamente, se la mandé a todas mis amigas.
Me acuerdo de ese momento y me sigue pareciendo
increíble que justo hayas pensado en poner la parte del café 
como para que me de cuenta que era para mi :)
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
  answers: ["Oasis", "Coldplay", "The Killers"],
  correct: 0
},
{
question: "¿Qué país me gustaría conocer?",
answers: ["Italia","Inglaterra","Grecia"],
correct: 1
},
{
question: "¿Qué es algo que más valore en vos cuando te conocí?",
answers: ["Lo lindo que sos","Tu inteligencia","Tu sentido del humor"],
correct: 1
},
{
question: "¿Qué comida me hace acordame a nosotros?",
answers: ["Lemon pie","Brownies","Cookies"],
correct: 0
},
{
question: "¿Qué lugar me gusta más en mvd",
answers: ["Punta Carretas","Carrasco","Ciudad Vieja"],
correct: 2
},
{
question: "¿Qué tipo de peliculas ODIO?",
answers: ["Comedias romanticas","Terror","Misterio"],
correct: 1
},
{
question: "¿Qué cosa me cuesta más elegir?",
answers: ["Que ropa ponerme","Que pelicula/serie mirar","Que vamos a almorzar/cenar","Todas las anteriores"],
correct: 3
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
const allButtons = answers.querySelectorAll(".quiz-option");

allButtons.forEach((btn, i) => {
btn.disabled = true;

if (i === current.correct) {
btn.classList.add("correct-answer");
} else if (i === index) {
btn.classList.add("wrong-answer");
}
});

if (index === current.correct) {
score++;
feedback.textContent = "¡Bien! Esa era.";
} else {
feedback.textContent = "Mmm... esa no era.";
}

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
<p>Las entradas las pago yo.</p>
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
<p>
Vas a tener que pedirmelo a mi :)
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
vas a tener que pedirmelo a mi...
</p>
`;
}

surpriseContent.appendChild(card);
}


/* =========================================
DÍA 6: PEQUEÑOS DETALLES
========================================= */

function showReveal() {
surpriseTitle.textContent = "Cosas que hacés sin darte cuenta";

surpriseText.textContent =
"Hay algunas cosas que hacés sin pensarlo demasiado, y probablemente ni te des cuenta de que las noto.";

surpriseContent.innerHTML = `
<div class="reveal-list">
<p>La forma en que me mirás cuando estoy hablando de algo que me entusiasma.</p>
<p>Cómo te acordás de detalles que te conté hace tiempo.</p>
<p>La manera en que me explicás cosas que te gustan.</p>
<p>Cómo cambia tu tono de voz cuando estás cansado.</p>
<p>La tranquilidad que transmitís cuando estoy preocupada.</p>
<p>Que cuando estás muy feliz o nervioso empezás a hacer bobadas.</p>
<p>Que cuando hay un silencio hacés ruidos raros para hacerme reír o para que no sea incómodo.</p>
<p>Que me decís que soy muy linda cuando estoy enojada.</p>
</div>

<p class="reveal-ending">
Y seguramente hay muchas más que todavía no se me ocurrieron.
Son pequeñas cosas, pero son muy tuyas.
</p>
`;
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
result: "Me encanta! ¿Pensamos juntos ?"
},
{
text: "Quedarnos juntos viendo una película",
result: "Demás! ¿Vamos a elegir la peli y a preparar algo rico?"
},
{
text: "Hacer una tarde de juegos?",
result: "No tenia muchas ideas, si elegiste esta, vas a tener que preparate porque ahora es competencia!"
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
algo distinto.
</p>
<p>
Puede ser conocer un lugar nuevo,
probar algo diferente o
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
image: "imagenes/foto-1.jpg",
title: "Un lugar",
description: "Un lugar que forma parte de nuestra historia."
},
{
image: "imagenes/foto-2.jpg",
title: "Un momento",
description: "Uno de esos recuerdos que me gusta volver a mirar."
},
{
image: "imagenes/foto-3.jpg",
title: "Nosotros",
description: "Una foto que merece estar en este pequeño museo."
}
];

memories.forEach(memory => {
const item = createElement("div", "memory-item");

item.innerHTML = `
<div class="memory-photo">
<img src="${memory.image}" alt="${memory.title}">
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
album: "IWBY",
year: "2013",
note: "La canción que me hizo acordar de aquel momento."
},

{
title: "Enamorado Tuyo",
artist: "El cuarteto de Nos",
album: "ILY",
year: "2012",
note: "Una canción que me recuerda a cuando, el año pasado, trabajamos juntos en tu cuarto mientras la escuchabamos."
},

{
title: "Shivers",
artist: "Ed Sheeran",
album: "SH",
year: "2021",
note: "Odio a Ed Sheeran, pero esta canción me recueeda a un momento especifico: estaba sonando antes de que entraramos al show de Candlelights. Yo estaba super emocionada, me sentia linda y muy feliz de estar contigo y compartit ese momento contigo."
},

{
title: "Nosotros",
artist: "Babasonicos",
album: "US",
year: "2008",
note: "Esta es una canción que me recuerda más a nuestro primer año, pero también me recuerda que, aunque tengamos defectos, nos elegimos todos los dias. "
},

{
title: "Songbird",
artist: "Oasis",
album: "SB",
year: "2002",
note: "Y como no puede faltar: Oasis. Esta canción puede que no la conozcas tanto, pero expresa mi admiración y mi amor hacia ti. "
}

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
