$(document).ready(function(){
	//main1
	// .first()
	//$("#main1 p").first().css("background-color","#cccccc");
	//$("#main1 p:first").css("background-color","#cccccc");
	
	//.last()
	//$("#main1 p").last().css("background-color","#ffcc33");
	//$("#main1 p:last").css("background-color","#ffcc33");
	
	//.eq() 인덱스 번호 들어가는거.
	//$("#main1 p").eq(2).css("background-color","#ffcc33");
	
	//.filter() selector에서 특정기준(조건)과 일치하는 요소. not()과 반대.
	//$("#main1 div").filter(".middle2").text("middle2적용").css("color","red");
	
	// .not() selector에서 특정기준(조건)과 일치하지 않는 요소.
		//1.div 중에서 sub1을 제외한 모든 div 숨기기.
		//$("#main1 div").not("#sub1").hide();
		//2.div 중에서 middle1을 제외한 모든 div숨기기
		//$("#main1 div").not(".middle1").hide();
		//3.p요소만 제외하고 모든 div 숨기기 p1234
		//$("#main1 div").not("#main1 div p").hide();
		//4.첫번째p요소만 제외하고 모든 p 숨기기 미들2p
		//$("#main1 p").not("#main1 p:first").hide();
		//5.2번째 p 요소만 제외하고 모든 p 숨기기 p1
		//$("#main1 p").not("#main1 p:eq(1)").hide()
	
	// .slice(start) start+1번째부터 end까지. end는 생략가능(무한.)
	//$("#slice1 p").slice(1,5).css({backgroundColor:"#ff99ff"});
	//$("#slice1 p").slice(2).css({borderWidth:"5px",borderColor:"#cc0033"});
	
	// .find(조건) 조건에 맞는 노드를 찾기.(하위상관없이 적용된다.)
	//$("#main2").find("p").css({backgroundColor:"#ff99cc"});
	
	// .children(지정) 지정한요소의 직접적인 자식노드를 찾기.
	//$("#main2").children("p").css({backgroundColor:"#ff99cc"});
	
	// .closest(지정) 지정한 요소의 가장 가까운 조상노드(부모)찾기.
	//$("p.txt2").closest("div").css({backgroundColor:"#ff9900"});
	
	// .prev():selector에서 이전노드 하나만(형제노드만 적용됨.)
	//$("p.txt3").prev().css({backgroundColor:"#ff9900"});
	//$("p.part3").prev().css({backgroundColor:"#ff9900"});
	
	//.prevAll():selector에서 이전노드 전체(형제노드만 적용됨.)
	//p.txt3앞에 있는 모든 형제 요소.
	//$("p.txt3").prevAll().css({backgroundColor:"#ff9900"});
	
	// .next(): selector에서 다음노드 하나만(형제노드만 적용됨) 뒤 하나만
	//$("p.part3").next().css({backgroundColor:"#ff9900"});
	
	// .nextAll(): selector에서 다음노드 전체(형제노드만 적용됨) 뒤에 전체
	//$("p.part3").nextAll().css({backgroundColor:"#ff9900"});
	
	// .siblings(): selector는 제외하고 나머지 형제노드만 적용된다.
	//$("p.part3").siblings().css({backgroundColor:"#ff9900"});
	
	// .nextUntil(): selector와 요소사이의 모든 형제요소(selector,요소는 적용에서 제외한다.) 2< x <5
	//$("#main4 h2").nextUntil("#main4 h5").css({color:"#cc0033",border:"2px solid #cc0033"});
	
	// .parent(): selector의 직접적인 부모요소
	//$("#main4 span").parent().css({color:"#cc0033",border:"2px solid #cc0033"});
	
	// .parents(): selector의 부모노드(html까지.)
	//$("#main5 span").parent().css({color:"#cc0033",border:"2px solid #cc0033"});
	//$("#main5 span").parents().css({color:"#cc0033",border:"2px solid #cc0033"});
	//$("#main5 span").parents("ul").css({color:"#cc0033",border:"2px solid #cc0033"});
	//$("#main5 span").parents("div").css({color:"#cc0033",border:"2px solid #cc0033"});
	
	// .parentsUntil(): selector와 요소 사이의 부모요소(요소)
	//$("#main5 span").parentsUntil("div").css({color:"#cc0033",border:"2px solid #cc0033"});
	
	// .add():  새로운 selector나 요소를 추가.
	//버튼을 클릭할 때
	$(".btn1").click(function(){//확인1
		$("#main6 div").css({backgroundColor:"#ff9933"});
	});
	$(".btn2").click(function(){//확인2
		$("main6 div").add("#main6 span").css({backgroundColor:"#ff9933"});
	});
	$(".btn3").click(function(){//확인3
		$("main6 div").add("#main6 span").add("#main6 p").css({backgroundColor:"#ff9933"});
	});
});//end