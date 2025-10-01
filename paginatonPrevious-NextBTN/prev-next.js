const itemsPerPage = 10
let curentPage =1
let data=[];
const dataCont = document.querySelector('#data-container')
const pagintCont = document.querySelector('#pagination')
fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=>res.json())
.then((json)=>{data = json; build()})
function build(){
    renderList();
    renderPager();

}
function pageCont(){
    return Math.ceil(data.length / itemsPerPage)
}
function setPage(page){
    if(page < 1 || page > pageCont())return;
    curentPage = page;
    build()
}
function renderList(){
    pagintCont.innerHTML = "";
    const start = (curentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = data.slice(start, end);


    dataCont.innerHTML = pageData
    .map(({userId,id,title,body})=> `<li>
    <h3 class="post-title">userID: ${userId}</h3>
    <p><b>Post id</b>:${id}</p>
    <p><b>Title</b>:${title}</p>
    <p class="post-body">${body}</p>
    </li>`)
    .join("")
}
function renderPager(){
    
    const previous = document.createElement("button");
    previous.innerText ="< previous";
    previous.onclick = () => setPage(curentPage - 1);
    pagintCont.appendChild(previous);

    for(let i = 1; i <= pageCont(); i++){
        let butt = document.createElement("button");
        butt.textContent = i;
        butt.className = "number-page";
        butt.onclick = () => setPage(i);
        if (i === curentPage) butt.classList.add("active");
        pagintCont.appendChild(butt)
    }


    const next = document.createElement("button");
    next.innerText = "next >";
    next.onclick = () => setPage(curentPage + 1);
    pagintCont.appendChild(next)

}