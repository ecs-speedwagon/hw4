const form = document.querySelector('form')
const text = document.querySelector("#text");
const userName = document.querySelector('#name');
const userMail = document.querySelector('#email');
const addbtn = document.querySelector('#add');
const del = document.querySelector('#delete')
const addNew = document.querySelector('#addNew');

    const saved=()=>{
        const obj = {
            name: userName.value,
            email: userMail.value,
            text: text.value
          };
          localStorage.setItem('obj',JSON.stringify(obj));
          console.log(localStorage.getItem('obj'));
    };

    text.addEventListener('input', saved);
    userName.addEventListener('input', saved);
    userMail.addEventListener('input', saved);
function saveTs(){
    const data =localStorage.getItem('obj');
    const info =JSON.parse(data);
}
addbtn.addEventListener('click',()=>{
    event.preventDefault();
    const data =localStorage.getItem('obj');
    const info =JSON.parse(data);
    text.value = info.text;
    userName.value = info.name;
    userMail.value = info.email
})
del.addEventListener('click',()=>{
    localStorage.removeItem('obj')
    text.value ='';
    userMail.value = '';
    userName.value = '';
})
saveTs()

