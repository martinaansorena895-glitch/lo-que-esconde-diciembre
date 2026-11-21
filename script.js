const enterButton = document.getElementById("enterButton");
const cover = document.getElementById("cover");
const calendar = document.getElementById("calendar");

const daysGrid = document.getElementById("daysGrid");
const surpriseModal = document.getElementById("surpriseModal");
const closeModal = document.getElementById("closeModal");

const surpriseNumber = document.getElementById("surpriseNumber");
const surpriseTitle = document.getElementById("surpriseTitle");
const surpriseText = document.getElementById("surpriseText");

// Sorpresas de diciembre
const surprises = [
    {
        title: "Un comienzo",
        text: "Bienvenido a diciembre. Durante los próximos 24 días vas a encontrar pequeñas sorpresas preparadas especialmente para vos."
    },
    ...Array.from({ length: 23 }, (_, index) => ({
        title: `Sorpresa ${index + 2}`,
        text: "Esta sorpresa todavía está esperando a ser descubierta."
    }))
];

// Abrir el calendario
enterButton.addEventListener("click", () => {
    cover.classList.add("leaving");

    setTimeout(() => {
        cover.classList.add("hidden");
        cover.classList.remove("leaving");
        calendar.classList.remove("hidden");
    }, 800);
});
// Crear los 24 días
for (let day = 1; day <= 24; day++) {
    const button = document.createElement("button");

    button.classList.add("day");
    button.textContent = String(day).padStart(2, "0");

    const today = new Date();
    const currentDate = new Date(
        today.toLocaleString("en-US", { timeZone: "America/Montevideo" })
    );

    const isDecember = currentDate.getFullYear() === 2026 &&
        currentDate.getMonth() === 11;

    const currentDay = isDecember ? currentDate.getDate() : 0;

    if (!isDecember || day > currentDay) {
        button.disabled = true;
    }

    button.addEventListener("click", () => {
        const surprise = surprises[day - 1];

        surpriseNumber.textContent = `DÍA ${day}`;
        surpriseTitle.textContent = surprise.title;
        surpriseText.textContent = surprise.text;

        surpriseModal.classList.remove("hidden");
    });

    daysGrid.appendChild(button);
}

// Cerrar la sorpresa
closeModal.addEventListener("click", () => {
    surpriseModal.classList.add("hidden");
});

surpriseModal.addEventListener("click", (event) => {
    if (event.target === surpriseModal) {
        surpriseModal.classList.add("hidden");
    }
});
