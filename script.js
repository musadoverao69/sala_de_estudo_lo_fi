function updateTheme() {
    let page = document.body;
    if (page.id == "light-theme") {
        page.id = "dark-theme"
    } else {
        page.id = "light-theme"
    }
}

function updateVolume() {
    
}

function getDate() {
    let p ='';

    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    let date = new Date();
    let week = diasDaSemana[date.getDay()];
    let day = date.getDate();
    let month = meses[date.getMonth()];
    p = `${week}, ${month} ${day}`

    document.getElementById('date-id').textContent = p;
}

function updateHour() {
    let p = '';

    let date = new Date();
    let hour = date.getHours();
    let minute = String(date.getMinutes()).padStart(2, '0');
     if (hour>12) {
        hour = hour-12;
         hour =  String(hour).padStart(2, '0');
         p = `${hour} :${minute} PM`
    } else {
         hour =  String(hour).padStart(2, '0');
         p = `${hour} :${minute} AM`
    }
    document.getElementById('time-id').textContent = p;
}

document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('lofi-audio');
    const button = document.getElementById('volume-toggle');

    getDate();
    setInterval(updateHour, 1000);
    updateHour();

    button.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(error => {
                console.log("A reprodução foi bloqueada pelo navegador até o usuário interagir.", error);
            });
        } else {
            audio.pause();
        }
    });
});