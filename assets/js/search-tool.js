// Date
document.querySelector('.btn-date').addEventListener('click', function() {
    document.querySelector('.date-inner').classList.toggle('show-block');
})

window.addEventListener("click", function(e) {
  if(!e.target.classList.contains('show-date')) {
    document.querySelector('.date-inner').classList.remove('show-block');
  } 
});

// Apply date
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec"
];

document.getElementById('today').valueAsDate = new Date();

document.querySelector('.btn-apply-date').addEventListener('click', function() {
  var checkIn = new Date(document.querySelector('.checkinday').value);
  var checkOut = new Date(document.querySelector('.checkoutday').value);
  checkIn_month = checkIn.getMonth();
  checkIn_day = checkIn.getDate();
  
  checkOut_month = checkOut.getMonth();
  checkOut_day = checkOut.getDate();
  if(document.querySelector('.checkoutday').value === '') {
    document.querySelector('.txt-date').innerText = `${monthNames[checkIn_month]} ${checkIn_day}-${checkIn_day + 1}`;
  } else if(checkIn_month > checkOut_month || ((checkIn_month === checkOut_month) && checkIn_day > checkOut_day)) {
    document.querySelector('.txt-date').innerText = `${monthNames[checkIn_month]} ${checkIn_day}-${checkIn_day + 1}`;
  } else if(checkIn_month === checkOut_month) {
    document.querySelector('.txt-date').innerText = `${monthNames[checkIn_month]} ${checkIn_day}-${checkOut_day}`;
  } else {
    document.querySelector('.txt-date').innerText = `${monthNames[checkIn_month]} ${checkIn_day}-${monthNames[checkOut_month]} ${checkOut_day}`;
  }
//   document.querySelector('.visitor-inner').classList.add('show-block');
})

// Remove date
document.querySelector('.btn-remove-date').addEventListener('click', function() {
  document.querySelector('.checkoutday').value = '';
  document.querySelector('.txt-date').innerText = 'Ngày';
})

// Visitor
document.querySelector('.btn-user').addEventListener('click', function() {
  document.querySelector('.visitor-inner').classList.toggle('show-block');
})

window.addEventListener("click", function(e) {
  if(!e.target.classList.contains('show-visitor')) {
    document.querySelector('.visitor-inner').classList.remove('show-block');
  } 
});

//Plus
document.querySelectorAll('.btn-plus').forEach(function(element) {
  element.addEventListener('click', function () {
    if(element.previousElementSibling.value < 100) {
      element.previousElementSibling.previousElementSibling.classList.remove('is-disabled');
      element.previousElementSibling.value = Number(element.previousElementSibling.value) + 1;
      //Adult
      if(!element.classList.contains('adult')) {
        document.querySelector('.adult').previousElementSibling.previousElementSibling.classList.remove('is-disabled');
        if(document.querySelector('.adult').previousElementSibling.value < 1) {
          document.querySelector('.adult').previousElementSibling.value = Number(document.querySelector('.adult').previousElementSibling.value) + 1;
        }
      }
    }
  })
})

//Minus
document.querySelectorAll('.btn-minus').forEach(function(element) {
  element.addEventListener('click', function () {
    if(element.nextElementSibling.value > 0) {
      element.nextElementSibling.value = Number(element.nextElementSibling.value) - 1;
      if(element.nextElementSibling.value == 0) {
        element.classList.add('is-disabled');
      }
    } 
  })
})

var totalVisitor;
// Apply visitor
document.querySelector('.btn-apply-visitor').addEventListener('click', function () {
  totalVisitor = 0;
  document.querySelectorAll('.txt-visitor').forEach(function(e) {
    totalVisitor+=Number(e.value);
  })
  if(totalVisitor != 0) {
    document.querySelector('.lbl-visitor').innerText = totalVisitor + ' khách';
  } else {
    document.querySelector('.lbl-visitor').innerText = 'Khách';
  }
})

// Remove visitor
document.querySelector('.btn-remove-visitor').addEventListener('click', function () {
  document.querySelectorAll('.txt-visitor').forEach(function(e) {
    e.previousElementSibling.classList.add('is-disabled');
    e.value = 0;
  })
  document.querySelector('.lbl-visitor').innerText = 'Khách';
})

// Add heart
document.querySelectorAll('.btn-heart').forEach(function(e) {
  e.addEventListener('click', function() {
    e.classList.toggle('heart');
  })
})