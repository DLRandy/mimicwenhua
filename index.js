function starListData() {
    var list = [{
        id: 13123121,
        netValue: 123,
        rate: 1.22,
        score: 65,
        ranking: 1
    }, {
        id: 13123122,
        netValue: 123,
        rate: 1.22,
        score: 65,
        ranking: 2
    }, {
        id: 13123123,
        netValue: 123,
        rate: 1.22,
        score: 65,
        ranking: 3
    }];

    return list;
}

function starTag(star) {
	var template = $('#test li').prop('outerHTML');
	console.log(template);
	$.each(star, function (key,value) {
		switch (key){
			case 'id':
			template = template.replace('@',value);
			break;
			case 'ranking':
			if (value == 1) {
				value="冠军";
			}else if (value == 2) {
				value="亚军";
			} else if (value == 3) {
				value="季军";
			}
			template = template.replace('##', value);
			break;
			case 'netValue':
			template = template.replace('@@', value);
			break;
			case 'rate':
			template = template.replace('@@@', value);
			break;
			case 'score':
			template = template.replace('@@@@', value);
			break;			
		};
	});

	console.log(template);
        return $(template);	
}
function starListTag(listData, parentNode) {
    $.each(listData, function(index, obj) {
    	parentNode = parentNode || '#stars';
      $(parentNode).append(starTag(obj));
    });
}


var news = [{
        time: '2015-4-2 ',
        content: '仿真外盘模拟大赛圆满结束',
        url: '#'
    }, {
        time: '2015-4-1 ',
        content: '三名选手顺势交易连续盈利，最后一战竞争激烈',
        url: '#'
    }, {
        time: '2015-3-31',
        content: '领跑选手巩固优势，谁是最后的冠军明日见分晓',
        url: '#'
    }, {
        time: '2015-3-30',
        content: '最后的冲刺，1203003486选手多品种交易齐获利强势追赶领跑者',
        url: '#'
    }, {
        time: '2015-3-27',
        content: '大赛临近尾声竞争愈发激烈，选手稳中有盈',
        url: '#'
    }, {
        time: '2015-3-26',
        content: '原油显超强任性，领跑选手顺势交易连续盈利',
        url: '#'
    }, {
        time: '2015-3-25',
        content: 'COMEX铜助力1203005006领跑排行榜',
        url: '#'
    }, {
        time: '2015-3-24',
        content: '商品期货继续上扬，盈利选手占大半',
        url: '#'
    }, {
        time: '2015-3-23',
        content: '商品期货涨得很任性，选手借势做强参赛账户',
        url: '#'
    }, {
        time: '2015-3-20',
        content: '连续交易保障下，选手更青睐持仓隔夜',
        url: '#'
    }, {
        time: '2015-3-19',
        content: '美联储公告刺激非美货币和大宗商品齐反弹，选手昨日收益普高',
        url: '#'
    }, {
        time: '2015-3-18',
        content: '美联储又将发声，排行榜前三位选手集',
        url: '#'
    }

];

function getNewsTag(data) {
    $.each(data, function(index, obj) {
        $('#news').append('<li><a href="' + obj.url + '">' + obj.time + '&nbsp;' + obj.content + '</a></li>');
    });
}

