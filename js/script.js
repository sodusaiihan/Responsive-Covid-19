// Preloader Animation while the body gets loaded

const preloader = document.querySelector('.preloader')
const bodyLoaded = () => {
  setTimeout(() => {
    preloader.style.display = 'none'
  }, 2000)
}

// Scroll to Top
const scrollToTop = document.querySelector('.scrollToTop')

// When scroll Height is creater than 400 then display scroll to Top

window.addEventListener('scroll', () => {
  window.pageYOffset > 400
    ? (scrollToTop.style.display = 'block')
    : (scrollToTop.style.display = 'none')
})

// Scroll to top on click

scrollToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0 })
})

// Scroll Reveal animation

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 3000,
  reset: false,
})

sr.reveal(
  `.starter,
  .about,
  .contagion,
  .symptoms,
  .solutions,
  .map,
  .contact
  footer,
  span`
)
