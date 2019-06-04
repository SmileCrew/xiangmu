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



  












































});