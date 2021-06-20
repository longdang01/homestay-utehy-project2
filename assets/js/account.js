/** Login */
var isIndexPage = false;

if(sessionStorage.getItem('isIndexPage') === null) {
  sessionStorage.setItem('isIndexPage', false);
}

if(sessionStorage.getItem('userCurrent') === null) {
  sessionStorage.setItem('userCurrent', '');
}

if(sessionStorage.getItem('users') === null) {
  sessionStorage.setItem('users', users);
}


if(document.querySelector('#index-page')) {
  isIndexPage = true;

  $(window).bind('beforeunload', function(){
    sessionStorage.setItem('isIndexPage', JSON.stringify(isIndexPage));
  });
}

if(JSON.parse(sessionStorage.getItem('isIndexPage'))) {
  $('.nav-options').html(`<li class="option-item"><a href="#" class="option btn-host">Host</a></li>
                    
  <li class="option-item"><a href="#" class="option btn-register">Đăng ký</a></li>
  <li class="option-item"><a href="#" class="option btn-login">Đăng nhập</a></li>
  
  <li class="option-item">
      <a href="#" class="btn-language show-region">
          <img src="/assets/img/vietnam.png" alt="Viet Nam" class="option-item-img show-region">
          <span class="option-item-name show-region">VND</span>
          <span class="down-arrow show-region">
              <i class="fas fa-sort-down show-region"></i>
          </span>
      </a>
      <ul class="list-region show-region">
          <span class="triangle show-region"></span>
          <ul class="list-region-lan show-region">
              <li class="lan-item show-region">
                  <a href="#" class="lan-link show-region">
                      <img src="/assets/img/vietnam.png" alt="VietNam" class="lan-img show-region">
                      <span class="lan-name show-region">Tiếng Việt</span>
                      <i class="fas fa-check show-region"></i>
                  </a>
              </li>
              <li class="lan-item show-region">
                  <a href="#" class="lan-link show-region">
                      <img src="/assets/img/england.png" alt="England" class="lan-img show-region">
                      <span class="lan-name show-region">English</span>
                  </a>
              </li>
          </ul>
  
          <ul class="list-region-price show-region">
              <li class="price-item show-region">
                  <a href="#" class="price-link show-region">
                      <strong class="show-region">VND</strong>
                      <span class="price-name show-region">Việt Nam Đồng</span>
                      <i class="fas fa-check show-region"></i>
                  </a>
              </li>
              <li class="price-item show-region">
                  <a href="#" class="price-link show-region">
                      <strong class="show-region">USD</strong>
                      <span class="price-name show-region">United States Dollar</span>
                  </a>
              </li>
          </ul>
      </ul>
  </li>`);
}


// Modal
$('.option.btn-login').click(function() {
  $('.modal-login').css('display', 'grid');
})

$('.btn-register').click(function() {
  $('.modal-register').css('display', 'grid');
})

$('.btn-close').click(function() {
  $('.modal').css('display', 'none');
})

$('.btn-back').click(function() {
  $('.modal').css('display', 'none');
})

window.addEventListener('click', function(e) {
  if(e.target.classList.contains('modal')) {
      $('.modal').css('display', 'none');
  }
})

//Login, Register
try {
  userArr = JSON.parse(sessionStorage.getItem('users'));
} catch (e) {
  userArr = JSON.parse(sessionStorage.getItem('users'));
}

$('.btn-login-submit').click(function(e) {
  e.preventDefault();
  var isLogin = false;
  userArr.forEach(function (user) {
    console.log(user);
    if($('.email').val().trim() === user.email && $('.password').val().trim() === user.password) {
      isLogin = true;
      sessionStorage.setItem('userCurrent', JSON.stringify(user));

      isIndexPage= false;
      $(window).bind('beforeunload', function(){
        sessionStorage.setItem('isIndexPage', JSON.stringify(isIndexPage));
      });
     
      window.open("/account.html", "_self");
    } else if($('.email').val().trim() === 'admin' && $('.password').val().trim() === 'admin') {
      window.open("/admin.html", "_self");
    } 
  })
  if(isLogin == false) {
    alert('Tài khoản hoặc mật khẩu chưa chính xác!');
  }
})

//Auto increment id
var maxIDUser = function(arr) {
  let arrNumber = [];
  for(let i = 0;i < arr.length; i++) {
      arrNumber.push(Number(arr[i].id.replace(/[US]/g, ''))); 
  }
  return Math.max.apply(Math, arrNumber);
}

$('.btn-register-submit').click(function(e) {
  e.preventDefault();
  const name = $('.register-name').val();
  const email = $('.register-email').val();
  const pass = $('.register-password').val();
  var newUser = {
    id: 'US00' + Number(maxIDUser(userArr) + 1),
    img: '/assets/img/img-99.jpg',
    fullName: name,
    dateOfBirth: '',    
    address: '',
    phoneNumber: '',    
    email: email,
    password: pass
  }
  userArr.push(newUser);
  sessionStorage.setItem('users', JSON.stringify(userArr));
  alert('Đăng ký thành công');
  $('.modal').css('display', 'none');
})














/** Account options*/ 
// Logout
$('.btn-logout').click(function() {
  var logoutQuestion = confirm('Bạn có chắc chắn muốn đăng xuất hay không')
  if(logoutQuestion == true) {
      window.open('/index.html', '_self');
  }
})

// Show user menu
$('.btn-account').click(function() {
  $('.user-menu').toggleClass('show-block');
})

window.addEventListener('click', function(e) {
if(!e.target.classList.contains('show-user-menu')) {
  $('.user-menu').removeClass('show-block');
}
})

window.addEventListener('DOMContentLoaded', function() {
  
  if(document.querySelector('#index-page')) {
    isIndexPage = true;
    sessionStorage.setItem('isIndexPage', isIndexPage);
  }

  if(!JSON.parse(sessionStorage.getItem('isIndexPage'))) {
    var us = JSON.parse(sessionStorage.getItem('userCurrent'));
    $('.btn-account > .option-item-img').attr('src', us.img);
    $('.btn-account > .option-item-name').text(us.fullName);
  }
  // console.log(us);
})

