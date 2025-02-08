document.addEventListener("DOMContentLoaded", function() {
    const numStars = 32; 
    const sky = document.querySelector(".stars");

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 10 + "s"; // Задержка анимации
        sky.appendChild(star);
    }
});
