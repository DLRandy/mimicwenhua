// var pageSize = 4;
// var currentPage = 1;
// var pagedResults = [];
// var totalResults = animals.length;
var currentPage = 0,
    pageSize=0,
     total=0;
function updateList() {
    console.log(currentPage, pageSize, total);
    var currentPosition = (currentPage-1) % 6;// 0 1 2 3 4 5  
    var startLiPage = currentPage - currentPosition;
           console.log('sdsds');
    
    if (currentPage >= 1) {
        //build list items
        console.log('sdsds');
        $('.pagination').empty();
        for (var i = 0; i < 6; i++) {
            var $li = $('<li class="page-item"><a class="page-link" href="javascript:void(0);">' + (startLiPage+0) + '</a></li>');
            if (i == currentPosition) {
                $li.addClass('active');
            }
            $('.pagination').append($li);
            startLiPage++;
        }
    }
    if (i <= 6) {
        $('.next').prop("disabled", true);
    }
    if (currentPage <= 1) {
        $('.previous').addClass("disabled");
    } else {
        $('.previous').removeClass("disabled");
    }
    if (currentPage >= total) {
        $('.next').addClass("disabled");
    } else {
        $('.next').removeClass("disabled");
    }


    $('.pagination').find('a').each(function () {
    console.log('22222');
    var $this = $(this);
    console.log($this);
    $this.off();
    $this.click(function () {
        currentPage = $this.text().trim();
        updateList();
    });
});

$('#query_btn').click(function () {

    var queryTxt = $('#query_txt').val() || 1203003437;
     alert(queryTxt);
getTableData4(queryTxt);
});

}

$('#skip').on('click', function (event) {
     event.preventDefault();
        event.stopPropagation();

   currentPage = Number($('#skipPage').val()) || 1;
    alert(currentPage);
   console.log(currentPage);
    updateList();
});

$('.next').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if (currentPage < 8031) {
            currentPage++;
        }
        updateList(currentPage);
    });

    $('.previous').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if (currentPage >= 1) currentPage--;
        updateList(currentPage);

        console.log(currentPage);
    });



function getTableData2() {
    $.ajax({
        url: '/getMain_Data',
        type: 'POST',
        data: {
            act: 'Get_Main_List',
            TopNum: 20,
            page: 1
        }
    }).then(function(data) {
        //createTable(null, data.RetMainList);
        currentPage =data.page ;
        pageSize= data.pagesize;
          total = data.total;
          console.log(data);
        updateList();
    });

};


function getTableData4(query) {
    alert(query);
    $.ajax({
        url: '/getMain_Data',
        type: 'POST',
        data: {
            act: 'Get_Main_List',
            TopNum: 20,
            page: 1        
        }
    }).then(function (data) {
        alert('ddddd');
           createTable(null, data.RetMainList,null,{query:query});
    });
      
}

function getTableData5(sort) {
    alert(sort);
    $.ajax({
        url: '/getMain_Data',
        type: 'POST',
        data: {
            act: 'Get_Main_List',
            TopNum: 20,
            page: 1        
        }
    }).then(function (data) {
        alert('ddddd');
           createTable(null, data.RetMainList,null,{sort:sort});
    });
      
}



$('#sort').change(function () {
    var str = $('#sort option:selected').val();
    getTableData5(str);
});
$(function() {
    getTableData2();

});
