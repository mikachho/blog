var head = document.getElementsByTagName("head")[0];
var style = document.createElement('style');
style.type = 'text/css';
head.appendChild(style);
var tempsheet= style.sheet;
tempsheet.insertRule(".header-ad,.in-read-ad,.hot-articles,.discover-stream,.octopus,.article-ad{ display: none!important; }", 0);
tempsheet.insertRule("p,div { word-break:break-all; }", 0);

window.onload = function () {
	if(!(typeof pix === "undefined") && pix.isMobile){
		tempsheet.insertRule(".pix-related-post,.pix-related-post-showed{ display: none!important; }", 0);
	}
	var mkxx = document.getElementsByClassName("pixnet-ad");
	for (var i=0, j = mkxx.length;i<j;i++){
	  mkxx[i].style.display = 'none';
	}
} 
