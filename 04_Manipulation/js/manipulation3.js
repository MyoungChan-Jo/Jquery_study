$(document).ready(function(){
	/*ex1*/
	//$("selector1").append("select2")  selector1 안에서 맨 뒤에 selector2를  추가
	$(".btn1").click(function(){//result1안에서 맨뒤에 이미지 추가.
		$("p.result1").append("<img src='images/btn_next.jpg'>");
	});
	//$("selector1").prepend("select2") selector1 안에서 맨 앞에 selector2를  추가
	$(".btn2").click(function(){//result1안에서 맨앞에 이미지 추가.
		$("p.result1").prepend("<img src='images/btn_prev.jpg'>");
	});
	//$("selector1").appendTo("select2") selector2 안에서 selector1를 맨뒤로  추가(이동)
	$(".btn3").click(function(){//result2안에서 .photo를 맨뒤로 이동.
		$("p.result2 .photo").appendTo("p.result2");
	});
	//$("selector1").prependTo("select2") selector2 안에서 selector1를 맨앞으로  추가(이동)
	$(".btn4").click(function(){//result2안에서 .photo를 맨앞로 이동.
		$("p.result2 .photo").prependTo("p.result2");
	});
	
	/*ex2*/
	$(".btn2_1").click(function(){
		$("ol").append("<li>a확인</li>")
	});
	$(".btn2_2").click(function(){
		$("ol").prepend("<li>p확인</li>")
	});
	
	/*ex3*/
	$("#r_photo").text("");
	$("#r_btn").click(function(){
		//$("#r_photo").append("<img src='images/bg1.jpg'>");
		var n = Math.ceil(Math.random()*5);//1~5
		//alert(n);//클릭할때마다 랜덤숫자 발생.
		$("#r_photo").append("<img src='images/bg"+n+".jpg'>");
	});
	
	/*ex4*/
	//$("selector").clone("") selector 복제
	$(".btn4_1").click(function(){//실행1
		$(".box4 img:first").clone().appendTo($(".box4"));
	});
	//$("selector").clone(true) selector 복제와 함께 생성된 이벤트까지 복제.
	$(".btn4_2").click(function(){//실행2
		$(".box4 img:first").clone(true).appendTo($(".box4"));
	});
	$(".box4 img").bind("click",function(){
		alert("clone(true) 테스트");
	});
	
});//end