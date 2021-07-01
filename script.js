const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="mymac.jpeg" alt="" />'
  title.innerHTML = 'MacBook Pro 2015 Model'
  excerpt.innerHTML =
    'MackBook-Pro for sale, condition 10/10, bettry healt 85%, Not open, seal to seal pack and everything is okay.'
  profile_img.innerHTML =
    '<img src="pic-2.jpeg" alt="" />'
  name.innerHTML = 'Muhammad Salman Arif'
  date.innerHTML = 'Oct 08, 2020'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}