function initPagination(currentPage, pageSize, total) {
    currentPage = currentPage || 1;
    pageSize = pageSize || 30;
    total = total || 8123;

    var totalPages = total % pageSize == 0 ? total / pageSize : total / pageSize + 1;
    totalPages = Math.floor(totalPages);

    function updatePagination() {
        var currentPosition = (currentPage - 1) % 6;
        var startLiPage = currentPage - currentPosition;
        if (currentPage >= 1) {
            $('.pagination').empty();
            for (var i = 0; i < 6; i++) {
                var $li = $('<li class="page-item"><a class="page-link" href="javascript:void(0);">' + (startLiPage + 0) + '</a></li>');
                if (i == currentPosition) {
                    $li.addClass('active');
                }
                if (startLiPage > totalPages) {
                    break;
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
        if (currentPage >= totalPages) {
            $('.next').addClass("disabled");
        } else {
            $('.next').removeClass("disabled");
        }
        setEvents();
        $('#total_pages').text(totalPages);
        $('#skipPage').val(currentPage);
    }
    function getCurrentData() {
        var sort = $('.imd-selector').attr('value');       
        getTableData(null, {
            url: '/getMain_Data',
            type: 'POST',
            data: {
                act: 'Get_Main_List',
                TopNum: 30,
                page: currentPage
            }}, null, { sort: sort });
    }
    function setEvents() {
        $('.pagination').find('a').each(function() {
            var $this = $(this);
            $this.off();
            $this.click(function() {
                currentPage = $.trim($this.text());
                getCurrentData() ;
                updatePagination();
            });
        });
    }

    function next(event) {
        event.preventDefault();
        event.stopPropagation();
        if (currentPage < 8031) {
            currentPage++;
        }
        getCurrentData() ;
        updatePagination();
    }

    function previous(event) {
        event.preventDefault();
        event.stopPropagation();
        if (currentPage >=1) currentPage--;
       getCurrentData() ;
        updatePagination();
    }

    function skip(event) {
        event.preventDefault();
        event.stopPropagation();
        currentPage = Number($('#skipPage').val()) || 1;
        if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        getCurrentData();
        updatePagination();
    }

    updatePagination();
    $('.next a').on('click', next);
    $('.previous a').on('click', previous);
    $('#skip').on('click', skip);

    return {
        updatePagination: updatePagination,
        next: next,
        previous: previous,
        skip: skip
    };

}





$(function() {
    getTableData(null, {
        url: '/getMain_Data',
        type: 'POST',
        data: {
            act: 'Get_Main_List',
            TopNum: 30,
            page: 1
        }}, null, { pagination: true, sort: 'zhdf' });

    $('#query_btn').unbind("click").click(function() {
        var queryTxt = Number($('#query_txt').val());
        console.log(typeof queryTxt, queryTxt);
        if (queryTxt != queryTxt) {

        }else if (!!queryTxt == false) {
            $('.alert').fadeIn();
            var timeout = setTimeout(function() {
                $('.alert').fadeOut();
                clearTimeout(timeout);
            }, 2000);
            return;
        }
         var sort = $('.imd-selector').attr('value');
        getTableData(null, {
        url: '/getMain_Data',
        type: 'POST',
        data: {
            act: 'Get_Main_List',
            TopNum: 30,
            page: 1
        }}, null, {pagination: true,  query: queryTxt,sort: sort });


    });

    function dropMenuEvent(sort) {
        var str = sort || $('.imd-selector').attr('value');
        getTableData(null, {
        url: '/getMain_Data',
        type: 'POST',
        data: {
            act: 'Get_Main_List',
            TopNum: 30,
            page: 1
        }}, null, { sort: str,pagination: true });
    }

    initSelector(dropMenuEvent, '.imd-selector');


    var today = new Date();
    $('.time').empty().text(today.getFullYear() + ' - ' + (today.getMonth() + 1) + ' - ' + today.getDate());
});
