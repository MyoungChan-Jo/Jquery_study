$(document).ready(function(){
//Content Filter

//$(selector:contains("문자열")).method() : 문자열을 포함하는 selector
    //$("#ex1 ul li:contains('웹') ").css("text-decoration","line-through");
    
//$(selector:empty).method() : 내용만 없는 selector(space bar(x), enter(x))
    /*
    $("#ex2 ul li:empty")
        .css("backgroundColor","#ff66cc")
        .css("color","#ffffff")
        .text("Jquery")
    */
//$(selector:parent).method() : 내용이 있거나, 내용이 없어도(space bar(o), enter(o) empty적용된 부분은 적용 안된다.)
    /*
    $("#ex2 ul li:parent")
        .css("text-decoration","underline").text("parent");
    */
    
//$(selector:has(특정태그)).method() : 특정태그를 포함한 selector 
    //$("#ex1 .list1:has(li)").css("border","1px solid #ff9999");
    //$("#ex1 .list1").css("border","1px solid #ff9999");
    //$("#ex1 .list1 li").css("border","1px solid #ff9999");
    //$("#ex3 div:not(:has(h2))").css("backgroundColor","#ffcc66");  h2포함한 div 제외하고 
    //$("#ex4 div:has(p,li)").css("border","1px solid red"); p또는li가 있는 div
//
    
});