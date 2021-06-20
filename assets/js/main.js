const slideContainer = document.querySelector('.hero-slide');
var slides = document.querySelectorAll('.slide-img');
/* AddEventListener */
// Search
document.querySelector('.txt-place').addEventListener('click', function() {
  document.querySelector('.location-suggest').classList.toggle('show-block');
})

window.addEventListener("click", function(e) {
  if(!e.target.classList.contains('txt-place') && !e.target.classList.contains('location-suggest-title')) {
    document.querySelector('.location-suggest').classList.remove('show-block');
  } 
});

document.querySelectorAll('.location-link').forEach(function(e) {
  e.addEventListener('click', function() {
    document.querySelector('.txt-place').value = '';
    document.querySelector('.txt-place').value = e.childNodes[3].innerText;
  })
})

document.querySelectorAll('.location-link').forEach(function(e) {
  e.addEventListener('click', function () {
    document.querySelector('.date-inner').classList.add('show-block');
  })
})

//Set order = '';
if(sessionStorage.getItem('orders') === null) {
  sessionStorage.setItem('orders', '');
}

renderHomePage(JSON.parse(sessionStorage.getItem('products')));

if(sessionStorage.getItem('txtHomeSearch') === null) {
  sessionStorage.setItem('txtHomeSearch', '');
}

$('.btn-search').click(function() {
  var txtHomeSearch = $(this).siblings('.search-location').find('.txt-place').val();
  sessionStorage.setItem('txtHomeSearch', JSON.stringify(txtHomeSearch));

})

$('.btn-sub').click(function() {
  var txtPopular = $(this).text();
  sessionStorage.setItem('txtHomeSearch', JSON.stringify(txtPopular));
})

// Show Modal
$('.contact-page, .btn-about').click(() => {
  $('.modal-contact').fadeIn(() => {
      $('.modal-contact').css('display', 'block');
  });
})

// Close Modal
$(window).click((e) => {
  if($(e.target).hasClass("modal")) {
      $('.modal').fadeOut(() => {
          $('.modal').css('display', 'none');
      });
  }
});

// Add heart
$('.btn-heart').click(function() {
  $(this).toggleClass('heart');
})











