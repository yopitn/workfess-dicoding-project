// Navbar Menu Hamburger Button
const navHamburger = document.getElementById('navbarHamburger')
const navClose = document.getElementById('navbarClose')
const navMenu = document.querySelector('.navbar-menu')
const navCover = document.getElementById('navbarCover')
const navLink = document.querySelectorAll('.navbar-menu .link')

navHamburger.addEventListener('click', () => {
  navMenu.classList.add('active')

  navCover.classList.add('active')
})

navClose.addEventListener('click', () => {
  navMenu.classList.remove('active')

  navCover.classList.remove('active')
})

navCover.addEventListener('click', () => {
  if (navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    navCover.classList.remove('active')
  }
})

navLink.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      navCover.classList.remove('active')
    }
  })
});

// Navmenu Link Active
const article = document.querySelectorAll('article[id]');

const navbarActive = () => {
  const scrollY = window.pageYOffset;

  article.forEach(curr => {
    const articleHeight = curr.offsetHeight
    const articleTop = curr.offsetTop - 100
    const articleId = curr.getAttribute('id')

    if (scrollY > articleTop && scrollY <= articleTop + articleHeight) {
      document.querySelector('.navbar-menu .link[href*='+ articleId +']').classList.add('active')
    } else {
      document.querySelector('.navbar-menu .link[href*='+ articleId +']').classList.remove('active')
    }
  })
}

window.addEventListener('scroll', navbarActive)