//Render
var pros = JSON.parse(sessionStorage.getItem('products'));

function renderProduct(arr) {
    var productInner = $('.product-inner');
    var data = '';
    productInner.html('');

    for(var i = 0; i < arr.length; i++) {
        var row = `<div class="room">
        <a href="javascript:void(0)" class="btn-heart"><i class="far fa-heart"></i></a>
        <a href="#" class="room-img-link">
            <img src="${arr[i].img}" alt="" class="room-img">
        </a>

        <div class="room-content">
            <span class="room-type">${arr[i].type}</span>
            <span>-</span>
            <span class="room-amount">${arr[i].amount}</span>
            <a href="#" class="room-name">${arr[i].name}</a>
            <p class="room-address">${arr[i].address}</p>
            <div class="room-booking">
                <span class="room-price">${arr[i].price}</span>
                <a href="#" class="btn-book">Đặt phòng</a>
            </div>
        </div>
        </div>`
        data += row;
    }
    productInner.html(data);

    //LoadDetail
    $('.btn-book, .room-name, .room-img-link').click(function() {
        loadDetailProduct(pros, this);
    })
}
renderProduct(pros);

// Add heart
$('.btn-heart').click(function() {
    $(this).toggleClass('heart');
})

//renderHomePage
var renderHomePage = function(arr) {
    var roomInner = $('.rooms-inner');
    var data = '';
    roomInner.html('');
    if(arr.length > 8) {
        arr.length = 8;
    }
    for(var i = 0; i < arr.length; i++) {
        var row = `<div class="room">
        <a href="javascript:void(0)" class="btn-heart"><i class="far fa-heart"></i></a>
        <a href="#" class="room-img-link">
            <img src="${arr[i].img}" alt="" class="room-img">
        </a>

        <div class="room-content">
            <span class="room-type">${arr[i].type}</span>
            <span>-</span>
            <span class="room-amount">${arr[i].amount}</span>
            <a href="#" class="room-name">${arr[i].name}</a>
            <p class="room-address">${arr[i].address}</p>
            <div class="room-booking">
                <span class="room-price">${arr[i].price}</span>
                <a href="#" class="btn-book">Đặt phòng</a>
            </div>
        </div>
        </div>`
        data += row;
    }
    roomInner.html(data);

    // Add heart
    $('.btn-heart').click(function() {
        $(this).toggleClass('heart');
    })
    
    //Loaddetail
    $('.btn-book, .room-name, .room-img-link').click(function() {
        loadDetailProduct(pros, this);
    })
}

function getCurrentProduct() {
    var currentArr = [];
    $('.product-inner .room').each(function() {
        let productImg = $(this).find('.room-img').attr('src');
        let productName = $(this).find('.room-name').text();
        let productAmount = $(this).find('.room-amount').text();
        let productType = $(this).find('.room-type').text();
        let productAddress = $(this).find('.room-address').text();
        let productPrice = $(this).find('.room-price').text();
        let productDescription = pros.find(el => el.name.toLowerCase() == productName.toLowerCase()).description;

        let product = {
            img: productImg,
            name: productName,
            address: productAddress,
            amount: productAmount,
            price: productPrice,
            description: productDescription,
            type: productType
        }
        currentArr.push(product);
    })
    return currentArr;
}

var lblType = '';
var checked = false;
$('input[type = radio].radTypeRoom').change(function() {
    if($(this).is(':checked')) {
        checked = true;
        lblType = $(this).siblings().text();
    }
})

function filterType() {
    let newProducts;
    
    newProducts = pros.filter(function(el) {
        return el.type.toLowerCase() == lblType.toLowerCase();        
    })
    if(newProducts.length > 0)  {
        renderProduct(newProducts);
    }else {
        $('.product-inner').html('Không có căn phòng phù hợp')
    }
}

function filterProduct(strPlace, lblType) {
    if(strPlace != '' && checked == true) {
        let newProducts;

        newProducts = pros.filter(function(el) {
            return el.type.toLowerCase().indexOf(lblType.toLowerCase()) > -1
            && el.address.toLowerCase().indexOf(strPlace.toLowerCase()) > -1
        })

        if(newProducts.length > 0)  {
            renderProduct(newProducts);
        }else {
            $('.product-inner').html('Không có căn phòng phù hợp')
        }
    }
}

