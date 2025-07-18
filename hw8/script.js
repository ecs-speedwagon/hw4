const username = document.querySelector("#username");
const password = document.querySelector("#password");
const save = document.querySelector("#saveBtn");


save.addEventListener('click', () => {
    const user = {
      name: username.value,
      password: password.value
    };
  
    localStorage.setItem('user', JSON.stringify(user));
  
    console.log("Збережений користувач:", localStorage.getItem('user'));
  });
localStorage.removeItem('userName');
console.log("Збережений користувач:", localStorage.getItem('user'));

// let data ={}
// save.addEventListener('click',()=>{
// data = {
//     name: username.value,
//     password: password.value
// }
// const dataJSON = JSON.stringify(data);
// const blob = new Blob([dataJSON], { type: "application/json" });
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = "script.json";
//       a.click();

//       URL.revokeObjectURL(url);
// })

