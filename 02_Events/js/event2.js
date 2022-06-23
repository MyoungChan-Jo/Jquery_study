$(document).ready(function(){
    //Mouse Events/Form Events
    //1 .click(): 클릭
    $(".evt1").click(function(){
        $("#event").css("backgroundColor","#ccffff");
    })
    
    //2 .dblclick(): 더블클릭
    $(".evt2").dblclick(function(){
        $("#event").css("borderColor","#990066").text("더블클릭");
    });
    
    //3 .mouseover(): 대상요소에 마우스 포인터를 올릴때(하위요소 포함)
    $(".evt3").mouseover(function(){
        $("#event").text("확인");
    });
    
    //3 .mouseout(): 대상요소에 마우스 포인터가 벗어날 때(하위요소 포함)
    $(".evt3").mouseout(function(){
        $("#event").text("취소!!");
    });

    //4 mouseover&mouseout
    $(".evt4").mouseover(function(){
        $("#event").css("width","150px").text("");
    }).mouseout(function(){
        $("#event").css("width","50px");
    });

    //5 .hover(): mouseover+mouseout
    /*
    $("selector").hover(function(){
            명령;       mouseover 명령
    },function(){
            명령;       mouseout 명령
    });
    */
    
    $(".evt5").hover(function(){
        $("#event").css("backgroundImage","url(images/img2.png)");
    },function(){
        $("#event").css("backgroundImage","");
    });
    
    //6 .mousedown(): 마우스를 누르고 있을 때
    // .mouseup(): 마우스에서 손을 뗐을 때
    $(".evt6").mousedown(function(){
        $("#event")
            .css("background-image","url(images/img4.png)")
            .css("background-repeat","no-repeat")
            .css("background-position","center")
            .text("");
    }).mouseup(function(){
        $("#event")
            .css("background-image","url(images/img5.png");
    });

    //7 .mouseenter(): 대상이 포함된 범위에 마우스 포인터가  들어오면 발생한다.(하위요소 포함 x)
    // .mouseleave(): 대상이 포함된 범위에서 마우스 포인터가 완전히 벗어나면 발생(하위요소 포함x)
    $(".evt7").mouseenter(function(){
        $("#event").css("background-image","url(images/img2.png)");
    }).mouseleave(function(){
        $("#event").css("background-image","url(images/img3.png)");
    });
    
    //8 .contextmenu(): 마우스 우클릭
    $(".evt8").contextmenu(function(){
        alert("contextmenu 테스트");
    });
    
    //9 Form Event: .focusin(): 입력창에 포커스가 들어왔을 때 커서,탭
    // Form Event: .focusout(): 입력창에 포커스가 없어졌을 때.
    $(".evt9").focusin(function(){
        $("#event").css("border-width","5px");
    }).focusout(function(){
        $("#event").css("border-width","");
    });
    /* 같은 풀이.
    $(".evt9").focusin(function(){});
    $(".evt9").focusout(function(){});
    */

});
