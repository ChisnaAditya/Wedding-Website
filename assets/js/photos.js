const photos = [
    './assets/img/bio-1.png',
    './assets/img/bio-2.png',
    './assets/img/bio-3.png',
    './assets/img/bio-4.png',
    './assets/img/bio-5.png'
]

const photoDisplay = document.querySelector('.img-0')
const imgs = document.querySelectorAll('.photo-collection img')

imgs.forEach(img => {
    img.addEventListener('click', (e) => {
        let selectedPhoto = parseInt(e.target.classList)
        photoDisplay.src = photos[selectedPhoto]
    })
});