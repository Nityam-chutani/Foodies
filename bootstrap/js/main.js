// active navbar

// let nav = document.querySelector(".navigation-wrap");
// window.onscroll = function(){
//     if(document.documentElement.scrollTop >20){
//         nav.classList.add("scroll-on");
//     }else{
//         nav.classList.remove("scroll-on");
//     }
// }

//nav hide


// let navBar = document.querySelectorAll('.nav-link');
// let navCollapse = document.querySelector('/navbar-collapse.collapse');
// navBar.forEach(function(a){
//     a.addEventListener("click",function(){
//         navCollapse.classList.remove("show");
//     })
// })

//counter design


document.addEventListener("DOMContentLoaded" ,() => {
    function counter(id , start, end, duration){
        let obj = document.getElementById(id),
        current = start;
        range = end - start;
        increment = end > start ? 1: -1,
        step= Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.innerHTML= current;
            if(current == end){
                clearInterval(timer);
            }
        } , 0.00001);
    }
    counter("count1",0,1287,3000);
    counter("count2",100,5786,2500);
    counter("count3",0,1440,3000);
    counter("count4",0,7110,3000);
});


// const mainImg = document.getElementById('banner-img');
// let imgUrls = ['images/bg/bg-1.jpg','images/bg/bg-4.jpg','images/bg/bg-5.jpg']
// let i = 0;
// setInterval(()=>{
//     mainImg.style.backgroundImage = `url(${imgUrls[i]})`;
//     i++;
//     if(i>2){
//         i=0;
//     }
// },5000);

