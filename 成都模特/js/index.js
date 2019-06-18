$(function(){
	
	var nav=$('#nav');
    var logo=$('.logo');
    var navbtn=$('.navbtn');
    $(document).scroll(function(){
        if($(document).scrollTop()>150){
            nav.css('background','#fff');
            logo.attr('src','img/logo(2).png').css('marginRight','0px');
            navbtn.css('background','#fff');
        }else{
          	nav.css('background','#000');
          	logo.attr('src','img/logo (1).png').css('margin','0 20px 0 20px');
          	navbtn.css('background','#000');
        }
    })
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
