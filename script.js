const root = document.documentElement;
const button = document.getElementById("theme-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme() {
    return root.dataset.theme || (prefersDark.matches ? "dark" : "light");
}

// Put this BEFORE the line: button.hidden = false;
const saved = localStorage.getItem("theme");
if (saved) {
    root.dataset.theme = saved;
}

button.hidden = false;
button.setAttribute("aria-pressed", String(currentTheme() === "dark"));

button.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    // Put this INSIDE the click handler, right after you work out `next`
    localStorage.setItem("theme", next);
    button.setAtrribute("aria-pressed", String(next === "dark"));
});