$('.btn-apply-type').click(function() {
    if(checked) {
        if($('.txt-place').val() != '') {
            filterProduct($('.txt-place').val(), lblType);
        } else {
            filterType();
        }
        $('.btn-type').text(lblType);
    } else {
        renderProduct(pros);
    }
})

$('.btn-remove-type').click(function() {
    $('input[type = radio].radTypeRoom').prop('checked', false);
    lblType = '';
    checked = false;
    $('.btn-type').text('Loại phòng');
    $('.txt-place').val('');
    renderProduct(pros);
})

$('.btn-search').click(function() {
    var txtSearch = $('.txt-place').val().toLowerCase();
    if(txtSearch == '') {
        $('input[type = radio].radTypeRoom').prop('checked', false);
        $('.btn-type').text('Loại phòng');

        renderProduct(pros);
    } else {
        if(checked == false) {
            SearchProducts(txtSearch, pros);
        } else {
            filterProduct(txtSearch, lblType);
        }
    }
})

//Sort 
//asc
function SortAsc(arr) {
    let newArr = [];
    newArr = arr.sort((a,b)=> (Number(a.price.replace(/[,|/đêm]/g,'')) > Number(b.price.replace(/[,|/|đêm]/g,'')) ? 1 : -1))

    renderProduct(newArr);
}
//desc
function SortDesc(arr) {
    let newArr = [];
    newArr = arr.sort((a,b)=> (Number(a.price.replace(/[,|/đêm]/g,'')) < Number(b.price.replace(/[,|/|đêm]/g,'')) ? 1 : -1))

    renderProduct(newArr);
}

$('.btn-asc').click(function() {
    SortAsc(getCurrentProduct());
})

$('.btn-desc').click(function() {
    SortDesc(getCurrentProduct());
})

var productsHome = [];
function SearchProducts(str, arr) {
    let newProducts = arr.filter(function(el) {
        return el.address.toLowerCase().indexOf(str.toLowerCase()) > -1;        
    })
    productsHome = newProducts;

    if(newProducts.length > 0)  {
        renderProduct(newProducts);
    }else {
        $('.product-inner').html('Không có căn phòng phù hợp')
    }
}

$('.btn-loadmore').click(function() {
    sessionStorage.setItem('txtHomeSearch', JSON.stringify(''))
})

window.addEventListener('DOMContentLoaded', function() {
    try {
        txtHome = JSON.parse(sessionStorage.txtHomeSearch);
    } catch (e) {
        txtHome = sessionStorage.txtHomeSearch;
    }

    if(txtHome != '') {
        SearchProducts(txtHome, pros);
    } else {
        renderProduct(pros);
    }
})
//Bỏ sắp xếp(Có thể cần)
// $('.btn-cancel-sort').click(function() {
//     renderProduct(products);
// })
function loadDetailProduct(arr, el) {
    var productImg = $(el).parents('.room').find('.room-img').attr('src');
    var productName = $(el).parents('.room').find('.room-name').text();
    var productAmount = $(el).parents('.room').find('.room-amount').text();
    var productType = $(el).parents('.room').find('.room-type').text();
    var productAddress = $(el).parents('.room').find('.room-address').text();
    var productPrice = $(el).parents('.room').find('.room-price').text().replace(/[/|đêm]/g,'');
    var productDescription = arr.find(el => el.name.toLowerCase() == productName.toLowerCase()).description;
    
    window.open("/assets/html/detail_product.html", "_self");
    
    var product = {
        img: productImg,
        name: productName,
        address: productAddress,
        amount: productAmount,
        price: productPrice,
        description: productDescription,
        type: productType
    }
    console.log(product);
    sessionStorage.setItem('product', JSON.stringify(product));
}

$('.btn-book, .room-name, .room-img-link, .btn-view-detail').click(function() {
    loadDetailProduct(pros, this);
})
