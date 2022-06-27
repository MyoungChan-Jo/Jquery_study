$(document).ready(function(){
	// .html(): 선택한 요소안에 내용을 가져오거나 다른 내용으로 바꾸어 주는 메서드.
	$(".btn1").click(function(){//html1
		$(".box1").html("<p>변경</p>");
		$(".box1").css({border:"1px solid blue"});
		$(".box1 p").css({border:"1px solid orange"});
	});
	$(".btn2").click(function(){//html2 버튼2누르면 box1의 구조가 box2로 변경.
		$(".box1").html($(".box2").html());
	});
	$(".btn3").click(function(){//html3 버튼3누르면 box2의 구조가 box1로 변경
		var k = $(".box1").html();
		$(".box2").html(k);
	});
	
	// .text(): selector의 텍스트를 지정한 텍스트로 변경한다.
	$(".btn4").click(function(){// .txt2 텍스트 변경
		$(".txt2").text("img2").css({color:"#cc0033"})
	});
	$(".btn5").click(function(){// .txt5 텍스트를 .txt1 텍스트로 변경
		$(".txt5").text($(".txt1").text());
	});
	$(".btn6").click(function(){// .txt2 텍스트를 .txt3 텍스트로 변경
		var t_txt = $(".txt3").text();
		$(".txt2").text(t_txt);
	});
	
	/*
	문제
	main_navi(mouseover, on)
	마우스포인터가 있을 때 텍스트를 변경해라.
	아트 <-> ARTWORK
	웹 <-> WEB
	편집 <-> EDITORAL
	IT <-> PROGRAM
	인테리어,건축 <-> INTERIOR
	포인터 벗어날때 텍스트 원래대로
	*/
	
	/*
	$(".menu1").mouseover(function(){
		$(this).text("ARTWORK");
	});
	*/
	$(".menu1").on("mouseover",function(){
		$(this).text("ARTWORK");
	});
	
	$(".menu1").mouseout(function(){
		$(this).text("아트");
	});
	$(".menu2").mouseover(function(){
		$(this).text("WEB");
	});
	$(".menu2").mouseout(function(){
		$(this).text("웹");
	});
	$(".menu3").mouseover(function(){
		$(this).text("EDITORAL");
	});
	$(".menu3").mouseout(function(){
		$(this).text("편집");
	});
	$(".menu4").mouseover(function(){
		$(this).text("PROGRAM");
	});
	$(".menu4").mouseout(function(){
		$(this).text("IT");
	});
	$(".menu5").mouseover(function(){
		$(this).text("INTERIOR");
	});
	$(".menu5").mouseout(function(){
		$(this).text("인테리어/건축");
	});
	
	
	/* 
	선생님이 알려준 방식
	$(".menu1").on("mouseover",function(){
		$(this).text("ARTWORK");
	}).mouseout(function(){
		$(this).text("아트");
	});
	*/
	
	// .remove(): selector 삭제. (selector와 자식요소 포함)
	$(".btn7").bind("click",function(){//remove1 img1_wrap에서 2번째 이미지 !삭제!
		$(".img_wrap img:eq(1)").remove();
	});
	  
	/* 밑에 detach 때문에 임시 생략.
	$(".btn9").click(function(){//detach .img_wrap2 img에서 class가 img2를 포함하고 있는대상 삭제
		$(".img_wrap2 img").remove("[class *='img2']")
	});
	*/
	
	
	// .detach(): selector 삭제. (selector와 자식요소 포함)(데이터와 이벤트는 유지.)
	$(".btn9").click(function(){//detach .img_wrap2 img에서 class가 img2를 포함하고 있는대상 삭제
		$(".img_wrap2 img").detach("[class *='img2']")
	});
	
	// .empty(): selector 삭제. (자식요소만 제거한다.)
	$(".btn10").click(function(){//remove 하위요소까지 전부 삭제.
		$(".text_wrap2").remove();
	});
	$(".btn11").click(function(){//detach 하위요소까지 전부 삭제. Data 는 남음.
		$(".text_wrap2").detach();
	});
	$(".btn12").click(function(){//empty div 하위요소는 삭제 div자체는 삭제가 안된다.
		$(".text_wrap2").empty();
	});
	
	
	
	
	
	
});//end