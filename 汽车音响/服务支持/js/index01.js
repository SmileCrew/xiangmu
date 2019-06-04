$(function(){

   var img=$('.baoguotupian');
   var tupian=$('.baoguotupian .tupian img')
   var shang=$('.baoguotupian .yuanquan');
   var xia =$('.baoguotupian .shutiao');
   
   

   $.each(img,function(index,value){
      
     $(this).hover(function(){
        
        tupian.eq(index).css({opacity:0.3});
        shang.eq(index).show(100).css('top','0px').animate({top:'138px',left:'145px'},300);
        xia.eq(index).show(100).css('top','322px',).animate({top:'160px',left:'170px'},300);

     },function(){
        
      tupian.eq(index).css({opacity:1});
        shang.eq(index).animate({top:'0px',left:'0px'},300).hide(100);
        xia.eq(index).animate({top:'322px',left:'322px'},300).hide(100);




     });
     
    

   });
 

});

