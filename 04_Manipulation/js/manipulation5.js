$(document).ready(function(){
	/*ex1*/
	//<
	$(".btn1_1").click(function(){//맨처음 이미지를 .photo1안에서 맨뒤로 이동한다.
		$(".photo1 img:first").appendTo($(".photo1"));
	});
	//>
	$(".btn1_2").click(function(){//맨끝 이미지를 .photo1안에서 맨앞으로 이동한다.
		$(".photo1 img:last").prependTo($(".photo1"));
	});
	
	/*ex2*/
	//<
	$(".btn2_1").click(function(){//맨처음 이미지를 .photo1안에서 맨뒤로 이동한다.
		$(".photo2 img:first").appendTo($(".photo2"));
	});
	//>
	$(".btn2_2").click(function(){//맨끝 이미지를 .photo1안에서 맨앞으로 이동한다.
		$(".photo2 img:last").prependTo($(".photo2"));
	});
	
	/*ex3*/
	$(".btn3_1, .btn3_2").hide();
	$("#ex3").mouseover(function(){
		$(".btn3_1, .btn3_2").show();
	}).mouseout(function(){
		$(".btn3_1, .btn3_2").hide();
	});
	$(".btn3_1").click(function(){//맨처음 이미지를 .photo1안에서 맨뒤로 이동한다.
		$(".photo3 img:first").appendTo($(".photo3"));
	});
	//>
	$(".btn3_2").click(function(){//맨끝 이미지를 .photo1안에서 맨앞으로 이동한다.
		$(".photo3 img:last").prependTo($(".photo3"));
	});
	
	/*ex4*/
	$(".btn4_1").click(function(){//맨처음 이미지를 .photo1안에서 맨뒤로 이동한다.
		$(".gallery4 img:first").appendTo($(".gallery4"));
	});
	//>
	$(".btn4_2").click(function(){//맨끝 이미지를 .photo1안에서 맨앞으로 이동한다.
		$(".gallery4 img:last").prependTo($(".gallery4"));
	});

	
	/*ex5*/
	$(".btn5_1").click(function(){
		$(".photo5 .gallery5:first").appendTo($(".photo5"));
	});
	$(".btn5_2").click(function(){
		$(".photo5 .gallery5:last").prependTo($(".photo5"));
	});
});//end