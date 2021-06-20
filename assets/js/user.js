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

$('.avt-img-file').change(function() {
    readURL(this, '#avt-img')
})

window.addEventListener('DOMContentLoaded', function() {
    let us;
    if(!JSON.parse(sessionStorage.getItem('isIndexPage'))) {
        us = JSON.parse(sessionStorage.getItem('userCurrent'));

        $('#avt-img').attr('src', us.img);
        $('.user-info-id').val(us.id);
        $('.user-info-name').val(us.fullName);
        $('.user-info-dateOfBirth').val(us.dateOfBirth);
        $('.user-info-address').val(us.address);
        $('.user-info-email').val(us.email);
        $('.user-info-phoneNumber').val(us.phoneNumber);
    }
})

$('.btn-save-user').click(function() {
    let id = $('.user-info-id').val();
    let img = $('#avt-img').attr('src');
    let name = $('.user-info-name').val();
    let dateOfBirth = $('.user-info-dateOfBirth').val();
    let address= $('.user-info-address').val();
    let email= $('.user-info-email').val();
    let phoneNumber = $('.user-info-phoneNumber').val();

    let us, usArr;
    if(!JSON.parse(sessionStorage.getItem('isIndexPage'))) {
        us = JSON.parse(sessionStorage.getItem('userCurrent'));
        usArr =JSON.parse(sessionStorage.getItem('users'));

        for(let i = 0; i< usArr.length; i++) {
            if(id == usArr[i].id) {
                usArr[i].id = id;
                usArr[i].img = img;
                usArr[i].fullName = name;
                usArr[i].dateOfBirth = dateOfBirth;
                usArr[i].address = address;
                usArr[i].email = email;
                usArr[i].phoneNumber = phoneNumber;

            }
        }

        us.id = id;
        us.img = img;
        us.fullName = name;
        us.dateOfBirth = dateOfBirth;
        us.address = address;
        us.email = email;
        us.phoneNumber = phoneNumber;

        sessionStorage.setItem('users', JSON.stringify(usArr));
        sessionStorage.setItem('userCurrent', JSON.stringify(us));

        window.location.reload();
        $('.alert-success').text('Lưu thông tin thành công');
        $('.alert-success').css('transform', 'translateX(0px)')

        setTimeout(function() {
        $('.alert-success').css('transform', 'translateX(500px)')
        }, 3000)

        $('.close').click(function() {
        $('.alert-success').css('transform', 'translateX(500px)')
        })
    }
})