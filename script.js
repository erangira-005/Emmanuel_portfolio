const root = document.documentElement;
const button = document.getElementById("theme-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme() {
    return root.dataset.theme || (prefersDark.matches ? "dark" : "light");
}

// Restore the visitor's saved choice, if there is one
const saved = localStorage.getItem("theme");
if (saved) {
    root.dataset.theme = saved;
}

button.hidden = false;
button.setAttribute("aria-pressed", String(currentTheme() === "dark"));

button.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    // Remember the choice for next time
    localStorage.setItem("theme", next);
    button.setAttribute("aria-pressed", String(next === "dark"));
});



