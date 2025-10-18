// import './style.css'
const studentContainerDIV = document.querySelector("#student-container");
const BASE_URL = 'http://localhost:3000';
let students = [];
 function renderStudents(){
    studentContainerDIV.innerHTML="";
    students.forEach(student =>{
        const div = document.createElement('div');
        div.innerHTML = `<h3>${student.name}</h3>
                        <p>Age: ${student.age}</p>
                        <p>Email: ${student.email}</p>
                        <button id='edit' data-action='edit' data-id=${student.id}>edit</button>   
                        <button id='delete'data-action='delete' data-id=${student.id}>delete</button>`;   
                                             
        studentContainerDIV.append(div);
    })
 }
 studentContainerDIV.addEventListener('click',(e)=>{
    const button = e.target;
    if(button.nodeName !== 'BUTTON'){
        return
    }
    if(button.dataset.action === 'edit'){
        const id = button.dataset.id
        updateStudentAsync(id)
    }
   else if(button.dataset.action === 'delete'){
        const id = button.dataset.id
        deleteStudentAsync(id)
    }

 })


async function getAllStudentsAsync(){
    try {
        const resp = await fetch(`${BASE_URL}/students`);
        students = await resp.json();

        renderStudents()
    } catch (error) {
        console.error('u`ve got a error in getting students', error.message);
    }
}


async function createNewStudent(){
    try {
        const name = prompt('Paste your name');
        if(!name){return alert('ВВедіть імя')};

        const age = prompt('Paste your age');
        if(!age || isNaN(age)){ return alert('ВВедіть вік')};

        const email = prompt('Paste your email');
        if(!email){ return alert('ВВедіть мейл')};


        const resp = await fetch(`${BASE_URL}/students`,{
            method:"POST",
            body:JSON.stringify({name, age, email}),
            headers: {
                "Content-Type": "application/json",
            }
        })

        // const resp = await fetch(`${BASE_URL}/students`,{
        //     method:"POST",
        //     body:JSON.stringify({
        //         name:"artem",
        //         age: 22,
        //         email:'dbhasdbfga',
        //     }),
        //     headers: {
        //         "Content-Type": "application/json",
        //     }
        // })

        
    if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }
        const createdStudent = await resp.json()
        students.push(createdStudent);
        renderStudents()
    } catch (error) {
        console.error("You cant create a new studen ", error.message)
    }
}


async function updateStudentAsync(id){
    try {
        // const id = prompt('who you want to edit?');

        const name = prompt('update your name');
        if(!name){return alert('ВВедіть імя')};

        const age = prompt('update your age');
        if(!age || isNaN(age)){ return alert('ВВедіть вік')};

        const email = prompt('update your email');
        if(!email){ return alert('ВВедіть мейл')};



        const resp = await fetch(`${BASE_URL}/students/${id}`,{
            method:"PATCH",
            body:JSON.stringify({name, age, email}),
            headers: {
                "Content-Type": "application/json",
            }
        })
        // const resp = await fetch(`${BASE_URL}/students/${id}`,{
        //     method: "PATCH",
        //     body: JSON.stringify(whatToUpdate),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // })
        const updatedStudent = await resp.json();  
        students = students.map((student) => {
            if (student.id === updatedStudent.id) {
                return updatedStudent;
            }
            return student;
        })
        renderStudents();
      
        
    } catch (error) {
        console.error('error in updating', error.message);
    }
}







async function deleteStudentAsync(id){
    try {

        const resp = await fetch(`${BASE_URL}/students/${id}`,{
            method: 'DELETE',
        })
        if (resp.status === 404) {
            throw new Error(`${id}} не найден`);
        }
        const removedStudent = await resp.json();
        students = students.filter((student)=> student.id !== removedStudent.id);
        renderStudents()

    } catch (error) {
        console.error('you`he got a delete erorr', error.message)
    }
}





getAllStudentsAsync();
const createBtn =document.querySelector('#create-btn');
const updateBtn =document.querySelector('#update-button');
const deleteBtn =document.querySelector('#delete-button');
createBtn.addEventListener('click', createNewStudent);
updateBtn.addEventListener('click', updateStudentAsync);
deleteBtn.addEventListener('click', deleteStudentAsync);

