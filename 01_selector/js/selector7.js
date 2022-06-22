$(document).ready(function(){
 /* <Attribute>*/
//1.[name]//
//> $(selector[name]).method() : name(속성) 이 있는 selector//
    //$("#txt p[class]").css({borderBottom:"2px dotted #cc0033"}); > js2,3,5
    //$("#link1 a[id][title]").css({borderBottom:"2px dotted #cc0033"}); > 확인1,2,3,4,
    //$("#txt p[id], #link1 a[id]").css({borderBottom:"2px dotted #cc0033"}); > js1,4,6 확인1,2,3,4

//2.[name="value"]//
//> $(selector[name="value"]).method() value와 일치하는 selector//
    //$("#link1 a[target='_blank']").css({borderBottom:"2px dotted #cc0033"}); > 확인1,2
    
//3.[name^="value"]//
//> $(selector[name^="value"]).method() value로 시작하는 selector, value와 일치하는 selector//
    //$("#link1 a[href^='http']").css({borderBottom:"2px dotted #cc0033"}); > 확인1,4
  
//4.[name$="value"]//
//> $(selector[name$="value"]).method() value로 끝나는 selector, value와 일치하는 selector//
    //$("#txt p[class$='css1']").css({borderBottom:"2px dotted #cc0033"}); >Js2,3,5
    
//5.[name*="value"]//
//> $(selector[name*="value"]).method() value를 포함하는 selector, value와 일치하는 selector//
    //$("#link1 a[target*='n']").css({borderBottom:"2px dotted #cc0033"}); > 확인1,2,4
    
//6.[name!="value"]//
//> $(selector[name!="value"]).method() value와 일치하지 않는 selector//
    //$("#gallery img[src!='images/img4.gif']").css({borderBottom:"2px dotted #cc0033"}); >뽀로로
    
//7.[name|="value"]//
//> $(selector[name|="value"]).method() value에 |이 있으면 value로 시작하는selector, value와 일치하는 selector//
    //$("#txt p[id|='html1']").css({borderBottom:"2px dotted #cc0033"}); >Js1,4
    
//8.[name~="value"]//
//> $(selector[name~="value"]).method() value에 공백이 있으면 value가 그 중 하나인 selector, value와 일치하는 selector//
    //$("#txt p[class~='css1']").css({borderBottom:"2px dotted #cc0033"}); >Js2,3,5
    
});

$(document).ready(function(){
    //1.
    //$("#wrap h4, #wrap p[id]").css({border:"1px solid red"});
    //풀이 >$("#wrap [id]").css({border:"1px solid red"}); 
    
    //2.
    //$("#wrap p[class]").css({border:"1px solid blue"});
     //풀이 >$("#wrap [class]).css({border:"1px solid red"});
    
    //3.
    //$("#wrap p[id!='attr6']").css({border:"1px solid green"});
    //$("#wrap h4[id!='attr6']").css({border:"1px solid green"});
    //풀이 >$("#wrap [id!='attr6']").css({border:"1px solid red"}); 
    
    //4.
    //$("#wrap [src*='4']").css({width:"50",height:"50"});
    //풀이 >$("#wrap img[src*='4']").css({width:"50",height:"50"});
    
    //5.
    //$("#wrap [class^='attr']").css({border:"1px solid red"});
    //풀이 >$("#wrap [class^='attr']").css({border:"1px solid red"}); 
    
    //6.
    //$("#wrap img[src$='gif']").css({width:"50",height:"50"});
   //풀이 >$("#wrap img[src$='gif']").css({width:"50",height:"50"});
    
});










