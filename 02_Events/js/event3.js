$(document).ready(function(){
    // .mousemove(): 마우스(포인터)가 움직일 때
    // event.pageX: x좌표 event.pageY: y좌표
    $(document).mousemove(function(event){
        $(".evt1 span").text("x 좌표 : "+event.pageX+",y 좌표 : "+event.pageY);
    });
    
    $(".evt2").mousemove(function(event){
        $(".evt2x").text("좌표 : "+event.pageX);
        $(".evt2y").text("좌표 : "+event.pageY);
    });
    
    
    /* 마우스 포인터 같이 이동하기.
    $(document).mousemove(function(event){
        var xpos = event.pageX;
        var ypos = event.pageY;
        $(".evt3").css({left:xpos, top:ypos});
        
    });
    */
    
    //box $(this)
    $(".box").text("");
    $(".box").mouseover(function(){
        $(this).css("border-color","#ff0000");
    }).mouseout(function(){
        $(this).css("border-color","");
    })
    
    //menu
    $(".menu li a:first").css({textDecoration:"underline",color:"#ff0000"});
    $(".menu li a").click(function(){
        $(".menu li a").css({textDecoration:"",color:""});
        $(this).css({textDecoration:"underline",color:"#ff0000"});
        //순서 중요하다...
    });
    
    //wrap1
    //1. 오버한 이미지만 모서리 둥글게(hover 이벤트)
   $("#wrap1 p img").hover(function(){
       $(this).css("border-radius","30px");
   },function(){
       $(this).css("border-radius","");
   });
    
    //2. 확인 1 클릭하면 2번째 이미지 화면에서 숨기기(클릭이벤트)
   $(".btn1").click(function(){
       $(".photo2").css("display","none");
   });
    
    //3. 확인 2 클릭하면 1번째 이미지의 크기를 2배로 커지게(더블클릭이벤트)
    $(".btn2").dblclick(function(){
        $(".photo1").css({"width":"300px","height":"300px"});
        //$(".photo1").css({width:"300px",height:"300px"});
        //$(".photo1").css("width":"300px").css("height":"300px")
    });
    
    
    //wrap2
    //텍스트 숨김처리
    $(".txt1,.txt2,.txt3,.txt4").text("");
    
    //각각 txt1~txt4 마우스 오버할 때 이미지 변경(mouseover,mouseout)
    $(".txt1").mouseover(function(){
        $(this).css({backgroundImage:"url(images/bg4.jpg)"});
    });
    $(".txt2").mouseover(function(){
        $(this).css({backgroundImage:"url(images/bg3.jpg)"});
    });
    $(".txt3").mouseover(function(){
        $(this).css({backgroundImage:"url(images/bg2.jpg)"});
    });
    $(".txt4").mouseover(function(){
        $(this).css({backgroundImage:"url(images/bg1.jpg)"});
    });
    
    //각각 txt1~txt4 마우스 아웃할 때 원래이미지 변경
   $(".txt1").mouseout(function(){
        $(this).css({backgroundImage:""});
    });
    $(".txt2").mouseout(function(){
        $(this).css({backgroundImage:""});
    });
    $(".txt3").mouseout(function(){
        $(this).css({backgroundImage:""});
    });
    $(".txt4").mouseout(function(){
        $(this).css({backgroundImage:""});
    });
    
    
     //wrap1
    //1. 오버한 이미지만 모서리 둥글게(hover 이벤트)
   
    //2. 확인 1 클릭하면 2번째 이미지 화면에서 숨기기(클릭이벤트)
   
    
    //3. 확인 2 클릭하면 1번째 이미지의 크기를 2배로 커지게(더블클릭이벤트)
    
    
    
    //wrap2
    //텍스트 숨김처리
    
    
    //각각 txt1~txt4 마우스 오버할 때 이미지 변경(mouseover,mouseout)
    
    
    //각각 txt1~txt4 마우스 아웃할 때 원래이미지 변경
    
    
    
    
    
    
    
    
    
});//end