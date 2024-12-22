// script.js

document.addEventListener("DOMContentLoaded", function () {
    const darkModeSwitch = document.getElementById("darkModeSwitch");

    // Check for saved dark mode preference in local storage
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeSwitch.checked = true;
    }

    darkModeSwitch.addEventListener("change", function () {
        if (darkModeSwitch.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
