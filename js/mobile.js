/* Website template by freewebsitetemplates.com */
window.onload = function(){
			var getNavi = document.getElementById('menu');
			document.getElementById('mobile-navigation').onclick = function(){
				var a = getNavi.getAttribute('style1');
				if(a){
					getNavi.removeAttribute('style1');
					document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile/mobile-menu.png)';
				} else {
					getNavi.style.display='block';
					document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile/mobile-close.png)';
				}
			};
			var getElm = getNavi.getElementsByTagName("LI");
			for(var i=0;i<getElm.length;i++){
				if(getElm[i].children.length>1){
					var smenu = document.createElement("span");
					smenu.setAttribute("class","mobile-submenu");
					smenu.setAttribute("OnClick","submenu("+i+")");
					getElm[i].appendChild(smenu);
				};
			};
			submenu = function (i){
				var sub = getElm[i].children[1];
				var b = sub.getAttribute('style1');
				if(b){
					sub.removeAttribute('style1');
					getElm[i].lastChild.style.backgroundImage='url(images/mobile/mobile-expand.png)';
					getElm[i].lastChild.style.backgroundColor='rgba(255, 255, 255, 0.8)';
				} else {
					sub.style.display='block';
					getElm[i].lastChild.style.backgroundImage='url(images/mobile/mobile-collapse.png)';
					getElm[i].lastChild.style.backgroundColor='rgba(248, 98, 130, 0.8)';
				}
			};
		};