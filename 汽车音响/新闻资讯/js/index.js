$(function(){

    var sou=$('.nav>.biao>.img');
    var cha=$('.nav>.biao>.cha');
    var ul=$('.nav>ul');
    var biao=$('.nav>.biao');
    var top=$('.gotop_1');
    var btn=$('.page_1>div>button');
    var page=$('.main_2');
    var img=$('.main_2 img')
    var asd=$('main_2>div>aside');
    sou.click(function(){
        biao.animate({right:'5px'},500);
        ul.hide(500);
    })
    cha.click(function(){
        biao.animate({right:'-725px'},500);
        ul.show(500);
    })
    top.click(function(){
       
        $(window).scrollTop('0');
       
           });

          
  
//            alert(btn)
// alert(page)
page.eq(0).css('display','block').siblings('.main_2').css('display','none');
      $.each(btn,function(index,value){
          $(this).click(function(){
              page.eq(index).css('display','block').siblings('.main_2').css('display','none');
              $(this).css('background','pink').siblings().css('background','white');
            
setInterval(function(){
    img.animate({
                  
                          opacity:'0.5',
                      },1000)
                      img.animate({
                          
                        opacity:'1',
                    },1000)
                    // img.fadeOut(1000,)
                   img.fadeIn(1000,)
},1000)
            img.fadeToggle(1000,)
            
          })
          
      })

      setInterval(function(){
        img.animate({
                    //   borderRadius:'20',
                      opacity:'0.5',
                          },500),
                          img.animate({
                              
                            opacity:'1',
                        },500)
                 
                      
    },1000)
    img.mouseover(function(){
        setInterval(function(){
            img.fadeOut(500,)
            img.fadeIn(500,)
        },1000)
       img.animate({
        borderRadius:'100',
       },1000)
    })






































});