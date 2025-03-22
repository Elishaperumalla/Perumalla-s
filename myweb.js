// script.js
document.addEventListener("DOMContentLoaded", function () {
    const socialLinks = document.querySelectorAll(".social-icons a");

    socialLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            alert("This will redirect to the respective social media page!");
        });
    });
});
