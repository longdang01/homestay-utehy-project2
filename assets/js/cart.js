$(document).ready(function() {
    var dataOrders = JSON.parse(`[${sessionStorage.getItem('orders')}]`);
    let us = JSON.parse(sessionStorage.getItem('userCurrent'));
    var prosCart = JSON.parse(sessionStorage.getItem('products'));

    var data = [];
    var currentArrCart = function(arr) {
        for(let i = 0;i < arr.length; i++) {
            if(us.id == arr[i].usID) {
                data.push(arr[i].cart[0]);
            }
        }
    }
    currentArrCart(dataOrders);

    // console.log(data);
    console.log(dataOrders);
    for(let i = 0; i < data.length; i++) {
        $('.carts').prepend(`<div class="cart">
        <div class="cart-info">
            <img src="${data[i].img}" alt="" class="cart-img">
            <div>
                <div class="cart-name">${data[i].name}</div>
                <div class="cart-address">${data[i].address}</div>
                <div>
                    <span class="cart-price">${data[i].price}đ</span>
                    <span>/đêm</span>
                </div>
            </div>
            <div>
                <div>
                    <i class="far fa-calendar-alt"></i>
                    <span class="cart-time">${data[i].time}</span>
                    <span>đêm</span>
                    <span class="cart-date">
                        <span>${data[i].ckIn}</span>
                        <span>/</span>
                        <span>${data[i].ckOut}</span>
                    </span>
                </div>
        
                <div>
                    <i class="fas fa-user-friends"></i>
                    <span class="cart-visitors">${data[i].visitors}</span>
                    <span>Khách</span>
                </div>
            </div>
            
            <div>
                <h3>Tổng tiền</h3>
                <div>
                    <span class="cart-total">${data[i].totalPrice}đ</span>
                </div>
            </div>
        </div>
        <div class="cart-options">
            <a href="#" class="btn-cancel-booking">Hủy đặt phòng</a>
            <a href="#" class="btn-view-detail">Xem chi tiết</a>
        </div>
        </div> `);

        

        //Remove cart
        $('.btn-cancel-booking').click(function() {
            $('.modal-cancel-booking').css('display', 'grid');
            
            var cancelBooking = $(this);
            $('.btn-apply-cancel').click(function() {
                cancelBooking.parent().parent().remove();
                let us = JSON.parse(sessionStorage.getItem('userCurrent'));
                
                for (let i = 0;i < dataOrders.length; i++) {
                    if(us.id == dataOrders[i].usID && cancelBooking.parent().siblings().find('.cart-name').text().toLowerCase() == dataOrders[i].cart[0].name.toLowerCase()) {
                        dataOrders.splice( $.inArray(dataOrders[i], dataOrders), 1);
                    } 
                }
                // console.log(JSON.stringify(dataOrders).substring(1, JSON.stringify(dataOrders).length-1));
                sessionStorage.setItem('orders', JSON.stringify(dataOrders).substring(1, JSON.stringify(dataOrders).length-1));
                $(".cart-payment").load(" .cart-payment > *");
                $('.payment-total').text(renderTotalPrice(data));
                $('.modal-cancel-booking').css('display', 'none');
            })
        })

        //View
        $('.btn-view-detail').click(function() {
            for(let i = 0;i < prosCart.length; i++) {
                if(prosCart[i].name.toLowerCase() == $(this).parent().siblings().find('.cart-name').text().toLowerCase()) {
                    productImg = prosCart[i].img;
                    productName = prosCart[i].name;
                    productAmount = prosCart[i].amount;
                    productType = prosCart[i].type;
                    productAddress = prosCart[i].address;
                    productPrice = prosCart[i].price.replace(/[đ/đêm]/g,'');
                    productDescription = prosCart[i].description;

                    window.open("/assets/html/detail_product.html", "_self");

                    product = {
                        img: productImg,
                        name: productName,
                        address: productAddress,
                        amount: productAmount,
                        price: productPrice,
                        description: productDescription,
                        type: productType
                    }
                    sessionStorage.setItem('product', JSON.stringify(product));
                }
            }
        })

        //Render total price
        var renderTotalPrice = function(arr) {
            var totalPricePayment = 0;
            for(let i = 0; i < arr.length; i++) {
                totalPricePayment += Number(arr[i].totalPrice.replace(/[,]/g,''));
            }
            return totalPricePayment.toLocaleString() + 'đ';
        }

        $('.payment-total').text(renderTotalPrice(data));
    }
})

