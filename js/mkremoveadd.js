	var head = document.getElementsByTagName("head")[0];
	var style = document.createElement('style');
	style.type = 'text/css';
	head.appendChild(style);
	var tempsheet= style.sheet;
	tempsheet.insertRule(".header-ad,.in-read-ad,.hot-articles,.discover-stream,.octopus,.article-ad,.pixnet-ad{ display: none!important; }", 0);
	window.onload = function(){
		if(!typeof str === "undefined" && pix.isMobile){
			var xmk = document.getElementsByClassName("relative-article")[0];
			xmk.remove(xmk.selectedIndex);
		}
		if(!typeof str === "undefined"){
			console.log("111111111111");
		}
		if(pix.isMobile){
console.log("222222222222"+pix.isMobile);
		}
	};
