// Add current page
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-link.current-page').classList.remove('current-page');
    link.classList.add('current-page');
  })
})

// Scroll Nav
const header = document.querySelector('.header'); 
window.addEventListener('scroll', function() {
  if (document.documentElement.scrollTop > header.clientHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  } 
})

// Show region
$('.btn-language').click(function() {
  $(this).siblings().toggleClass('show-list-region');
})

window.addEventListener('click', function(e) {
  if(!e.target.classList.contains('show-region')) {
    $('.list-region').removeClass('show-list-region');
  }
})

$('.nav-logo').click(function() {
  let indexPage = JSON.parse(sessionStorage.getItem('isIndexPage'));

  if(indexPage) {
    window.open('/index.html', '_self');
  } else {
    window.open('/account.html', '_self');
  }
})

