const lightTheme = document.querySelector('.light-theme')
const darkTheme = document.querySelector('.dark-theme')

const openSvg = document.querySelector('.open-svg')
const closeSvg = document.querySelector('.close-svg')
const openMenu = document.querySelector('.open-menu')

const menuItensMobile = document.querySelectorAll('.open-menu a')
const menuItensDesktop = document.querySelectorAll('.menu-desktop a')

/* SCROLL PAGE */
function scrollToSectionDesktop(e) {
  e.preventDefault()
  const target = e.target
  const id = target.getAttribute('href')
  const section = document.querySelector(id).offsetTop

  window.scroll({
    top: section - 300,
    behavior: 'smooth'
  })
}