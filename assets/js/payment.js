var pro = JSON.parse(sessionStorage.getItem('detailPro'));
window.addEventListener('DOMContentLoaded', function() {

    let us;
    if(!JSON.parse(sessionStorage.getItem('isIndexPage'))) {
        us = JSON.parse(sessionStorage.getItem('userCurrent'));
    
        $('.user-info-id').val(us.id);
        $('.user-info-name').val(us.fullName);
        $('.user-info-dateOfBirth').val(us.dateOfBirth);
        $('.user-info-address').val(us.address);
        $('.user-info-email').val(us.email);
        $('.user-info-phoneNumber').val(us.phoneNumber);
    } else {
        $('.user-info-id').val('');
        $('.user-info-name').val('');
        $('.user-info-dateOfBirth').val('');
        $('.user-info-address').val('');
        $('.user-info-email').val('');
        $('.user-info-phoneNumber').val('');
    }


    var content = '';
    content =` <div class="modal-header">
        <div class="modal-header-left">
            <h3>${pro.name}</h3>
            <p>${pro.address}</p>
        </div>
        <div class="modal-header-right">
            <img class="img-product" src="${pro.img}" alt="" />
        </div>
    </div>
    <div class="modal-body">
        <div class="modal-body-item">
            <div class="book-time booking">
                <i class="far fa-calendar-alt"></i>
                <span class="detail-time">${pro.time}</span>
                <span>đêm</span>
                <div class="booking-date">
                    <span class="ckIn">${pro.ckIn}</span>
                    <span>/</span>
                    <span class="ckOut">${pro.ckOut}</span>
                </div>
            </div>

            <div class="book-visitor booking">
                <i class="fas fa-user-friends"></i>
                <span class="detail-visitors">${pro.visitors}</span>
                <span>Khách</span>
            </div>
        </div>

        <div class="modal-body-item booking-price">
            <span>Giá thuê 1 đêm</span>
            <span class="dtPrice">${pro.price}</span>
        </div>

        <div class="modal-body-item booking-price">
            <span>Tổng tiền</span>
            <span class="detail-total-price">${pro.totalPrice}đ</span>
        </div>

        <a href="/assets/html/detail_product.html" class="btn-cancel-payment">Quay lại</a>
    </div>`   
    $('.modal-content.detail-content > .modal-content-inner').html(content);
    let order = JSON.parse(`[${sessionStorage.getItem('orders')}]`);
   
    if(!JSON.parse(sessionStorage.getItem('isIndexPage'))) {
        us = JSON.parse(sessionStorage.getItem('userCurrent'));
      
    
        for(let i = 0; i < order.length; i++) {
          if(order[i].usID == us.id && order[i].cart[0].name === pro.name) {
            $(".btn-payment").addClass('is-disabled');
            $(".btn-payment").text('Đã thanh toán');
            $(".btn-payment").off('click');
          }
        }
    }
})

//Payment
$('.btn-payment').click(function() {
    if($('.cardnumber').val() == '' || $('.cardpin').val() == '' 
    || $('.user-info-name').val() == '' || $('.user-info-email').val() == ''
    || $('.user-info-phoneNumber').val() == '') {
        alert('Nhập các thông tin bắt buộc');
    } else {
        let us;
        let isIndex = JSON.parse(sessionStorage.getItem('isIndexPage'));
        if(isIndex== true) {
            us = {
                id: '',
                img: '',
                fullName: '',
                dateOfBirth: '',    
                address: '',
                phoneNumber: '',    
                email: '',
                password: ''
            }
        } 
        if(isIndex== false) {
            us = JSON.parse(sessionStorage.getItem('userCurrent'));
            let usArr =JSON.parse(sessionStorage.getItem('users'));
    
            let id = $('.user-info-id').val();
            let name = $('.user-info-name').val();
            let email = $('.user-info-email').val();
            let dateOfBirth = $('.user-info-dateOfBirth').val();
            let address = $('.user-info-address').val();
            let phoneNumber = $('.user-info-phoneNumber').val();
    
            us.id = id;
            us.fullName = name;
            us.dateOfBirth = dateOfBirth;
            us.address = address;
            us.email = email;
            us.phoneNumber = phoneNumber;
    
            for(let i = 0; i< usArr.length; i++) {
                if(id == usArr[i].id) {
                    usArr[i].id = id;
                    usArr[i].fullName = name;
                    usArr[i].dateOfBirth = dateOfBirth;
                    usArr[i].address = address;
                    usArr[i].email = email;
                    usArr[i].phoneNumber = phoneNumber;
                }
            }
    
            sessionStorage.setItem('users', JSON.stringify(usArr));
            sessionStorage.setItem('userCurrent', JSON.stringify(us));

            var order = {
                "usID": us.id,
                "cart":
                [ 
                {
                    "img": pro.img,
                    "name": pro.name,
                    "address": pro.address,
                    "price": pro.price,
                    "time": pro.time,
                    "ckIn": pro.ckIn,
                    "ckOut": pro.ckOut,
                    "visitors": pro.visitors,
                    "price": pro.price,
                    "totalPrice": pro.totalPrice
                }
                ]
            }
            // {usID: ..., [{...}, {..}]}
            var currentProduct = sessionStorage.getItem('orders');
        
            var newOrders = '';
            if(currentProduct.length > 0) {
                newOrders = currentProduct + "," +  JSON.stringify(order);
            } else {
                newOrders = JSON.stringify(order);
            }
    
            sessionStorage.setItem('orders', newOrders);
        }
        $('.alert-success').css('transform', 'translateX(0px)')

        setTimeout(function() {
            $('.alert-success').css('transform', 'translateX(500px)')
        }, 3000)
    
        $('.close').click(function() {
            $('.alert-success').css('transform', 'translateX(500px)')
        })

        $(".btn-payment").addClass('is-disabled');
        $(".btn-payment").text('Đã thanh toán');
        $(".btn-payment").off('click');
    }
  })



$('.btn-cancel-payment').click(function() {
    let p = {
        img: pro.img,
        name: pro.name,
        address: pro.address,
        amount: pro.amount,
        price: pro.price,
        description: pro.description,
        type: pro.type
    }

    sessionStorage.setItem('product', JSON.stringify(p));
})