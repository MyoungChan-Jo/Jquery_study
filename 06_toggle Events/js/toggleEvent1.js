$(document).ready(function(){
	/*
	toggle()이벤트:selector를 클릭할 때 마다 순차적으로 명령을 실행
	2개 이상의 명령이 들어가야 한다.
	$("selector").toggle(function(){
		처음 클릭할 때 명령;
	}, function(){
		두번째 클릭할 때 명령;
	})
	*/
	
	//ex1
	$(".num_btn").toggle(function(){
		$(".num_i").attr("src","images/number5.png");
	},function(){
		$(".num_i").attr("src","images/number4.png");
	},function(){
		$(".num_i").attr("src","images/number3.png");
	},function(){
		$(".num_i").attr("src","images/number3.png");
	});
	
	//ex2 event.stopPropagation 부모요소 이벤트를 정지하여 부모 이벤트가 처리되지 않도록 함.
	$(".box").click(function(){
		$(this).css({borderColor:"#cc0066"});
	});
	$(".evt").click(function(){
		$(this).css({borderStyle:"dashed"});
		//return false;
		event.stopPropagation();
	});
	
	//ex3 링크연결해제 preventDefault();
	$(".link a").click(function(event){
		event.preventDefault();
	})
	
	//ex4
	$("#ex4").mouseover(function(){
		$("#ex4 p").css({backgroundColor:"yellow"});
	}).mouseout(function(){
		$("#ex4 p").css({border:"3px solid blue"});
	});
	//ex5
	$("#ex5").mouseenter(function(){
		$("#ex5 p").css({backgroundColor:"yellow"});
	}).mouseleave(function(){
		$("#ex5 p").css({backgroundColor:"yellow"});
	});
})//end