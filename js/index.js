function getStarListData() {
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
        return $(template);	
}
function starListTag(listData, parentNode) {
    $.each(listData, function(index, obj) {
    	parentNode = parentNode || '#stars';
      $(parentNode).append(starTag(index, obj));
    });
}









function getNewsData() {
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
        $('#news').append('<li><a href="javascript:void(0);">' + obj.addtime.split(' ')[0] + '&nbsp;' + obj.title.substring(0, 18) + '</a></li>');
    });
}

$(function () {
	getTableData(null,null,null,{pagination: false});
	getStarListData();
	getNewsData();

});

