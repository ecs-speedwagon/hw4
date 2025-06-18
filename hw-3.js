//    const imageObserver = new IntersectionObserver(
//     (enties, observer) =>{
//         enties.forEach(entry =>{
//             if(entry.isIntersecting){
//                 entry.target.src = entry.target.dataset.src

//                 observer.unobserve(entry.target);
//             }
//         })
//     },{
//         threshold: 0.5
//     }
//    )
//    const image = document.querySelectorAll('img');
//    image.forEach((element) => {
//     imageObserver.observe(element)
//    });