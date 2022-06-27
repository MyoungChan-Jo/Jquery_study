function ex1(){
	//ex1 마우스 위치에 따라 이미지 전환/비전환
	$(".ex1_i").first().appendTo("#ex1");
}
	$(document).ready(function(){
		var timer = setInterval("ex1()",1000);
		$("#ex1").hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval("ex1()",1000);
		});
		
	//ex2
	var i = setInterval(function(){
	var now1 = new Date();
	var hour1 = now1.getHours();
	var minute1 = now1.getMinutes();
	var second1 = now1.getSeconds();
		$("#ex2 span:eq(0)").text(hour1+"h ");
		$("#ex2 span:eq(1)").text(minute1+"m ");
		$("#ex2 span:eq(2)").text(second1+"s ");
		
	},1000);
		
	//ex3
	var j = setInterval(function(){
	var date1 = new Date(2020,07,22).getTime();
	var date2 = new Date().getTime();
	var now2 = date1 - date2;
	
	var day2=Math.ceil(now2/(1000*60*60*24))//일
	var hour2=Math.ceil((now2%(1000*60*60*24))/(1000*60*60));//시
	var minute2=Math.ceil((now2%(1000*60*60))/(1000*60));//분
	var second2=Math.ceil((now2%(1000*60))/1000);//초
	
	$("#ex3 span:eq(0)").text(day2+"d");
	$("#ex3 span:eq(1)").text(hour2+"h");
	$("#ex3 span:eq(2)").text(minute2+"m");
	$("#ex3 span:eq(3)").text(second2+"S");
		
	if(now2 < 0){
		clearInterval(j);
		$("#ex3 p").text("종료되었습니다.");
	}
	},1000);
		
		
});