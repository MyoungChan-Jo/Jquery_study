$(document).ready(function(){
    /*
    이벤트
    브라우저,폼,키보드,마우스 이벤트가 있다.
    Browser, Form, Keyboard, Mouse
    
    *이벤트 등록
    $("selector).eventname(function(){명령});
    
    keyboard event
    1. keydown(): 키보드 키가 눌려 있을 때 발생
    2. keypress(): 키보드 키가 눌려 있을 때 발생(경우에 따라 기능키는 적용이 안된다. F1~F12,alt,ctrl,shift,esc,한글 과 같은 경우)
    3. keyup(): 키보드 키가 눌려있다가 떼는 순간 발생
    */
    
    //키보드 키를 누를 때 이름 칸 배경색 변화 id로 해보기
    $("#name").keydown(function(event){
        //$("#name").css("backgroundColor","#cccc33");
        $(this).css("background-color","#cccc33");
        $(".key").text(event.which);
    });
        $("#name").keyup(function(){
            $(this).css("background-color","");
        });
    
    //비밀번호 selector type으로 해보기
    $("#box input:password").keypress(function(){
        $(this).css("background-image","url(images/img2.png)");
    });
    $("#box input:password").keyup(function(){
        $(this).css("background-image","");
    });
    
    //이메일
    var i=0;
    $("#email1").keydown(function(){
        //$(".txt1").text("테스트");
        $(".txt1").text(i+=1);    
    });
    
    var j=20;
    $("#email2").keypress(function(){
        $(".txt2").text(j-=1); //한글 인식 안됨.
    });
    
    
});
