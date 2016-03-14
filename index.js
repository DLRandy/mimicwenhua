
function starListData() {
    $.ajax({
        url: '/getMain_Data',
        type: 'POST',
        data: {
            "act": 'Get_Main_List',
            "TopNum": 3,
            "page": 1        
        }
    }).then(function (data) {
           starListTag(data.RetMainList);
    });
   
}

function starTag(index, star) {
	var template = $('#test li').prop('outerHTML');
	console.log(template);
    var rankings = ["冠军","亚军","季军"];
	$.each(star, function (key,value) {
		switch (key){
			case 'zjzh':
			template = template.replace('@',value);
			break;
			case 'ljjz':
			template = template.replace('@@', Number(value).toFixed(2));
			break;
			case 'fxd':
			template = template.replace('@@@', value);
			break;
			case 'zhdf':
			template = template.replace('@@@@', value);
			break;			
		};
	});
    template = template.replace('##', rankings[index]);
	console.log(template);
        return $(template);	
}
function starListTag(listData, parentNode) {
    $.each(listData, function(index, obj) {
    	parentNode = parentNode || '#stars';
      $(parentNode).append(starTag(index, obj));
    });
}


function getNews() {
$.ajax({
url: '/getMain_Data',
type: 'POST',
data: {
   act: 'Get_News_List',
            TopNum: 12,
            page: 1   
}
}).then(function (data) {
      getNewsTag(data.SqlNewList);
});      
}

function getNewsTag(data) {
    $.each(data, function(index, obj) {
        $('#news').append('<li><a href="javascript:void(0);">' + obj.addtime.split(' ')[0] + '&nbsp;' + obj.title + '</a></li>');
    });
}


function getTableData() {
    $.ajax({
        url: '/getMain_Data',
        type: 'POST',
        data: {
            act: 'Get_Main_List',
            TopNum: 20,
            page: 1        
        }
    }).then(function (data) {
           createTable(null, data.RetMainList);
    });
      
}

function sortObjectsByParam(param) {
    return function(a, b) {
     return Number(a[param]).toFixed(2) - Number(b[param]).toFixed(2);  
    } 
}


function createTable(selector, data, dataOptions,query) {
	selector = selector || ".rate_sec table tbody";
	data = data || tableData;
	var $td = $('<td></td>');
	var $tr = $('<tr></tr>');
	$(selector).empty();

	if (query && query.sort) {
		data = data.sort(sortObjectsByParam(query.sort));
	}
	$.each(data, function(index, obj) {
			var $2tr = $tr.clone();
		dataOptions = dataOptions || {
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

        $.each(dataOptions, function (key, value) {
			var $2td =$td.clone();
            if (key == 'yk') {
                $2td.text(value).appendTo($2tr);
            } else if (key=='rank_num') {
                $2td.text(index+1).appendTo($2tr);
            }else{
               $2td.text(Number(obj[key]).toFixed(value)).appendTo($2tr); 
            }		
		});

		if (query && query.query) {

			if(obj['zjzh'].trim() == query.query.trim()){
			 $2tr.addClass('query');
			}

		}
		$2tr.appendTo($(selector));
	});
};


function profit_loss(){
$(".rate_sec table tbody").on("click", "tr td:nth-child(16)", function (event) {
	var id = $(event.target).parent().find('td:nth-child(3)').text().trim();
	console.log(id);
	event.preventDefault();
	event.stopPropagation();
	//get data then..
	getModalDialog();
});

}


function getModalDialog(){
$(".modal").removeClass("fade");
initMenuOfModalDialog();
}

function initMenuOfModalDialog() {
	$('input:checkbox').on('click', function () {
		var $checkbox = $(this);
		if ($checkbox.is(":checked")) {
			var checkboxs = 'input:checkbox[name="'+$checkbox.attr("name")+'"]';
			$(checkboxs).prop("checked", false);
			$(checkboxs).parent().parent().css('background','#fff');
			$checkbox.prop("checked", true);
			$checkbox.parent().parent().css('background','#68959f');		
		 }//else{
		// 	$checkbox.prop("checked", false);
		// 	$checkbox.parent().parent().css('background','#fff');
		// }
	});
	$('input:checkbox:first').trigger("click");
	$('a[class=close]').click(function(){
		$(".modal").addClass("fade");
	});
}


$(function() {
    starListTag(starListData());
    getNews();
    getTableData();
    profit_loss();
    // getModalDialog();
});
