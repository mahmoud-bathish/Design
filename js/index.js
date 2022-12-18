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
    console.log("Mahmoud")
    if(window.scrollY >= section.offsetTop){
        if(!started){
            nums.forEach((num) => startCount(num));
        }
        started = true;
    };
    if(window.scrollY >= sectionTwo.offsetTop){
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}

