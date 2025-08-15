// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('May 17, 2026'),
//   });

const day = document.getElementById("days");
const hour= document.getElementById("hours");
const minutes =document.getElementById("minutes");
const seconds=  document.getElementById("seconds");
const targetDate= new Date('Aug 16, 2025');
function homeWRK(){
    const now = new Date()
    const time = targetDate - now;
    if(time <=0){
        day.textContent = 0; 
        hour.textContent = 0;
        minutes.textContent = 0;
        seconds.textContent = 0;
        return;
    }

const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000);


day.textContent = days;
hour.textContent =  hours;
minutes.textContent= mins;
seconds.textContent = secs;

}
setInterval(homeWRK, 1000);