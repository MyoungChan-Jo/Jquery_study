$(document).ready(function(){
    //ex1
    //$("*").css("border","1px dotted #ff3366");
    $("li *").css({"font-size":"10px","border":"2px solid blue"});
    
    // .class selector
    $(".img1").css("border","3px solid #cc0066");
    $(".photo1").css("border-color","#66cccc");
    $(".photo2").css("padding","10px");
    
    //element selector
    //글자색, 글자크기, 배경색, 글자보통 같은 결과가 나오도록 구현해보기.
    $("h1")
        .css("color","#cc33cc")
        .css("font-size","15px")
        .css("background-color","#ffcc66")
        .css("font-weight","normal");
    
    $("h2").css({"color":"#cc33cc", "font-size":"15px", "background-color":"#ffcc66", "font-weight":"normal"});
    
    $("h3").css({color:"#cc33cc", fontSize:"15px", backgroundColor:"#ffcc66", fontWeight:"normal"});
    
    //ex2 id selector
    $("#ex2_2").css({backgroundColor:"#eac1ea", color:"#ff2626"});
    
    //selector1,selectorN
    $(".box1, .box2, #box3")
        .css({
            "border":"1px solid #666666",
            "width":"120px",
            "height":"100px",
            "float":"left",
            "margin":"10px",
            "text-align":"center",
            "line-height":"100px",
            "background-image":"url(images/test/img4.gif)"
    });
    
});