var tableData = [{
    ranking: 1,
    day_interest: 21897033.00,
    id: 1203005006,
    overall_scope: 98.16,
    daily_return: 0.00,
    total_net: 21.90,
    net_score: 100.00,
    lg_withdrawal: 8485025.00,
    back_rate: 87.76,
    net_profit: 20897033.00,
    net_profit_score: 100.0,
    win_rateP: 57.5,
    profit_loss_rate: 2,
    fee_rate: 0.2247,
    risk_degree: 0.0,
    profit_loss: '盈亏曲线'
}, {
    ranking: 2,
    day_interest: 15831722.50,
    id: 1203003881,
    overall_scope: 74.50,
    daily_return: 9.47,
    total_net: 15.83,
    net_score: 72.30,
    lg_withdrawal: 1956794.50,
    back_rate: 88.26,
    net_profit: 14831722.50,
    net_profit_score: 70.98,
    win_rateP: 70.85,
    profit_loss_rate: 0.89,
    fee_rate: 0.01073,
    risk_degree: 0.52,
    profit_loss: '盈亏曲线'
}, {
    ranking: 3,
    day_interest: 15426055.90,
    id: 1203003486,
    overall_scope: 72.86,
    daily_return: 2.77,
    total_net: 15.43,
    net_score: 70.45,
    lg_withdrawal: 3659875.72,
    back_rate: 87.91,
    net_profit: 14426055.90,
    net_profit_score: 69.03,
    win_rateP: 64.97,
    profit_loss_rate: 0.63,
    fee_rate: 0.30945,
    risk_degree: 0.00,
    profit_loss: '盈亏曲线'
}, {
    ranking: 4,
    day_interest: 14861720.50,
    id: 1203003521,
    overall_scope: 70.61,
    daily_return: 27.48,
    total_net: 14.86,
    net_score: 67.87,
    lg_withdrawal: 20269400.0,
    back_rate: 87.7,
    net_profit: 13861720.5,
    net_profit_score: 66.3,
    win_rateP: 87.7,
    profit_loss_rate: 0.6,
    fee_rate: 0.1466,
    risk_degree: 0.8,
    profit_loss: '盈亏曲线'
}, {
    ranking: 5,
    day_interest: 9102567.30,
    id: 1203002411,
    overall_scope: 8.10,
    daily_return: 1.27,
    total_net: 9.10,
    net_score: 1.57,
    lg_withdrawal: 201771.50,
    back_rate: 7.89,
    net_profit: 102567.30,
    net_profit_score: 48,
    win_rateP: 0.11,
    profit_loss_rate: 63,
    fee_rate: 12341,
    risk_degree: 0.94,
    profit_loss: '盈亏曲线'
}, {
    ranking: 6,
    day_interest: 8578472.56,
    id: 1203004890,
    overall_scope: 6.04,
    daily_return: 63,
    total_net: 39,
    net_score: 63,
    lg_withdrawal: 5081287,
    back_rate: 75,
    net_profit: 78472.56,
    net_profit_score: 27,
    win_rateP: 0.6,
    profit_loss_rate: 0.2,
    fee_rate: 0.9,
    risk_degree: 2,
    profit_loss: '盈亏曲线'
}, {
    ranking: 7,
    day_interest: 7359413.50,
    id: 1203003894,
    overall_scope: 1.28,
    daily_return: 7,
    total_net: 33,
    net_score: 37,
    lg_withdrawal: 15390.87,
    back_rate: 63,
    net_profit: 5941330,
    net_profit_score: 43,
    win_rateP: 79,
    profit_loss_rate: 1,
    fee_rate: 1923,
    risk_degree: 0,
    profit_loss: '盈亏曲线'
}, {
    ranking: 8,
    day_interest: 7346010.63,
    id: 1203003102,
    overall_scope: 1.23,
    daily_return: 2.85,
    total_net: 7.35,
    net_score: 3.55,
    lg_withdrawal: 24358.20,
    back_rate: 7.96,
    net_profit: 346010.63,
    net_profit_score: 47,
    win_rateP: 8,
    profit_loss_rate: 59,
    fee_rate: 18490,
    risk_degree: 00,
    profit_loss: '盈亏曲线'
}, {
    ranking: 9,
    day_interest: 5882475.50,
    id: 1203003876,
    overall_scope: 5.52,
    daily_return: 0,
    total_net: 26,
    net_score: 67,
    lg_withdrawal: 79816.00,
    back_rate: 2,
    net_profit: 82475.50,
    net_profit_score: 36,
    win_rateP: 0.8,
    profit_loss_rate: 2,
    fee_rate: 4968,
    risk_degree: 0,
    profit_loss: '盈亏曲线'
}, {
    ranking: 10,
    day_interest: 5849374.55,
    id: 1203004764,
    overall_scope: 35.50,
    daily_return: 0.00,
    total_net: 5.85,
    net_score: 6.71,
    lg_withdrawal: 182245.20,
    back_rate: 8.82,
    net_profit: 849374.55,
    net_profit_score: 21,
    win_rateP: .55 ,
    profit_loss_rate: 92,
    fee_rate: 03975,
    risk_degree: 00,
    profit_loss: '盈亏曲线'
}, {
    ranking: 11,
    day_interest: 5188871.00,
    id: 1203003437,
    overall_scope: 32.79,
    daily_return: 8.76,
    total_net: 5.19,
    net_score: 3.70,
    lg_withdrawal: 299360.00,
    back_rate: 7.92,
    net_profit: 188871.00,
    net_profit_score: 05,
    win_rateP: 60,
    profit_loss_rate: 72,
    fee_rate: 03733,
    risk_degree: 34,
    profit_loss: '盈亏曲线'
}, {
    ranking: 12,
    day_interest: 4807563.60,
    id: 1203005201,
    overall_scope: 31.27,
    daily_return: 23.35,
    total_net: 4.81,
    net_score: 21.96,
    lg_withdrawal: 9089442.40,
    back_rate: 87.74,
    net_profit: 3807563.60,
    net_profit_score: 8.22,
    win_rateP: 8.67,
    profit_loss_rate: 69,
    fee_rate: .06388,
    risk_degree: .62,
    profit_loss: '盈亏曲线'
}, {
    ranking: 13,
    day_interest: 4504128.50,
    id: 1203006654,
    overall_scope: 30.31,
    daily_return: -6.76,
    total_net: 4.50,
    net_score: 20.57,
    lg_withdrawal: 970000.00,
    back_rate: 9.30,
    net_profit: 504128.50,
    net_profit_score: 77,
    win_rateP: .82,
    profit_loss_rate: 97,
    fee_rate: 01763,
    risk_degree: 88,
    profit_loss: '盈亏曲线'
} ,{
    ranking: 14,
        day_interest: 4328102.35,
        id: 1203005584,
        overall_scope: 29.64,
        daily_return: 0.00,
        total_net: 4.33,
        net_score: 9.77,
        lg_withdrawal: 31851.00,
        back_rate: .39,
        net_profit: 28102.35,
        net_profit_score: 93,
        win_rateP: 0.8,
        profit_loss_rate: 9,
        fee_rate: 2982,
        risk_degree: 0,
        profit_loss: '盈亏曲线'
}, {
    ranking: 15,
    day_interest: 4255632.50,
    id: 1203002463,
    overall_scope: 29.12,
    daily_return: -17.7,
    total_net: 4.26,
    net_score: 19.43,
    lg_withdrawal: 4787065.50,
    back_rate: 87.86,
    net_profit: 3255632.50,
    net_profit_score: 15.58,
    win_rateP: 52.35,
    profit_loss_rate: 0.57,
    fee_rate: 0.20273,
    risk_degree: 0.89,
    profit_loss: '盈亏曲线'
}];
function createTable(selector, data) {
	selector = selector || ".rate_sec table tbody";
	data = data || tableData;
	var $td = $('<td></td>');
	var $tr = $('<tr></tr>');
	$.each(data, function(index, obj) {
			var $2tr = $tr.clone();
		$.each(obj, function (index, key) {
			var $2td =$td.clone();
			console.log(key,$2td.text(key),$2tr);
			$2td.text(key).appendTo($2tr);
			
		});
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
		}else{
			$checkbox.prop("checked", false);
			$checkbox.parent().parent().css('background','#fff');
		}
	});
	$('input:checkbox:first').trigger("click");
	$('a[class=close]').click(function(){
		$(".modal").addClass("fade");
	});
}


$(function() {
    starListTag(starListData());
    getNewsTag(news);
    createTable();
    profit_loss();
    // getModalDialog();
});
