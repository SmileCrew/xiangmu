$(function () {
    var div = $('.section>.content>.show>.show_top>div');
    div.hover(function () {
        $(this).find('img').css('display', 'none')
    },
        function () {
            $(this).find('img').css('display', 'inline-block')
        })

    var btn=$('.btn')
    btn.click(function () {
        $(window).scrollTop('0')
    })


    btn.hover(function () {
        $(this).css('color', 'rgb(214, 84, 9)')
    }, function () {
        $(this).css('color', '#ccc')
    })


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

})


