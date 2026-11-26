/* =========================================
LO QUE ESCONDE DICIEMBRE
FUNCIONES GENERALES
========================================= */

// ELEMENTOS DE LA PÁGINA

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
CONFIGURACIÓN
========================================= */

// MODO DE PRUEBA
// Cambiar a false antes del 1 de diciembre.

const PREVIEW_MODE = true;


/* =========================================
REGALOS DE DICIEMBRE
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
text: "Hay canciones que, por alguna razón, terminan teniendo tu nombre."
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
ABRIR EL CALENDARIO
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
CONTENIDO DE LOS REGALOS
========================================= */

function showGift(surprise) {

surpriseContent.innerHTML = "";

const placeholders = {
song: "Acá vamos a poner la canción.",
quiz: "Acá vamos a crear el cuestionario interactivo.",
voucher: "VALE POR UNA SALIDA AL CINE",
physical: "Un regalo preparado especialmente para vos.",
reveal: "Acá vamos a descubrir las pequeñas cosas, una por una.",
adventure: "Acá empieza tu aventura.",
mission: "Tu misión aparecerá acá.",
gallery: "Acá vamos a armar nuestro museo de recuerdos.",
playlist: "Acá vamos a reunir nuestra banda sonora.",
invitation: "Fecha, lugar y menú: próximamente."
};

const message = placeholders[surprise.type];

if (message) {
addPlaceholder(message);
}

}


// CREAR TEXTOS ADICIONALES

function addPlaceholder(message) {

const paragraph = document.createElement("p");

paragraph.textContent = message;
paragraph.classList.add("gift-placeholder");

surpriseContent.appendChild(paragraph);

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
ABRIR LA PANTALLA DE CADA REGALO
========================================= */

function openGift(day) {

const surprise = surprises[day - 1];

surpriseNumber.textContent = `DÍA ${day}`;

if (surprise) {

surpriseTitle.textContent = surprise.title;
surpriseText.textContent = surprise.text;

showGift(surprise);

giftPage.className = surprise.type === "letter"
? "gift-page letter-page"
: "gift-page experience-page";

} else {

surpriseTitle.textContent = "Todavía falta descubrirlo";
surpriseText.textContent = "Esta sorpresa está esperando su momento.";

surpriseContent.innerHTML = "";

giftPage.className = "gift-page experience-page";

}

// Mostrar la pantalla con los paneles cerrados.

giftScreen.classList.remove("hidden");
giftScreen.classList.remove("opening");

// Forzar al navegador a registrar la posición inicial.

void giftScreen.offsetWidth;

// Esperar un instante antes de abrir los paneles.

setTimeout(() => {
giftScreen.classList.add("opening");
}, 60);

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

// Bloquear los días futuros fuera del modo de prueba.

if (!PREVIEW_MODE && (!isDecember || day > currentDay)) {
button.disabled = true;
}

// Abrir el regalo correspondiente.

button.addEventListener("click", () => {
openGift(day);
});

// Agregar el botón al calendario.

daysGrid.appendChild(button);

}


/* =========================================
VOLVER AL CALENDARIO
========================================= */

backButton.addEventListener("click", () => {

giftScreen.classList.add("hidden");
giftScreen.classList.remove("opening");

});
