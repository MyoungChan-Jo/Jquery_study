$(document).ready(function(){
	
	// .before(): selector 앞에 태그(요소) 삽입(바로앞)
	$(".btn1_1").click(function(){ //before1
		$("p.txt1").before("<img src='images/bg7.jpg' width='50' height='50'>");
	});
	$(".btn1_2").click(function(){ //before2
		$("p.txt1").before("<img src='images/bg6.jpg' width='50' height='50' class='photo'>");
		$(".photo").css({display:"block"});
	});
	
	// .after(): selector 뒤에 태그(요소) 삽입(바로 뒤)
	$(".btn1_3").click(function(){ //before3
		$("p.txt2").after("<h4>Hellow</h4>");
	});
	$(".btn1_4").click(function(){ //before4
		$("p.txt2").after("<h4 class='txt'>Jquery</h4>");
		$(".txt").css({display:"inline-block"});
	});
	
	// .insert[B]efore(): selector를 태그(요소) 앞으로 이동
	$(".btn1_5").click(function(){ //before5 photo1_2를 photo1_1앞으로 이동.
		$(".photo1_2").insertBefore(".photo1_1");
	});
	$(".btn1_6").click(function(){ //before6 photo1_3를 photo1_4뒤로 이동.
		$(".photo1_3").insertAfter(".photo1_4");
	});
	
	
	/*
	1.문제 only Jquery
	mouseover , bind
	1. 이미지 위에 마우스 포인터가 있을 때 '이미지 설명' 표시
	2. 이미지 위에 마우스 포인터가 없을 때 '이미지 설명' 비표시
	*/
	
	$(".photo_i").bind("mouseover",function(){
		$(this).after("<span class='txt'>이미지설명</span>").css({cursor:"pointer"});
		$(".txt").css({display:"block",color:"#990000",fontWeight:"bold",textAlign:"center"})
	});
	$(".photo_i").bind("mouseout",function(){
		$(".txt").remove();
	});
	
	/*
	2.문제 only Jquery
	mouseover , bind
	1. 마우스가 올라가면 텍스트를 가운데로 뜨도록 '이미지 설명' 표시
	*/
	
	$(".photo2").css({position:"relative",width:"188px",height:"198px" })
	$(".photo2_i").on("mouseover",function(){
		$(this).after("<span class='txt4'>이미지 설명</span>").css({border:"5px solid green",cursor:"pointer"});
		
		$(".txt4").css({textAlign:"center", color:"#ffffff", fontWeight:"bold",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",display:"block"});
	});
	$(".photo2_i").on("mouseout",function(){
		$(this).css({border:"", width:"",heigjt:""})
		$(".txt4").remove();
	});
	
	
	/*샘이 알려준 내용
	$(".photo2").css({position:"relative",width:"188px",height:"198px"});
	$(".photo2_i").bind("mouseover",function(){
		$(this)
			.after("<span class='txt4'>이미지설명</span>")
			.css({cursor:"pointer",border:"5px solid green",width:"178px",height:"188px"});
    $(".txt4").css({display:"block",color:"#ffffff",textAlign:"center",fontWeight:"bold",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"});
	}).mouseout(function(){
		$(this).css({border:"",width:"",hieght:""});
		$(".txt4").remove();
	});
	*/
	
	// .insert[A]fter(): selector를 태그(요소) 뒤로 이동
	
	
	// .wrap(): selector를 지정한 태그(요소)로 묶어줌(각각)
	$(".btn2_1").click(function(){//wrap
		$(".photo2_1, .photo2_2").wrap("<p class='gallery1'></p>");
		$(".gallery1").css({border:"3px dotted blue"});
	});
	// .wrap[A]ll(): selector를 지정한 태그(요소)로 묶어줌(한꺼번에 같이)
	$(".btn2_2").click(function(){//wrapAll
		$(".photo2_3, .photo2_4").wrapAll("<p class='gallery2'></p>");
		$(".gallery2").css({border:"3px dotted red"});
	});
	// .wrap[I]nner(): selector를 지정한 태그(요소)로 묶어줌(안에서)
	$(".btn2_3").click(function(){//wrapInner
		$(".ex2_box").wrapInner("<p></p>");
		$(".ex2_box").css({backgroundColor:"#ff99cc"});
		$(".ex2_box p").css({border:"3px dotted blue",margin:"10px;"});
	});
	// .replace[W]ith(): selector를 지정한 태그(요소)로 변경
	$(".btn2_4").click(function(){//replaceWith
		//$(".photo2_5").replaceWith("<img src='images/bg7.jpg'>");
		
		/*적용 안됨. 새로운 컨텐츠로 바뀌기 때문.
		$(".photo2_6").replaceWith("<p>변경</p>");
		$(".photo2_6").css({border:"1px solid red"});
		*/
		/*
		$(".photo2_6").replaceWith("<p class='photo2_6a'>변경</p>");
		$(".photo2_6a").css({border:"1px solid red"});
		*/
		$(".ex2_box").replaceWith("<p class='ex2_boxa'>변경</p>");
		$(".ex2_boxa").css({border:"1px solid red"});
	});
	
	// .unwrap(): selector의 부모요소를 삭제시키고 해당 selector는 그대로 유지시킨다.
	$(".photo2_7").click(function(){
		$(this).unwrap();
	});
	
});