$(document).ready(function(){
    //parent>child
    $("#ex1 > p")
        .css("background-image","url(images/img3.gif)")
        .css("width","120px")
        .css("height","100px")
        .css("color","#ff3333")
        .text("뽀로로");
    
    //ancestor descendant
    $("#ex2 p").css({"border-bottom":"3px double #9900cc", "width":"120px", "test-align":"center"});
    
    //prev+next
    $(".ex3_1 + li").css("background-image","url(images/img4.gif)");
    
    //prev+siblings
    $(".ex4_2 ~ li")
        .css("border-style","dotted")
        .css("border-color","#ff0066");
});