setInterval(function() {
    const d = new Date();
    const options = { timeZone: 'Europe/Moscow' };
    
    const dayElement = document.getElementById("day");
    const weekElement = document.getElementById("week");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // Получаем московское время
    const moscowDate = new Date(d.toLocaleString('en-US', options));

    const day = moscowDate.getDate();
    const week = Math.floor(day / 7) + 1; // Номер текущей недели
    const hours = moscowDate.getHours();
    const minutes = moscowDate.getMinutes();
    const seconds = moscowDate.getSeconds();

    dayElement.textContent = `| Day - ${day}`;
    weekElement.textContent = `| Week - ${week}`;
    hoursElement.textContent = `| Hours - ${hours}`;
    minutesElement.textContent = `| Minutes - ${minutes}`;
    secondsElement.textContent = ` | Seconds - ${seconds}`;
}, 1000);
