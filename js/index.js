
	window.onload = function () {
      var list = document.getElementById("list");
      var next = document.getElementById("next");
      var prev = document.getElementById("prev");

      // 初始化图片的宽度和第一张图片的位置
      //var imgWidth = document.body.clientWidth;
 var imgWidth = document.documentElement.clientWidth;
      var img = document.getElementsByClassName('img');
      for (var i = 0; i < img.length; i++) {
        img[i].style.width = imgWidth + 'px';
      }
      list.style.left = -imgWidth + 'px';

      window.onresize = function () { // 实时监听浏览器窗口大小
      //  imgWidth = document.body.clientWidth;
var imgWidth = document.documentElement.clientWidth;
        for (var i = 0; i < img.length; i++) {
          img[i].style.width = imgWidth + 'px';
        }
        list.style.left = -imgWidth + 'px';
      }

      function animate (offset) {
		  // 获取的style.left是字符串，需要用parseInt()取整转化为数字**********是否要取负值
        var newLeft = parseFloat(list.style.left) + offset;
        if (newLeft < -imgWidth * 4) {
          list.style.left = -imgWidth + "px";
        } else if (newLeft > -imgWidth) {
          list.style.left = -imgWidth * 4 + "px";
        } else {
          list.style.left = newLeft + "px";
        }
      }

      // 设置图片循环滚动
      var timer;
      function play () {
       timer = setInterval(function () {
          next.onclick();
        }, 2000)
      }
      play();
		
	// 鼠标放在图片上时图片停止滚动     这里，我们需要对其DOM进行操作，所以需要获取整个轮播图区域	
    var container = document.getElementById('container');
      function stop () {
        clearInterval(timer);
      }
      container.onmouseover = stop;
      container.onmouseout = play;
		
    //小圆点
      var buttons = document.getElementById("buttons").getElementsByTagName("span");
      var index = 1;
      function buttonsShow () {
        // 这里需要清除之前的样式
        for (var i = 0; i < buttons.length; i++) {
          if (buttons[i].className === "on") {
            buttons[i].className = '';
          }
        }
        // 数组从0开始，故index需要-1
        buttons[index - 1].className = 'on';
      }
      prev.onclick = function () {
        index -= 1;
        if (index < 1) {
          index = 4;
        }
        buttonsShow();
        animate(imgWidth);
      }
	  
      next.onclick = function () {
        index += 1;
        if (index > 4) {
          index = 1;
        }
        buttonsShow();
        animate(-imgWidth);
      }

   
    }
