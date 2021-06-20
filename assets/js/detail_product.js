var pros = JSON.parse(sessionStorage.getItem('products'));

// Close Modal
$('.btn-close').click(() => {
  $('.modal-detail').css('display', 'none');
  $('.modal-payment').css('display', 'none');
})

$(window).click((e) => {
  if($(e.target).hasClass("modal")) {
    $('.modal-detail').css('display', 'none');
    $('.modal-payment').css('display', 'none');
  }
});

var checkInDay, checkOutDay;
function GetDays(){
  checkInDay = new Date($('.checkinday').val());
  checkOutDay = new Date($('.checkoutday').val());
  if(checkInDay >= checkOutDay || $('.checkoutday').val() == '') {
    var nextDay = new Date(checkInDay);
    nextDay.setDate(checkInDay.getDate() + 1);

    checkOutDay = nextDay;
  }
  return parseInt((checkOutDay - checkInDay) / (24 * 3600 * 1000));
}

function TotalPrice(){
  var total = 0;
  var oldPrice = $('.detail-price').text().replace(/[,|đ]/g,'');
  total = GetDays() * parseInt(oldPrice);
  
  return total.toLocaleString();  
}

var detailName,detailAddress, detailImg, detailPrice;

// else if(JSON.parse(sessionStorage.getItem('isIndexPage')) == true) {
//   alert('Hãy đăng nhập trước khi đặt phòng, nếu chưa có tài khoản hãy đăng ký');
// }
// Add to book list
$('.btn-booking').click(function() {
    if($('.txt-date').text() == 'Ngày' || $('.lbl-visitor').text() == 'Khách') {
        alert('Hãy chọn thông tin ngày và số khách đặt phòng trước khi bấm đặt ngay')
    }  else {
      detailName = $('.detail-name').text();
      detailAddress = $('.detail-address').text();
      detailImg = $('.detail-img').attr('src');
      detailPrice = $('.detail-price').text();
      
      var content = '';
      content =` <div class="modal-header">
          <div class="modal-header-left">
              <h3>${detailName}</h3>
              <p>${detailAddress}</p>
          </div>
          <div class="modal-header-right">
              <img class="img-product" src="${detailImg}" alt="" />
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-body-item">
              <div class="book-time booking">
                  <i class="far fa-calendar-alt"></i>
                  <span class="detail-time">${GetDays()}</span>
                  <span>đêm</span>
                  <div class="booking-date">
                      <span class="ckIn">${checkInDay.toISOString().substring(0, 10)}</span>
                      <span>/</span>
                      <span class="ckOut">${checkOutDay.toISOString().substring(0, 10)}</span>
                  </div>
              </div>

              <div class="book-visitor booking">
                  <i class="fas fa-user-friends"></i>
                  <span class="detail-visitors">${totalVisitor}</span>
                  <span>Khách</span>
              </div>
          </div>

          <div class="modal-body-item booking-price">
              <span>Giá thuê 1 đêm</span>
              <span class="dtPrice">${detailPrice}</span>
          </div>

          <div class="modal-body-item booking-price">
              <span>Tổng tiền</span>
              <span class="detail-total-price">${TotalPrice()}đ</span>
          </div>

          <a href="/assets/html/payment.html" class="btn-addtocart">Xác nhận</a>
      </div>`   
      $('.modal-content.detail-content > .modal-content-inner').html(content);

      let time = GetDays();
      let ckIn = checkInDay.toISOString().substring(0, 10);
      let ckOut = checkOutDay.toISOString().substring(0, 10);
      let detailVisitor = totalVisitor;
      let dtTotalPrice = TotalPrice();

      let detailPro = {
        "img": detailImg,
        "name": detailName,
        "address": detailAddress,
        "price": detailPrice,
        "time": time,
        "ckIn": ckIn,
        "ckOut": ckOut,
        "visitors": detailVisitor,
        "price": detailPrice,
        "totalPrice": dtTotalPrice
      }

      sessionStorage.setItem('detailPro', JSON.stringify(detailPro));
      $('.modal-detail').css('display', 'grid');
    }
})

// // Add heart
// $('.detail-heart').click(function() {
//   console.log('hi');
//   $('.detail-heart').toggleClass('heart');
//  }
// )

//Set order = '';
if(sessionStorage.getItem('orders') === null) {
  sessionStorage.setItem('orders', '');
}

//Set product = '';
if(sessionStorage.getItem('product') === null) {
  sessionStorage.setItem('product', '');
}

if(sessionStorage.getItem('txtHomeSearch') === null) {
  sessionStorage.setItem('txtHomeSearch', '');
}

//Load detail
var detailProduct = null;
window.addEventListener('DOMContentLoaded', function() {
  try {
      detailProduct = JSON.parse(sessionStorage.product); 
  } catch (e) {
    detailProduct = sessionStorage.product;
  }

  let order = JSON.parse(`[${sessionStorage.getItem('orders')}]`);
  let us;
  if(!JSON.parse(sessionStorage.getItem('isIndexPage'))) {
    us = JSON.parse(sessionStorage.getItem('userCurrent'));
  

    for(let i = 0; i < order.length; i++) {
      if(order[i].usID == us.id && order[i].cart[0].name === detailProduct.name) {
        $(".btn-booking").addClass('is-disabled');
        $(".btn-booking").text('Đã đặt phòng');
        $(".btn-booking").off('click');
      }
    }
  }

  let haveIt = [];
  function generateUniqueRandom(maxNr) {
      let random = (Math.random() * maxNr).toFixed();

      random = Number(random);

      if(!haveIt.includes(random)) {
          haveIt.push(random);
          return random;
      } else {
          if(haveIt.length < maxNr) {
          return  generateUniqueRandom(maxNr);
          } else {
            return false;
          }
      }
  }

  //renderRandom
  var renderRandom = function(arr) {
    var recommend = $('.room-recommend');
    let data = '';
    recommend.html('');
    for(let i = 0; i < 3; i++) {
      j = generateUniqueRandom(products.length - 1);

      var row = `<div class="room">
      <a href="javascript:void(0)" class="btn-heart"><i class="far fa-heart"></i></a>
      <a href="#" class="room-img-link">
          <img src="${arr[j].img}" alt="" class="room-img">
      </a>
  
      <div class="room-content">
          <span class="room-type">${arr[j].type}</span>
          <span>-</span>
          <span class="room-amount">${arr[j].amount}</span>
          <a href="#" class="room-name">${arr[j].name}</a>
          <p class="room-address">${arr[j].address}</p>
          <div class="room-booking">
              <span class="room-price">${arr[j].price}</span>
              <a href="#" class="btn-book">Đặt phòng</a>
          </div>
      </div>
      </div>`
      data += row;
    }

    recommend.html(data);

    // Add heart
    $('.btn-heart').click(function() {
        $(this).toggleClass('heart');
    })
    //LoadDetail
    $('.btn-book, .room-name, .room-img-link').click(function() {
        loadDetailProduct(pros, this);
    })
  }

  $('.room-recommend').html(renderRandom(pros));

  $('.detail-img').attr('src', detailProduct.img);
  $('.detail-name').html(detailProduct.name);
  $('.detail-amount').text(detailProduct.amount);
  $('.detail-type').text(detailProduct.type);
  $('.detail-address').text(detailProduct.address);
  $('.detail-price').text(detailProduct.price);
  $('.detail-description').text(detailProduct.description);
}) 


