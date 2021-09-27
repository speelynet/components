// Check browser cookies for stored dark mode setting
const cookie = (/dark_mode=([^;]*);/.exec(document.cookie) ?? ["", ""])[1].trim();

let darkMode;
if (cookie !== "true" && cookie !== "false") { // If no cookie is found, assume preferred colour scheme
  darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.cookie = `dark_mode=${darkMode};`;
} else { // If a cookie is found, use the value in the cookie.
  darkMode = Boolean(cookie);
}

// Add dark mode property to document element
document.documentElement.style.setProperty("--dark-mode", darkMode ? " " : "initial");
