const container = document.querySelector('.img-box');
const btn = document.querySelector('.more');
let perPage = 8;
let curentPage = 1;
const APIKEY = '52031151-aee09d0d7b5d33abe8f5f6101';
btn.addEventListener('click',()=>{
    imgParams(perPage, curentPage)
    .then(images =>renderImg(images))
    curentPage++
})
function imgParams(){
    return fetch(`https://pixabay.com/api/?key=${APIKEY}&per_page=${perPage}&page=${curentPage}`)
    .then(response=> response.json())
    .then(data => data.hits)
}
function renderImg(images){
const markup = images
.map(({webformatURL, webformatWidth, webformatHeight })=>{
    return `
    <div>
    <img style="min-height:${webformatWidth}px ; width:${webformatHeight}px;" src="${webformatURL}" alt="">
    </div>`;
})
.join("");
container.insertAdjacentHTML('beforeend', markup);
}