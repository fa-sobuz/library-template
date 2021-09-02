const bars = document.querySelector('#bars');


// Splide js for carousel
document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide').mount();
});

// counter
const counters = document.querySelectorAll('.counter');
// Main function
for(let n of counters) {
    const updateCount = () => {
        const target = + n.getAttribute('data-target');
        const count = + n.innerText;
        const speed = 2000; // change animation speed here
        const inc = target / speed;
        if(count < target) {
            n.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            n.innerText = target;
        }
    }
    updateCount();
}


// scroll to top button
const btnScroll = document.querySelector('.scrollToTop');
window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 100){
        btnScroll.classList.remove("isHidden");
    }else{
        btnScroll.classList.add("isHidden"); 
    }
})

btnScroll.addEventListener('click',()=>{
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
})
