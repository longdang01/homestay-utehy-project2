CKEDITOR.replace('product-description', {  language: 'de'});

function validateNumber(e) {
    const pattern = /^[0-9]$/;
    return pattern.test(e.key )
}

if(sessionStorage.getItem('txtHomeSearch') === null) {
    sessionStorage.setItem('txtHomeSearch', '');
}

var isNumber = true;
$('.info-amount, .info-price').keypress(function (e) {
    return validateNumber(e);
});

//Auto increment id
var maxID = function(arr) {
    let arrNumber = [];
    for(let i = 0;i < arr.length; i++) {
        arrNumber.push(Number(arr[i].id.replace(/[SP]/g, ''))); 
    }
    return Math.max.apply(Math, arrNumber);
}

//Set img
function readURL(input, e) {
    const imgView = document.querySelector(e);
    if(input.files && input.files[0]) {
        var reader = new FileReader(); 

        reader.onload = function(e) {
            imgView.setAttribute('src', e.target.result); 
        }
        reader.readAsDataURL(input.files[0]); 
    }
}

$('.info-img-file').change(function() {
    readURL(this, '#home-img')
})

$('.close').click(function() {
    $('.alert-fail').css('transform', 'translateX(500px)')
})

var tmp,item;

$('.btn-save').click(function() {
    var ckeditorData = CKEDITOR.instances["product-description"].document.$.body.innerHTML;
    var val_description = ckeditorData.replace(/[<p>|</p>]/g,'');

    if($('.txt-info').not('.info-id').val() === '' || isNumber == false || val_description == 'br') {
        $('.alert-fail').css('transform', 'translateX(0px)');
        setTimeout(function() {
            $('.alert-fail').css('transform', 'translateX(500px)')
        }, 3000)
    
        
        $('.txt-info').each(function() {
            if($(this).val() == '') {
                $(this).focus();
            }
        })
    } else {
        let id = $('.info-id').val();
        let img = $('#home-img').attr('src');
        let name = $('.info-name').val();
        let address = $('.info-address').val();
        let amount = $('.info-amount').val() + ' phòng ngủ';
        let price = Number($('.info-price').val()).toLocaleString() + 'đ/đêm';
        let description = val_description;
        let type = $(".info-type :selected").text();

        item = {
            id: id,
            img: img,
            name: name,
            address: address,
            amount: amount,
            price: price,
            description: description,
            type: type
        }
    }
    tmp = JSON.parse(sessionStorage.getItem('productsTmp'));
})

if(JSON.parse(sessionStorage.isEdit) == true) {
    $('.btn-add-save').css('display', 'none');
    $('.btn-edit-save').css('display', 'inline-block');
} else {
    $('.btn-add-save').css('display', 'inline-block');
    $('.btn-edit-save').css('display', 'none');
}

$('.btn-add-save').click(function() {
    // products.push(item);
        
    tmp.push(item)
    // sessionStorage.setItem('products', JSON.stringify(tmp))
    sessionStorage.setItem('productsTmp', JSON.stringify(tmp))
    window.location.reload();

    $('.alert-success').css('transform', 'translateX(0px)')
    
    setTimeout(function() {
        $('.alert-success').css('transform', 'translateX(500px)')
    }, 3000)
    
    $('.close').click(function() {
        $('.alert-success').css('transform', 'translateX(500px)')
    })
})

$('.btn-edit-save').click(function() {
    for(let i = 0;i < tmp.length; i++) {
        if(tmp[i].id == item.id) {
            tmp[i] = item;
        }
    }
    sessionStorage.setItem('products', JSON.stringify(tmp))
    sessionStorage.setItem('productsTmp', JSON.stringify(tmp))
    $('.alert-success').text('Bạn đã sửa thành công');
    $('.alert-success').css('transform', 'translateX(0px)')
    
    setTimeout(function() {
        $('.alert-success').css('transform', 'translateX(500px)')
    }, 3000)
    
    $('.close').click(function() {
        $('.alert-success').css('transform', 'translateX(500px)')
    })
})

window.addEventListener('DOMContentLoaded', function() {
    let tableItem = null, isEdit = null;
    try {
        tableItem = JSON.parse(sessionStorage.tableItem); 
    } catch (e) {
      tableItem = sessionStorage.tableItem;
    }

    try {
        isEdit = JSON.parse(sessionStorage.isEdit); 
    } catch (e) {
      isEdit = sessionStorage.isEdit;
    }

    if(isEdit == false) {
        $('.info-id').val('SP00' + Number(maxID(JSON.parse(sessionStorage.getItem('productsTmp'))) + 1));
    } else {
        $('.info-id').val(tableItem.id);
        $('.info-name').val(tableItem.name);
        $('.info-address').val(tableItem.address);
        $('#home-img').attr('src', tableItem.img);
        $('.info-amount').val(tableItem.amount.replace(/[phòng ngủ]/g, ''));
        $('.info-price').val(tableItem.price.replace(/[,|đ/đêm]/g, ''));
        $(".info-type :selected").text(tableItem.type);
        CKEDITOR.instances['product-description'].setData(tableItem.description)
    } 
})

