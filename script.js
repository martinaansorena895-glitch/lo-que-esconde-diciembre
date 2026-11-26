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

// MODO DE PRUEBA
// Cambiar a false antes del 1 de diciembre.
const PREVIEW_MODE = true;

// REGALOS DE DICIEMBRE
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

// ABRIR EL CALENDARIO
enterButton.addEventListener("click", () => {
cover.classList.add("leaving");

setTimeout(() => {
cover.classList.add("hidden");
cover.classList.remove("leaving");
calendar.classList.remove("hidden");
}, 800);
});

// MOSTRAR CONTENIDO SEGÚN EL TIPO DE REGALO
function showGift(surprise) {
surpriseContent.innerHTML = "";

if (surprise.type === "song") {
addPlaceholder("Acá vamos a poner la canción.");
}

if (surprise.type === "quiz") {
addPlaceholder("Acá vamos a crear el cuestionario interactivo.");
}

if (surprise.type === "voucher") {
addPlaceholder("VALE POR UNA SALIDA AL CINE");
}

if (surprise.type === "physical") {
addPlaceholder("Un regalo preparado especialmente para vos.");
}

if (surprise.type === "reveal") {
addPlaceholder("Acá vamos a descubrir las pequeñas cosas, una por una.");
}

if (surprise.type === "adventure") {
addPlaceholder("Acá empieza tu aventura.");
}

if (surprise.type === "mission") {
addPlaceholder("Tu misión aparecerá acá.");
}

if (surprise.type === "gallery") {
addPlaceholder("Acá vamos a armar nuestro museo de recuerdos.");
}

if (surprise.type === "playlist") {
addPlaceholder("Acá vamos a reunir nuestra banda sonora.");
}

if (surprise.type === "invitation") {
addPlaceholder("Fecha, lugar y menú: próximamente.");
}
}

// CREAR TEXTOS ADICIONALES
function addPlaceholder(message) {
const paragraph = document.createElement("p");
paragraph.textContent = message;
paragraph.classList.add("gift-placeholder");
surpriseContent.appendChild(paragraph);
}

// CREAR LOS 24 DÍAS
for (let day = 1; day <= 24; day++) {
const button = document.createElement("button");

button.classList.add("day");
button.textContent = String(day).padStart(2, "0");

const today = new Date();
const currentDate = new Date(
today.toLocaleString("en-US", {
timeZone: "America/Montevideo"
})
);

const isDecember =
currentDate.getFullYear() === 2026 &&
currentDate.getMonth() === 11;

const currentDay = isDecember ? currentDate.getDate() : 0;

if (!PREVIEW_MODE && (!isDecember || day > currentDay)) {
button.disabled = true;
}

// ABRIR LA PANTALLA DEL REGALO
button.addEventListener("click", () => {
const surprise = surprises[day - 1];

surpriseNumber.textContent = `DÍA ${day}`;

if (!surprise) {
surpriseTitle.textContent = "Todavía falta descubrirlo";
surpriseText.textContent = "Esta sorpresa está esperando su momento.";
surpriseContent.innerHTML = "";
giftPage.className = "gift-page experience-page";
} else {
surpriseTitle.textContent = surprise.title;
surpriseText.textContent = surprise.text;

showGift(surprise);

giftPage.className = surprise.type === "letter"
? "gift-page letter-page"
: "gift-page experience-page";
}

giftScreen.classList.remove("hidden");
giftScreen.classList.remove("opening", "revealed");

// Forzar al navegador a registrar el estado inicial
giftScreen.offsetWidth;

// Iniciar la transición
giftScreen.classList.add("opening");

setTimeout(() => {
giftScreen.classList.add("revealed");
}, 900);

daysGrid.appendChild(button);
}

// VOLVER AL CALENDARIO
backButton.addEventListener("click", () => {
giftScreen.classList.add("hidden");
giftScreen.classList.remove("opening", "revealed");
});
