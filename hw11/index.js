// const divMin = document.querySelector('#seconds');
// const startBtn = document.querySelector('#start');

// let timer = null;

// function anotherTimer(){
//     let seconds = 3000;
//     divMin.textContent = seconds;
//     clearInterval(timer);
//         let s = Math.floor((seconds/1000)%60);
//         let ms = Math.floor(seconds%1000);

//     timer = setInterval(()=>{
//         let s = Math.floor((seconds/100)%60);
//         let ms = Math.floor(seconds%100);
//         seconds --;
//         divMin.textContent = `${s}.${ms}`;
//         if(seconds ===1000){
//             alert('Пройшло 20сек')
//         }
//         if(seconds <=0){
//             startBtn.style.backgroundColor = 'red';
//             clearInterval(timer)
//         }
//     },10)
// }
// startBtn.addEventListener('click', anotherTimer);


// function startTimer() {
//     let minutes = 60; 
//     divMin.textContent = minutes;
//     clearInterval(timer);

//     timer = setInterval(() => {
//         minutes--;
//         divMin.textContent = minutes;
//         if (minutes === 30) {
//             alert('Залишилось менше половини часу');
//         }
//         if (minutes <= 0) {
//             clearInterval(timer);
//             alert('Час вийшов');
//         }
//     }, 60000); 
// }

// startBtn.addEventListener('click', startTimer);