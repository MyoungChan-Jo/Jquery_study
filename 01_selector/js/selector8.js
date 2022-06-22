$(document).ready(function(){
    //**Child Filter
    //1. :first-child - 부모의 첫번째 자식요소
    //$(selector:first-child).method() 
    
    //2. :last-child  - 부모의 마지막번째 자식요소
    //$(selector:last-child).method()
    
    //3. :nth-child - 유형에 관계없이 부모의 n번째 자식인 모든 요소
    //$(selector:nth-child(n)).method() n번째
    //$(selector:nth-child(even)).method() 짝수번째
    //$(selector:nth-child(odd)).method() 홀수번째
    //$(selector:nth-child(숫자n)).method() 숫자의 배수
    
    //:first-child
    //$("#ex1 ul li:first").css({backgroundColor:"#cccc66"}); 1
    //$("#ex1 ul li:first-child").css({backgroundColor:"#cccc66"}); 1,6
    //$("#ex1 .list1 li:first-child").text("첫번째 li"); 1 > 첫번째li
    //$("#ex2 p:first-child").css("background-color","#cccc66");
    
    //:last-child
   //$("#ex1 ul li:last-child").css("font-size","50px");
    //$("#ex2 p:last-child").css("background-color","#cccc66"); 4,7
    
    //:nth-child()
    //$("#ex1 ul li:nth-child(4)").css("border","1px solid red"); 4,9
    //$("#ex1 ul li:nth-child(even)").css("text-decoration","line-through"); 2,4,7,9
    //$("#ex1 ul li:nth-child(odd)").css("color","#ff0000"); 1,3,5,6,8,10
    //$("#ex1 ul li:nth-child(2n)").css("background-color","#ff0000"); 2,4,7,9

});

$(document).ready(function(){
    //1.
    $("#web tr th:nth-child(odd)").css("color","#cc66ff");
    //2.
    $("#web tr th:nth-child(even)").css("color","#66cc66");
    //3.
    $("#web tr:nth-child(even)").css({backgroundColor:"#ff9999",color:"#990099"});
    //4.
    //$("#web tr:nth-child(2n+3)").css({backgroundColor:"#cc9933",color:"#ff0066"});
    $("#web tr:nth-child(odd)").css({backgroundColor:"#cc9933",color:"#ff0066"});
    $("#web tr:first-child").css({"background-color":"","color":""})
    
    
});