$(function () {

    // 首页大轮播图

    // 声明带有背景图的块元素
    var li = $("#kuku>ul>li");
    // 声明该块元素个数
    var num = li.length;
    // 循环该块元素显示层级
    for (var i = 0; i < li.length; i++) {
        li.eq(i).css('zIndex', num);
        num--;
    }
    // 声明该块元素的索引值
    var li_index = 0;
    var li_next_index = 1;
    // 声明点击按钮
    var baitiao = $("#lunbo>div.langli>ul>li");
    var act = $("div.langli>ul>li>span");
    // 声明需要运动的文字图片
    var img1 = $("#kuku>ul>li .img1");
    var img2 = $("#kuku>ul>li .img2");
    // 声明一个时间执行对象
    var time;
    // 轮播条运动最终位置
    act.eq(li_index).animate({
        width: '60px'
    }, 7000, function () {
        act.animate({
            width: '0px'
        }, 0)
    })
    // 文字图片最终运动位置及样式
    img1.animate({
        left: '400px',
        opacity: '1',
    }, 3000, function () {
        img2.animate({
            left: '400px',
            opacity: '1',
        }, 3000);
    })
    // 自动轮播该块元素
    function autoPlay() {
        time = setInterval(function () {
            // 文字图片开始运动前的位置及样式
            img1.eq(li_next_index).css({
                opacity: 0,
                left: '100px'
            })
            img2.eq(li_next_index).css({
                opacity: 0,
                left: '1000px'
            })
            // 该块元素自动轮播运动
            li.eq(li_index).animate({
                opacity: 0,
            }, 1000);
            li.eq(li_next_index).animate({
                opacity: 1,
            }, 1000);

            li_index++;

            if (li_index == li.length - 1) {
                li_next_index = 0;
            } else if (li_index > li.length - 1) {
                li_index = 0;
                li_next_index = 1;
            } else {
                li_next_index = li_index + 1;
            }
            // 轮播条自动运动
            act.eq(li_index).animate({
                width: '60px'
            }, 7000, function () {
                act.animate({
                    width: '0px'
                }, 0)
            })
            // 文字图片跟随该块元素自动运动
            img1.eq(li_index).animate({
                left: '400px',
                opacity: '1',
            }, 3000, function () {
                img2.eq(li_index).animate({
                    left: '400px',
                    opacity: '1',
                }, 3000);
            })
        }, 7000)
    }
    // 调用该程序
    autoPlay();

    // 鼠标移入开始切换轮播
    $.each(baitiao, function (index, value) {
        // 文字图片开始运动前的位置及样式
        $(this).mouseover(function () {
            // 清除时间程序
            clearInterval(time);
            li_index = index;
            // 初始化所有位置
            act.css({
                width:'0'
            })
            img1.css({
                opacity: 0,
                left: '100px'
            })
            img2.css({
                opacity: 0,
                left: '1000px'
            })
            // 停止轮播条未完成的动作
            act.stop().eq(index).animate({
                width:'60px'
            },7000)
            // 该块元素轮播运动
            li.eq(li_index).animate({
                opacity: 1,
            }, 1000).siblings().animate({
                opacity: 0,
            }, 1000);
            // 停止文字图片未完成的动作
            img1.stop().eq(li_index).animate({
                left: '400px',
                opacity: '1',
            }, 3000, function () {
                img2.stop().eq(li_index).animate({
                    left: '400px',
                    opacity: '1',
                }, 3000);
            })

            if (li_index == li.length - 1) {
                li_next_index = 0;
            } else if (li_index > li.length - 1) {
                li_index = 0;
                li_next_index = 1;
            } else {
                li_next_index = li_index + 1;
            }
            // 文字图片跟随该块元素自动运动
            autoPlay();
        });
    });


    // 核心业务模块上浮并显示超链接
    // 声明上浮模块
    var fl = $('div.core3>ul>li.fl');
    // 声明要执行动作的div
    var core = $("div.core3>ul>li.fl div");
    // 声明要隐藏显示的超链接
    var a = $("li.fl>a");
    // 鼠标移入移除触发事件
    $.each(fl, function (index, value) {
        $(this).hover(function () {
            core.eq(index).animate({
                marginTop: "-20px"
            });
            a.eq(index).animate({
                opacity: "1"
            })
        }, function () {
            core.eq(index).animate({
                marginTop: "0px"
            });
            a.eq(index).animate({
                opacity: "0"
            })
        });
    });



    // 集团分布点击水平轮播事件
    // 声明点击按钮
    var btn1 = $(".btn1");
    var btn2 = $(".btn2");
    // 声明左右点击图标
    var zuo = $(".zuo");
    var you = $(".you");
    // 声明点击水平移动对象
    var tab1 = $(".tab1");
    var tab2 = $(".tab2");
    // 声明移动宽度
    var tab1_width = $(".tab1").width();
    // 初始化位置
    tab1.css({
        left: '0px'
    })
    tab2.css({
        left: tab1_width + 'px'
    })
    // 按钮点击事件
    $(btn1).click(function () {
        $(this).addClass('aaa').siblings().removeClass('aaa');
        tab1.animate({
            left: '0px'
        }, 1000)
        tab2.animate({
            left: tab1_width + 'px'
        }, 1000)
    })
    $(btn2).click(function () {
        $(this).addClass('aaa').siblings().removeClass('aaa');
        tab1.animate({
            left: -tab1_width + 'px'
        }, 1000)
        tab2.animate({
            left: '0px'
        }, 1000)
    })
    // 左右点击图标事件
    $(zuo).click(function () {
        btn2.addClass('aaa').siblings().removeClass('aaa');
        tab1.animate({
            left: -tab1_width + 'px'
        }, 1000)
        tab2.animate({
            left: '0px'
        }, 1000)
    })
    $(you).click(function () {
        btn1.addClass('aaa').siblings().removeClass('aaa');
        tab2.animate({
            left: tab1_width + 'px'
        }, 1000)
        tab1.animate({
            left: '0px'
        }, 1000)
    })




    // 侧边栏

    // 声明点击按钮
    var ceb = $("aside>ul>li");
    // 声明需要轮播的块元素
    var box = $("#index0_0");
    // 声明该块元素的高度
    var box_top = box.height();
    //  初始化第一个该元素位置
    box.css({
        top: '0px',
    })
    // 初始化第一个按钮样式
    ceb.eq(0).css({
        background: '#B79050'
    });
    // 点击按钮事件
    $.each(ceb, function (index, value) {
        $(this).click(function () {
            // 当前及其他按钮样式
            $(this).css({
                background: '#B79050'
            }).siblings().css({
                background: 'none'
            })
            // 该块元素运动
            box.animate({
                top: -box_top * index
            }, 1000)
        })
    });

























    
    // var top =0;
    // $.each(onkeydown,function(){

    //     if(e.keyCode==38){
    //         top--;
    //         box.animate({-box_top+'px'}) 
    //     }else if(e.keyCode==40){
    //         top++;
    //         box.style.top = box_top+'px'
    //     }




    // })



    // var div = document.getElementsByTagName('div')[0];
                //  var left = 0;
            //  var top = 0;
    
            //  document.onkeydown = function(e){

            //       if(e.keyCode == 37){
            //          left--;
            //          div.style.left = left + 'px';
            //       } else if(e.keyCode == 39){
            //          left++;
            //          div.style.left = left + 'px';

            //       } else if(e.keyCode == 38){
            //          top--;
            //          div.style.top = top + 'px';
            //       } else if(e.keyCode == 40){
            //          top++;
            //          div.style.top = top + 'px';

            //       }

            //  }



})