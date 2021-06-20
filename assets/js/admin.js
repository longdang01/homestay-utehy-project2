$(".sidebar-dropdown > a").click(function() {
    $(".sidebar-submenu").slideUp(200);
    if ( $(this).parent().hasClass("active")) {
        $(".sidebar-dropdown").removeClass("active");
        $(this).parent().removeClass("active");
    } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this).next(".sidebar-submenu").slideDown(200);
        $(this).parent().addClass("active");
    }
});

$("#close-sidebar").click(function() {
    $(".page-wrapper").removeClass("toggled");
});

if(sessionStorage.getItem('productsTmp') === null) {
  sessionStorage.setItem('productsTmp', JSON.stringify(JSON.parse(sessionStorage.products)));
}

var tableArr = JSON.parse(sessionStorage.productsTmp); 

var isEdit = false;

$('.btn-add-product').click(function() {
  sessionStorage.setItem('isEdit', JSON.stringify(isEdit));
})

//Search
$(".txt-search-table").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $(".tb-body tr").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
});

var data = '';
function buildTable(arr, quantity) {
    var table = $('.tb-body');
    data = ''
    table.html('');
    if(quantity > tableArr.length) {
      quantity = tableArr.length;
    }
    for(var i = 0;i < quantity; i++) {
        var row= '';
        row = `<tr>
        <td class="serial">1</td>
        <td class="product-id">${arr[i].id}</td>
        <td class="product-name">${arr[i].name}</td>
        <td class="product-address">${arr[i].address}</td>
        <td class="product-price">${arr[i].price}</td>
        <td class="product-type">${arr[i].type}</td>
        <td>
          <img class="product-img" src="${arr[i].img}" alt="">
        </td>
        <td class="admin-action">
          <a href="#" class="btn-edit"><i class="far fa-edit"></i></a>
          <a href="#" class="btn-trash"><i class="far fa-trash-alt"></i></a>
        </td>
        <td><input type="checkbox" id="product-checkbox" checked></td>
      </tr>`;
      data += row;
    }
    table.html(data);

    //Arr(checked = true)
    function filterPros(arr) {
      let prosFilter = arr.filter(function(e) {
        return renderChecked().indexOf(e.id) > -1;
      });
      sessionStorage.setItem('products', JSON.stringify(prosFilter))
    }

    function renderChecked() {
      var arrChecked = [];
      $('.tb-body tr').find('#product-checkbox').each(function() {
        if($(this).is(":checked")) {
          arrChecked.push($(this).parent().parent().find('.product-id').text());
        } 
      })
      return arrChecked;
    }

    $('.tb-body tr').find('#product-checkbox').change(function(e) {
      let checkedArr = JSON.parse(sessionStorage.getItem('arrChecked'));
      if(checkedArr.length > 0) {
        sessionStorage.setItem('arrChecked', '')
      }
      sessionStorage.setItem('arrChecked', JSON.stringify(renderChecked()))
      filterPros(tableArr);
    })
    
    if(sessionStorage.getItem('arrChecked') === null) {
      sessionStorage.setItem('arrChecked', JSON.stringify(renderChecked()))
    }
    
    $('.tb-body tr').find('.product-id').each(function(e) {
      if ($.inArray($(this).text(), JSON.parse(sessionStorage.getItem('arrChecked'))) == -1)
      {
        $(this).parent().find('#product-checkbox').prop('checked', false);
      } else {
          $(this).parent().find('#product-checkbox').prop('checked', true);
        }
      })
    
    //Serial
    var row = $(this).closest('tr');
    var serialValue = $(row).find('.serial').text();
    serialValue = parseInt(serialValue);
    $('.serial').each(function(idx, elem){
      $(elem).text(idx+1);
    }); 

    //Remove
    $('.btn-trash').click(function() {
      let wannaRemove = confirm('Bạn có chắc muốn xóa không');
      if(wannaRemove == true) {
        $(this).parent().parent().remove();
        for(let i = 0;i < tableArr.length; i++) {
          if($(this).parent().parent().find('.product-id').text() == tableArr[i].id) {
            tableArr.splice( $.inArray(tableArr[i], tableArr), 1);
            sessionStorage.setItem('productsTmp', JSON.stringify(tableArr));
          }
        }
        let arrTMP = JSON.parse(sessionStorage.getItem('products'));
        for(let i = 0;i < arrTMP.length; i++) {
          if($(this).parent().parent().find('.product-id').text() == arrTMP[i].id) {
            arrTMP.splice( $.inArray(arrTMP[i], arrTMP), 1);
            sessionStorage.setItem('products', JSON.stringify(arrTMP));
          }
        }
      }
    })

    //edit
    $('.btn-edit').click(function() {
      let id =  $(this).parent().parent().find('.product-id').text();
      let img = $(this).parent().parent().find('.product-img').attr('src');
      let name = $(this).parent().parent().find('.product-name').text();
      let address = $(this).parent().parent().find('.product-address').text();
      let amount = tableArr.find((e) => id == e.id).amount;
      let price = $(this).parent().parent().find('.product-price').text();
      let description = tableArr.find((e) => id == e.id).description;
      let type = $(this).parent().parent().find('.product-type').text();
     
      let tableItem = {
        id: id,
        img: img,
        name: name,
        address: address,
        amount: amount,
        price: price,
        description: description,
        type: type
      }
      isEdit = true;
      
      window.open("/assets/html/form_handling.html", "_self");
      sessionStorage.setItem('isEdit', JSON.stringify(isEdit));

      sessionStorage.setItem('tableItem', JSON.stringify(tableItem));
    })
}
buildTable(tableArr, tableArr.length);

//Show page
$('.page-show').change(function() {
  let page = $(".page-show :selected").text();

  buildTable(tableArr, page);
})

//Sort
$('.sort-table').change(function() {
  let sort = $(".sort-table :selected").val();
  if(sort == 'az') {
    tableArr = tableArr.sort((a, b) => a.name.localeCompare(b.name));
  } else if(sort == 'za') {
    tableArr = tableArr.sort((a, b) => b.name.localeCompare(a.name));
  } else if(sort == 'asc') {
    tableArr = tableArr.sort((a,b) => Number(a.price.replace(/[,|đ/đêm]/g,'')) > Number(b.price.replace(/[,|đ/đêm]/g,'')) ? 1 : -1)
  } else if(sort == 'desc') {
    tableArr = tableArr.sort((a,b) => Number(a.price.replace(/[,|đ/đêm]/g,'')) < Number(b.price.replace(/[,|đ/đêm]/g,'')) ? 1 : -1)
  }

  buildTable(tableArr, tableArr.length);
})