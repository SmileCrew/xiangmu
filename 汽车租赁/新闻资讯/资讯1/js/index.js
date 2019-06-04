$(function(){

    var li =$('.daohang>ul>li');

    li.eq(4).css('borderBottom','3px solid #2869d5');

    $.each(li,function(index,value){
        $(this).click(function(){
            $(this).css('borderBottom','3px solid #2869d5').siblings().css('border','none');
        });
    });

    



});