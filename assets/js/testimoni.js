const dataTesti = [
    {
        cuplikan: '"Every emotion was felt looking through these images "',
        fullTxt: 'I tried to accurately express how I felt but nothing more articulate than “WOW” would come to the surface. Every emotion was felt looking through these images and I just can’t understand how you do what you do. Pictures are not images through your lenses but actual, physical, tangible moments. I mean, what? Chunky tears? How? Haha!',
        owner: '- CASSIDY & CHRIS',
        foto: './assets/img/testi-1.jpg'
    },
    {
        cuplikan: '"My trust allowed me to be fully present, fully myself, and enjoy the hours leading up to the wedding"',
        fullTxt: 'You set the tone for the day. You were steady, fun, gracious, and had the ability to control chaos when needed! You made room for the tender, sacred, and natural moments, and allowed us to be our complete selves in front of the camera! I never worried about one picture. I never worried if I looked ok. I never worried if there was a picture that was being missed. I never worried once. I trusted y\'all! My trust allowed me to be fully present, fully myself, and enjoy the hours leading up to the wedding. What a priceless gift.',
        owner: '- SUTTON & LEAH',
        foto: './assets/img/testi-2.jpg'
    },
    {
        cuplikan: '"Hands down one of our best decisions in our wedding planning process!"',
        fullTxt: 'Where do I even begin with these two!? Such amazing photographers - so amazing, we flew them into NYC from Nashville for our wedding. They are amazing at communicating their vision and aligning it with yours, and make sure it comes alive on your wedding day. They were patient and fun and personable, and felt more like friends than photographers on the big day. Their images are striking, being able to capture both beautiful posed shots as well as heartfelt candids. Truly amazing photos and we feel so lucky that they were there to capture such a great and memorable day.',
        owner: '- HALEY & TIM',
        foto: './assets/img/testi-3.jpg'
    }
]

const cuplikan    = document.querySelector('.cuplikan')
const fullText    = document.querySelector('.full-text')
const owner       = document.querySelector('.owner')
const foto        = document.querySelector('.testi-img')

const prevBt = document.querySelector('.testi-prev')
const nextBt = document.querySelector('.testi-next')

let currentItem  = 0

window.addEventListener('DOMContentLoaded', () => {
    const item = dataTesti[currentItem]
    cuplikan.textContent = item.cuplikan
    fullText.textContent = item.fullTxt
    owner.textContent = item.owner
    foto.src = item.foto
})

const showPerson = (person) => {
    const item = dataTesti[person]
    cuplikan.textContent = item.cuplikan
    fullText.textContent = item.fullTxt
    owner.textContent = item.owner
    foto.src = item.foto
}

prevBt.addEventListener('click', () => {
    currentItem--;
    if(currentItem<0){
        currentItem = dataTesti.length - 1
    }
    showPerson(currentItem)
})

nextBt.addEventListener('click', () => {
    currentItem++;
    if(currentItem>dataTesti.length - 1){
        currentItem = 0
    }
    showPerson(currentItem)
})