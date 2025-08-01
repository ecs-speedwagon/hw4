        // let current = 0
        // const intervalId = setInterval(() => {
    	// 	console.log(current)
    	// 	current++
        //     if (current === 5) {
    	// 		clearInterval(intervalId)
    	// 		alert('Вивід чисел завершено!')
    	// 	}
    	// }, 1000)












//let seconds =0;
//let interval =null;
// const blue = document.querySelector('#blue')
// const green = document.querySelector('#green')
// const red = document.querySelector('#red')

//    function doubleR(){
//     red.style.backgroundColor = "black";
//     blue.style.backgroundColor = "black";
//     green.style.backgroundColor = "black";
//     if (seconds === 0) {
//       red.style.backgroundColor = 'red';
//       interval = setTimeout(() => {
//         seconds = 1;
//         doubleR();
//       }, 3000);
//     } else if (seconds === 1) {
//         blue.style.backgroundColor = "blue";
//       interval = setTimeout(() => {
//         seconds= 2;
//         doubleR();
//       }, 1000);
//     } else if (seconds === 2) {
//       green.style.backgroundColor = "green";
//       interval = setTimeout(() => {
//         seconds = 0;
//         doubleR();
//       }, 2000);
//     }
 
// }
// doubleR()


















// const clickZone = document.getElementById('clickZone');
// const info = document.getElementById('info');
// const startBtn = document.getElementById('startBtn');

// let score = 0;
// let timeLeft = 10;
// let timer;
// let gameActive = false;

// startBtn.addEventListener('click', () => {
//   score = 0;
//   timeLeft = 10;
//   gameActive = true;
//   info.textContent = `Кліків: ${score} | Час: ${timeLeft}`;

//   timer = setInterval(() => {
//     timeLeft--;
//     info.textContent = `Кліків: ${score} | Час: ${timeLeft}`;
//     if (timeLeft === 0) {
//       clearInterval(timer);
//       gameActive = false;
//       info.textContent = `ви зробили ${score} кліків.`;
//     }
//   }, 1000);
// });

// clickZone.addEventListener('click', () => {
//     score++;
//     info.textContent = `Кліків: ${score} | Час: ${timeLeft}`;
// });

const secInput = document.getElementById('seconds')
let timer = null

function startTimer() {
   
    let seconds = parseInt(secInput.value);
    
    if (isNaN(seconds) || seconds <=0) {
      console.log('не то');
      return;
    }
    console.log(`чекай ${seconds} сек`);

    let timer =setInterval(() => {
        seconds --
      console.log(`Минуло ${seconds} сек`);
      if(seconds ===0){
        alert('Все')
        clearInterval(timer)
      }
    }, 1000);
}

