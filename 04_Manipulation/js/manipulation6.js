/*
	//ex1
	function ex1(){
		$(".ex1_i").first().appendTo("#ex1");
	}
	setInterval("ex1()",2000);

	//ex2
	function ex2(){
		$(".ex2_i").first().appendTo("#ex2");
	}
	setInterval("ex2()",2000);

	//ex3
	function ex3(){
		$(".ex3_i").first().appendTo("#ex3");
	}
	setInterval("ex3()",2000);

*/
//$(document).ready(function(){});하면 안먹음. 위의 방식은.

$(document).ready(function(){
	//ex1
	var ex1 = setInterval(function(){
		$(".ex1_i").first().appendTo("#ex1");
	},2000);
	
	//ex2
	var ex2 = setInterval(function(){
		$(".ex2_i").first().appendTo("#ex2");
	},2000);
	
	//ex3
	var ex3 = setInterval(function(){
		$(".ex3_i").first().appendTo("#ex3");
	},2000);
	
});
