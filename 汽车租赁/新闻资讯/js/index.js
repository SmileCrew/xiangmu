$(function () {
   var li = $('.daohang>ul>li');
   var btn = $('div.footer>ul li');
   var ck = $('div.footer>ul>div>li')



   li.eq(4).css('borderBottom', '3px solid #2869d5');

   $.each(li, function (index, value) {
      $(this).click(function () {
         $(this).css('borderBottom', '3px solid #2869d5').siblings().css('border', 'none');
      });
   });




   ck.eq(0).css('background', 'rgb(41, 41, 224)');

   btn.hover(function () {
      $(this).css('background', ' rgb(41, 41, 224)')
   },
      function () {
         $(this).css('background', '#bbb')
      })




})


