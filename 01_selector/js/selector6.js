$(document).ready(function(){
    //hidden: $(selector:hidden).method() 숨겨진요소 selector display:none; type="hidden" 0으로 설정된 너비와 높이에 작동하지 않는다. visivility : hidden은 작동하지 않는다.
    
    //visible $(selector:visible).mtehod() 화면에 보이는 모든 selector
    
    //**연관method > EFFECTS(효과)영역
    //1. show $(selector).show(진행시간) 진행시간동안 selector 화면에 보이기 / 진행시간: 밀리초 1000 은 1초. normal, fast slow. > n=400 f=200 s=600 / .show(2000) > 2초 .show("fast") > 200 / visibility:hidden 에는 작동 안한다.
    
    //2.hide $(selector).hide(진행시간) 진행시간동안 selector 화면에 숨기기. 진행시간은 show와 같다.
    
    
    //:hidden 숨겨진 p 요소를 3초간 보이게 하기.
    //$("#ex1 p:hidden").show(3000); HTML5
    //$(".none1").show(3000);
    //$(".none2").show(3000); > 안됨. 그래서 visibility 쓰지 말라는 거임.
    
    //:visible 화면에 보이는 p 요소를 2초동안 숨기기.
    //$("#ex1 p:visible").hide(2000); 
    
    //setTimeout("실행할 함수",대기시간) : 대기시간 후 1회 실행 setIntervla("실행할 함수",대기시간) 대기시간 간격으로 반복 실행
    
    
});

    //ex2
    //3초 후 show1()을 한번만 실행하기.
    /*
    function show1(){
        $(".none_img:hidden").show(4000); //4초 후 느리게 나오기
        $("#photo img:first").hide(3000); //첫번째 이미지 숨기기
        $("#photo img:first").show("fast"); //첫번째 이미지 다시 나오게
        $("#photo img:eq(2)").hide(5000); //세번째 이미지
        $("#photo img:visible").hide(5000); //보이는 이미지 전부 숨기기
    }
    */
    //3초 후 show1()을 한번만 실행하기.
    //setTimeout("show1()",3000);

    //setTimeout 만을 이용하여 이미지가 한줄씩 나오게. 1줄 = 좌 > 우 / 2줄= 역순 (1초후에.)
    function show2(){
        $("#photo1 .img1_1:hidden").show(1000);
        $("#photo1 .img1_2:hidden").show(3000);
        $("#photo1 .img1_3:hidden").show(5000);
        $("#photo1 .img1_4:hidden").show(7000);
    }
    setTimeout("show2()",2000);

    function show3(){
        $("#photo2 .img1_4:hidden").show(1000); 
        $("#photo2 .img1_3:hidden").show(3000);
        $("#photo2 .img1_2:hidden").show(5000);
        $("#photo2 .img1_1:hidden").show(6000);
    }
    setTimeout("show3()",4000);

