setInterval(function() {
    const d = new Date();
    const dayElement = document.getElementById("day");
    const weekElement = document.getElementById("week");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    const day = d.getDate();
    const week = Math.floor(day / 7) + 1; // Номер текущей недели
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();

    dayElement.textContent = `| Day - ${day}`;
    weekElement.textContent = `| Week - ${week}`;
    hoursElement.textContent = `| Hours - ${hours}`;
    minutesElement.textContent = `| Minutes - ${minutes}`;
    secondsElement.textContent = ` | Seconds - ${seconds}`;
}, 1000); 
