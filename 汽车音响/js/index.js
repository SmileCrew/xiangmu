$(function(){

    var sou=$('.nav>.biao>.img');
    var cha=$('.nav>.biao>.cha');
    var ul=$('.nav>ul');
    var biao=$('.nav>.biao');
    sou.click(function(){
        biao.animate({right:'5px'},500);
        ul.hide(500);
    })
    cha.click(function(){
        biao.animate({right:'-725px'},500);
        ul.show(500);
    })



    var img=$('.lunbo>.img>img');
    var num=img.length;
    for(var i=0;i<img.length;i++){
        img.eq(i).css('zIndex',num);
        num--;
    }
    var btn=$('.lunbo>.btn>p');
    var ling=0;
    var yi=1;
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
            img.eq(ling).show().animate({opacity:1},1000)
            .siblings().animate({opacity:0},1000).hide();
            if(ling==img.length-1){
                yi=0;
            }else if(ling>img.length-1){
                ling=0;yi=1;
            }else{yi=ling+1;};
            autoPlay();
        });
    });

    var cpt=$('.chanpin>.cpt');
    var cptt=$('.chanpin>.cpt>img');
    var name =$('.chanpin>.cpt>.name');
    var fangda=$('.chanpin>.cpt>.fangda');
    var xiangqing=$('.chanpin>.cpt>.xiangqing');

    $.each(cpt,function(index,value){
        $(this).hover(function(){
            name.eq(index).animate({bottom:0},300);
            fangda.eq(index).animate({top:150},200);
            xiangqing.eq(index).animate({top:150},400);
            cptt.eq(index).animate({opacity:0.5},400);
        },function(){
            name.eq(index).animate({bottom:'-80px'},200);
            fangda.eq(index).animate({top:'-85px'},200);
            xiangqing.eq(index).animate({top:'-85px'},400);
            cptt.eq(index).animate({opacity:1},200);
        });
    });
   

    var rong=$('.fuwu>.nei>.rong');
    var btn_left=$('.fuwu>.left');
    var btn_right=$('.fuwu>.right');
    var width=$('.fuwu>.nei>.rong').width();

    rong.eq(0).css('left','0px');
    rong.eq(1).css('left',width+'px');
    rong.eq(2).css('left',width*2+'px');
    rong.eq(3).css('left',width*3+'px');
    rong.eq(4).css('left',width*4+'px');
    rong.eq(5).css('left',width*5+'px');
    
    function autoPla(){
        setInterval(function(){
            if(ling==rong.length-1){
                yi=0;
            }else if(ling>rong.length-1){
                ling=0;
                yi=1;
            }else{
                yi=ling+1;
            }
            rong.eq(ling).css('zIndex',2)
                        .css('left','0px')
                        .animate({
                                left:-width+'px'
                            },1000);
            rong.eq(yi).css('zIndex',1)
                      .css('left',width+'px')
                      .animate({
                          left:'0px'
                      },1000);
                      ling++;
        },7000);
    };
    // autoPla();



 
 

























    var li= $('.xinwen>.zixun>ul>li');
    var yin=$('.xinwen>.zixun>.he>.yin');

    li.eq(0).css({
        color:'#000',
        borderBottom:'2px solid #000',
    });
    yin.eq(0).css('display','block');
    $.each(li,function(index,value){
        $(this).click(function(){
            $(this).css({
                color:'#000',
                borderBottom:'2px solid #000',
            }).siblings().css({
                color:'#b2bbb8',
                border:'none'
            });
            yin.eq(index).show(100).siblings().hide(100);
        });
    });













































});