const nav = document.querySelector('nav')
const navTop = nav.offsetTop

window.addEventListener('scroll', () => {
    if(window.scrollY>navTop){
        nav.classList.add('nav-shadow')
    }else {
        nav.classList.remove('nav-shadow')
    }
})