$(document).ready(function(){
 
//(selector:animated).method()
//(selector:eq(indexN)).method() : index: 0부터 시작

//(selector:eq(indexN)).method() : index: 0부터 시작
    
    //$("#ex1 p:eq(1)").css("border","1px solid #ff6666");
    
    //$("#ex2  .list1 li:eq(3)").css("border","1px solid #ff6666");
    
    //$("#ex2 ul li:eq(0)").css("color","#ff0099");
    
    //$("#ex2 ul li:eq(5)").text("6번쩨 li 입니다.");
    
//(selector:gt(indexN)).method() : index번호보다 큰 selector 전체를 찾는다.
    
    //$("#ex2 ul li:gt(4)").css("backgroundColor","#ff9966");
    
//(selector:lt(indexN)).method() : index번호보다 작은 selector 전체를 찾는다.
    
    //$("#ex2 ul li:lt(3)").css({"fontSize":"50px", "color":"#ff3333"});
    
//(selector:first).method() : 첫번째 selector
    //$("#ex2 ul li:first").css("background-color","#ff9966"); // or eq(0)
//(selector:last).method() : 마지막 selector
   // $("#ex2 ul li:last").css("background-color","#ff9966");
        //$("#ex2 ul li:first, #ex2 ul li:last").css({"color":"#cc0033", "fontStlye":"italic", "fontSize":"40px"});
    
//(selector:even).method() : 짝수번째 selector(index0부터시작)시각적으로 홀
    //$("#ex2 ul li:even").css("backgroundColor","#ff9966");
//(selector:odd).method() : 홀수번째 selector(index0부터시작)시각적으로 짝
    //$("#ex2 ul li:odd").css("backgroundColor","red");
    
//(selector:not(조건)).method()
// 첫번째 li를 제외한 li 배경색, 글자색
    //$("#ex2 ul li:not(:first)").css({backgroundColor:"#d8d8ea2", color:"#ea1eea"});
    
//(selector :header).method() : h1~h6 selector
//(selector *:header).method() : h1~h6 selector
    //$("#ex1 :header").css({textDecoration:"underline"});
    //$("section *:header").text("header 테스트").css({color:"#6666ff"});

//:root  : html 전체영역
    //$(":root").css("border","1px solid red");

//:lang
    //$("#con3 p:lang(en)").css("color","red");
    //$("#con3 p:lang(ja)").css("backgroundColor","#ff9933");
    
//gallery 문제
//1> 마지막번째 li 화면 숨기기.  display:none
    //1 indexN
    //$("#gallery ol li:eq(9)").css({"display":"none"});
    //2 last
    //$("#gallery ol li:last").css({"display":"none"});
    
//2> 3번을 제외한 li 모두 숨기기
    //1 lt gt
    /*
    $("#gallery ol li:lt(2)").css({"display":"none"});
    $("#gallery ol li:gt(2)").css({"display":"none"});
    */
    //2 :not
    //$("#gallery ol li:not(:eq(2))").css({"display":"none"});
    
//3> (2,4,6,8,10)번만 제외한 li 모두 숨기기
    //1 not
    //$("#gallery ol li:not(:odd)").css({display:"none"});
    //even
    //$("#gallery ol li:even").css({display:"none"});
    
//4> (1,2,3,4)번 li 숨기기
    //$("#gallery ol li:lt(4)").css({display:"none"});
    
//5> (7,8,9,10)번 li 숨기기
    //$("#gallery ol li:gt(5)").css({display:"none"});
});











