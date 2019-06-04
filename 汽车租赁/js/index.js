$(function(){

    var li =$('.daohang>ul>li');

    li.eq(0).css('borderBottom','3px solid #2869d5');
    $.each(li,function(index,value){
        $(this).click(function(){
            $(this).css('borderBottom','3px solid #2869d5').siblings().css('border','none');
        });
    });

    

    var img=$('.lunbo>.img>img');
    var btn=$('.lunbo>.btn>span');
    var ling = 0;
    var yi =1;
    var num =img.length;
    for(var i=0;i<img.length;i++){
        img.eq(i).css('zIndex',num);
        num--;
    };
    var time;
    function autoPlay(){
        time=setInterval(function(){
            img.eq(ling).animate({opacity:0},1000);
            img.eq(yi).show().animate({opacity:1},1000);
            ling++;
            if(ling==img.length-1){
                yi=0;
            }else if(ling>img.length-1){
                ling=0;yi=1;
            }else{yi=ling+1;};
            btn.eq(ling).addClass('btnx').siblings().removeClass('btnx');
        },3000);
    };
    autoPlay();
    $.each(btn,function(index,value){
        $(this).click(function(){
            clearInterval(time);
            $(this).addClass('btnx').siblings().removeClass('btnx');
            ling=index;
            img.eq(ling).show().animate({opacity:1},1000).siblings()
                .animate({opacity:0},1000).hide();
                if(ling==img.length-1){
                    yi=0;
                }else if(ling>img.length-1){
                    ling=0;
                    yi=1;
                }else{
                    yi=ling+1;
                };
            autoPlay();
        });
    });


    var dl =$('#shouye>.png>.tu');
    var dt =$('#shouye>.png>.tu>dt>img');
    var dd =$('#shouye>.png>.tu>dd');
    $.each(dl,function(index,value){
        $(this).hover(function(){
            dt.eq(index).animate({
                width:'15%',
                height:'auto',
            });
            dd.eq(index).animate({fontSize:'20px'});
        },function(){
            dt.eq(index).animate({
                width:'11%',
                height:'auto',
            },100);
            dd.eq(index).animate({fontSize:'16px'},100);
        });
    });



    var chanpin =$('.chanpin>.zhanshi>ul>li');
    var che =$('.chanpin>.zhanshi>.he>.che');

    chanpin.eq(0).css('background','#2869d5');
    che.eq(0).css('display','block');
    $.each(chanpin,function(index,value){
        $(this).click(function(){
            $(this).css('background','#2869d5').siblings().css('background','rgb(134, 141, 141)');
            che.eq(index).css('display','block').siblings().css('display','none');
        });
    });



    var tp=$('.chanpin>.zhanshi>.he>.che>.tp');
    var tp_img=$('.chanpin>.zhanshi>.he>.che>.tp>a>img');

    $.each(tp,function(index,value){
        $(this).hover(function(){
            tp_img.eq(index).animate({
                width:'110%',
                height:'110%',
                left:'-100px',
                top:'-100px'
            });
        },function(){
            tp_img.eq(index).animate({
                width:'100%',
                height:'100%',
                left:'0px',
                top:'0px'
            },1);
        });
    });
    







    














});