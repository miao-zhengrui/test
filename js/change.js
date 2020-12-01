
			var next=document.getElementById("next0");//获取
			var forward=document.getElementById("forward");		
			var pic=document.getElementById("pic");
			var num=document.getElementById("num");
			var arr=
			["images/h1.jpg","images/h2.jpg","images/h3.jpg","images/h4.jpg","images/h5.jpg"];		
			var n = 0;
			next.onclick = function(){
				n++;
				if(n > arr.length-1){//当n超出合理范围
					n = 0;
				}
				change();
			}
			forward.onclick = function(){
				n--;
				if(n < 0){
					n = arr.length - 1;
				}
				change();
			}
//			change();
			function change(){//通过n值改变图片的src、页码
				pic.src = arr[n];
				num.innerHTML = n+1 + "/" + arr.length;
			}

			var next1=document.getElementById("next1");
			var forward1=document.getElementById("forward1");		
			var pic1=document.getElementById("pic1");
			var num1=document.getElementById("num1");
			var arr1=["images/f1.jpg","images/f2.jpg","images/f3.jpg","images/f4.jpg","images/f5.jpg"];
			var i = 0;
			next1.onclick = function(){
				i++;
				if(i > arr1.length-1){//当n超出合理范围
					i = 0;
				}
				change1();
			}
			forward1.onclick = function(){
				i--;
				if(i < 0){
					i = arr1.length - 1;
				}
				change1();
			}
//			change1();
			function change1(){//通过n值改变图片的src、页码
				pic1.src = arr1[i];
				num1.innerHTML = i+1 + "/" + arr1.length;
			}

			var next2=document.getElementById("next2");
			var forward2=document.getElementById("forward2");		
			var pic2=document.getElementById("pic2");
			var num2=document.getElementById("num2");
			var arr2=["images/l1.jpg","images/l2.jpg","images/l3.jpg","images/l4.jpg","images/l5.jpg"];
			var j = 0;
			next2.onclick = function(){
				j++;
				if(j > arr2.length-1){//当n超出合理范围
					j = 0;
				}
				change2();
			}
			forward2.onclick = function(){
				j--;
				if(j < 0){
					j = arr2.length - 1;
				}
				change2();
			}
//			change2();
			function change2(){//通过n值改变图片的src、页码
				pic2.src = arr2[j];
				num2.innerHTML = j+1 + "/" + arr2.length;
			}

			var next3=document.getElementById("next3");
			var forward3=document.getElementById("forward3");		
			var pic3=document.getElementById("pic3");
			var num3=document.getElementById("num3");
			var arr3=["images/w5.jpg","images/w2.jpg","images/w3.jpg","images/w4.jpg","images/w1.jpg"];
			var k = 0;
			next3.onclick = function(){
				k++;
				if(k > arr3.length-1){//当n超出合理范围
					k = 0;
				}
				change3();
			}
			forward3.onclick = function(){
				k--;
				if(k < 0){
					k = arr3.length - 1;
				}
				change3();
			}
//			change3();
			function change3(){//通过n值改变图片的src、页码
				pic3.src = arr3[k];
				num3.innerHTML = k+1 + "/" + arr3.length;
			}