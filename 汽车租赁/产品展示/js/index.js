$(function () {
   var btn = $('div.header>ul>li');
   var box = $('div.section');
   var img = $('div.section>ul>li>a>div>img')
   var li = $('.daohang>ul>li');
   var pox = $('div.footer>ul li');
   var ck = $('div.footer>ul>div>li')



   li.eq(2).css('borderBottom', '3px solid #2869d5');

   $.each(li, function (index, value) {
      $(this).click(function () {
         $(this).css('borderBottom', '3px solid #2869d5').siblings().css('border', 'none');
      });
   });

   btn.eq(0).css('background', 'blue');
   $.each(btn, function (index, value) {
      $(this).mouseover(function () {
         $(this).css('background', 'blue').siblings().css('background', '#666')
         box.eq(index).css('display', 'block').siblings().css('display', 'none')
         ck.eq(index).css('background','rgb(41, 41, 224)').siblings().css('background','#999')
      })
   })


   box.eq(0).css('display', 'block')

   img.hover(function () {
      $(this).animate({ width: '360px', height: '320px', top: '-10px', left: '-10px' })
   }, function () {
      $(this).animate({ width: '340px', height: '300px', top: '0px', left: '0px' }, 1)
   })



   pox.hover(function () {
      $(this).css('background', ' rgb(41, 41, 224)')
   },
      function () {
         $(this).css('background', '#999')
      })

      ck.eq(0).css('background', 'rgb(41, 41, 224)');
      $.each(ck, function (index, value) {
         $(this).click(function () {
            $(this).css('background', 'rgb(41, 41, 224)').siblings().css('background', '#999')
            box.eq(index).css('display', 'block').siblings().css('display', 'none')
            btn.eq(index).css('background','blue').siblings().css('background','#666')
         })
      })





})


