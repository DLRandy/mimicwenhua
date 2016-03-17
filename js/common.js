
function getTableData(dest, reqObj, columnOptions, operations) {
	reqObj = reqObj || {
        url: '/getMain_Data',
        type: 'POST',
        data: {
            act: 'Get_Main_List',
            TopNum: 20,
            page: 1
        }};
    operations = operations || null;//normal pagination sort query

    $.ajax(reqObj).then(function (res) {
    	// res =>{RetMainList,msg,pag,pagesize,status,total}
    	 createTable(dest, res, columnOptions, operations);
    });
}

function cutoutData (response) {
	 var returnDataList = response.RetMainList || [];
	 if (returnDataList.length == 0 ) {
	 	return [] ;
	 }

	 var page = response.page || 1;
	 var pagesize = response.pagesize || 30;
	 var total = response.total||210;
	 pagesize = Number(pagesize);
	 if (page > (total/pagesize + 1)) {
	 	page = 1;
	 }
	 console.log(page, pagesize, total);
	 var start = (page - 1)* pagesize;
	 var end = page * pagesize ;

	 return returnDataList.slice(start, end);

}
function getQueryUserPage(response,queryUser) {
	var page = 1;
	var num = 1;
	var list = response.RetMainList;
	console.log(list);
	$(list).each(function (index, obj) {
		 if($.trim(obj['zjzh']) == $.trim(queryUser)){
		 	num = index + 1;
		 	return false;
		 } 
	});
	page = Math.floor(num / response.pagesize);
	console.log(num, page);
	if (num % response.pagesize == 0) {
		return page;
	} else {
		return page + 1;
	}

}
function createTable(selector, res, columnOptions,operations) {
	selector = selector || ".rate_sec table tbody";
	var returnDataList = res.RetMainList || [];
	$(selector).empty();
	var currentPage = res.page || 1;
	var pagesize = res.pagesize;

	if (operations && operations.sort) {
		returnDataList = returnDataList.sort(sortObjectsByParam(operations.sort));
		res.RetMainList = returnDataList;
		if (operations && operations.query) {
			res.page = getQueryUserPage(res, $.trim((operations.query+"")));
		}	
	};
	currentPage = res.page;
     // if(operations&&operations.pagination){
     	console.log(res, currentPage);
     	returnDataList = cutoutData(res);
     // }

	var $td = $('<td></td>');
	var $tr = $('<tr></tr>');
	$.each(returnDataList, function(index, obj) {
			var $2tr = $tr.clone();
		columnOptions = columnOptions || {
            'rank_num': 0,
            'dqqy': 2,
            'zjzh': 0,
            'zhdf': 2,
            'rsyl': 2,
            'ljjz': 2,
            'jzdf': 2,
            'lszdhc': 2,
            'hcldf': 2,
            'ljjlr': 2,
            'jlrdf': 2,
            'sl': 2,
            'ykb': 2,
            'fl': 5,
            'fxd': 2,
            'yk': '盈亏曲线'

        };

        $.each(columnOptions, function (key, value) {
			var $2td =$td.clone();
            if (key == 'yk') {
  				$2td.css('text-decoration','underline');
  				$2td.css('cursor','pointer');
  				$2td.css('color','#3890b6');
                $2td.text(value).appendTo($2tr);

            } else if (key=='rank_num') {
            	   		
                $2td.text( (currentPage -1 ) * pagesize+ index+1).appendTo($2tr);
            }else{
               $2td.text(Number(obj[key]).toFixed(value)).appendTo($2tr); 
            }		
		});

		if (operations && operations.query) {

			if($.trim(obj['zjzh']) == $.trim((operations.query+""))){
			 $2tr.addClass('query');
			}

		}


		$2tr.appendTo($(selector));
	});

	if (operations && operations.pagination) {
		initPagination(res.page/*currentPage*/, res.pagesize/*pageSize*/, res.total/*total*/);
	}

	profit_loss_chart();
};

function sortObjectsByParam(param) {
    return function(a, b) {
     return Number(a[param]).toFixed(2) - Number(b[param]).toFixed(2);  
    } 
}

function profit_loss_chart(tableSelector, tdSelector){
	tableSelector = tableSelector || ".rate_sec table tbody";
	tdSelector = tdSelector || "tr td:nth-child(16)";
	$(tableSelector).unbind("click").on("click", tdSelector, function (event) {
	var id = $.trim($(event.target).parent().find('td:nth-child(3)').text());
	console.log(id);
	event.preventDefault();
	event.stopPropagation();
	//get data then..
	getModalDialog();
	});

}


function getModalDialog(){
	$(".modal").removeClass("fade");
	$('input:checkbox').unbind("click").on('click', function () {
		var $checkbox = $(this);
		if ($checkbox.is(":checked")) {
			var checkboxs = 'input:checkbox[name="'+$checkbox.attr("name")+'"]';
			$(checkboxs).prop("checked", false);
			$(checkboxs).parent().parent().css('background','#fff');
			$checkbox.prop("checked", true);
			$checkbox.parent().parent().css('background','#68959f');		
		 }
	});
	$('input:checkbox:first').trigger("click");
	$('a[class=close]').click(function(){
		$(".modal").addClass("fade");
	});
}


function initSelector( dropMenuEvent, selectorTitle) {
  selectorTitle = selectorTitle || '.imd-selector';
  var $imdSelect = $('.imd-select');
  var $imdSelector = $imdSelect.find('.imd-selector');
  var $imdSelectList = $imdSelect.find('.imd-select-list');
  var $imdSelectListItem = $imdSelectList.children('li');
  
  
  // Hover
  $imdSelector.hover(function(){
    $(this).addClass('imd-focus');
  }, function() {
    $(this).removeClass('imd-focus');
  });
  
  // click to open menu list
  $(document).click(function(e){
    if(!$imdSelector.is(e.target) && $imdSelector.has(e.target).length === 0) {
      $imdSelectList.hide();
    } else {
      $imdSelectList.slideToggle('fast');
    }
  });
  
  // get menu list to selector
  $imdSelectListItem.each(function(){
    $(this).click(function(){
      console.log($(this).text());
      $(selectorTitle).attr('value',$(this).attr('value'));
     dropMenuEvent($(this).attr('value'));
     $imdSelectListItem.removeClass('selected');
      $(this).addClass('selected');
      $imdSelector.text($(this).text())
    });
  });
  
}




