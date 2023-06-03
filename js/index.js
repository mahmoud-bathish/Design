let mixer = mixitup(".imgs-container",{
    selectors:{
        target:".prt-cart",
    },
    animation:{
        duration:500,
    }
})

let filters = document.getElementById('fil');
let btns = document.querySelectorAll(".shuffle li")
filters.addEventListener('click',(e)=>{
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');        
    }
    e.target.classList.add('active')
})


let nums = document.querySelectorAll('.box .number');
let section = document.querySelector('.stats');
let started = false;

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){ 
            clearInterval(count);
        }
    },2000/goal)
}


let spans = document.querySelectorAll(".prog-holder .prog span");
let sectionTwo = document.querySelector(".our-skills");

window.onscroll = function () {
    const sectionRect = section.getBoundingClientRect();
    const sectionTop = sectionRect.top;
    const sectionBottom = sectionRect.bottom;
    const windowHeight = window.innerHeight;
  
    if(sectionBottom >= 0 && sectionTop <= windowHeight / 3){
        if(!started){
            nums.forEach((num) => startCount(num));
        }
        started = true;
    };
    if(sectionBottom >= 0 && sectionTop <= windowHeight / 3){
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}