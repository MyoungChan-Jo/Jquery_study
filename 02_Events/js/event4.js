$(document).ready(function(){
	// 이벤트 등록(단독)
	
	//.evt1 click 이벤트 등록
	$(".evt1").click(function(){
		alert(".evt1 이벤트");
	})
	
	//.evt1 이벤트 제거
	//$(".evt1").unbind();
	
	// .evt2, .evt3 이벤트 등록
	function event1(){
		alert("Hello!");
	}
	$(".evt2").click(event1);
	$(".evt3").contextmenu(event1);//우클릭
	
	// .evt2 이벤트 제거
	//$(".evt2").off();
	
	// .evt3 이벤트 등록
	function event2(){
		alert("Jquery!");
	}
	$(".evt3").bind("mouseover",event2);
	
	// .evt4 이벤트 등록
	$(".evt4").bind("dblclick mouseout", function(){
		$(this).text("Hi!!!!!");
	})
	
	// .evt4 dblclick이벤트 삭제
	//$(".evt4").unbind("dblclick");
	
	// .evt4 모든 이벤트 삭제
	//$(".evt4").unbind();
	
	// .evt5 이벤트 등록
	$(".evt5").on("click mouseout", function(){
		alert("on 테스트");
	})
	
	// .evt5 click이벤트 삭제
	//$(".evt5").off("click");
	
	// .evt5 모든 이벤트 삭제
	//$(".evt5").unbind();
	
	
});//end