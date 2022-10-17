const cacheKey = 'visitor'
const username = document.querySelector('.your-name')
const visitor = localStorage.getItem(cacheKey) || ''

username.value = visitor
username.addEventListener('change', e => {
    localStorage.setItem(cacheKey, e.target.value)
})
