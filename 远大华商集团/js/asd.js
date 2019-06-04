window.onload = function () {
    var box = document.getElementsById('#index0_0');

  
    var top = 0;
    var box_height=$("#index0_0").height();
     
    document.onkeydown = function (e) {

  
        if(e.keyCode == 40){
            top++;
            box.style.top = top + box_height;
        } else if (e.keyCode == 38) {
            top--;
            box.style.top = top  +box_height;
        }
    }

}
