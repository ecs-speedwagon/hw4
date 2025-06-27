// let keys =['a','b','s', 'f', 'g', 'h', 'j', 'k', 'l', 'z']
// let currentKeyIndex = 0;
// const keyDiv = document.getElementById("key");

// function setNewKey() {
//   const randomIndex = Math.floor(Math.random() * keys.length);
//   currentKeyIndex = randomIndex;
//   keyDiv.textContent = keys[currentKeyIndex];
// }   
// setNewKey();

// document.addEventListener('keydown', function(e) {
//   const pressedKey = e.key;

//   if (pressedKey === keys[currentKeyIndex]) {
//     PNotify.success({
//       text: `воно воно, це була ${pressedKey}`,
//       delay: 100
//     });
//     setNewKey();
//   } else {
//     PNotify.error({
//       text: `Не то, ти натиснув: ${pressedKey}`,
//       delay: 100
//     });
//   }
// });







const chartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
      {
        label: "Продажі за останній місяць",
        data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
        backgroundColor: "#2196f3",
        borderColor: "#2196f3",
        borderWidth: 1,
      },
    ],
  };

  const config={
    type: 'line',
    data: chartData,
    options:{},
}
  const salesChart = new Chart(
    document.querySelector('#sales-chart'),
    config
  );


  // const data ={
//     labels:["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
//     datasets:[{
//         label:'temp',
//         data:[0.1,0.2,0.3],
//         tension: 0.1,
//         borderColor:'red'   
//     }]
// }
// const config={
//     type: 'line',
//     data: data,
//     options:{},
// }
// // const sybau = new Chart(
//     document.querySelector('#charge'),
//     config
// )


