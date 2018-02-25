var head = document.getElementsByTagName("head")[0];
var style = document.createElement('style');
style.type = 'text/css';
head.appendChild(style);
var tempsheet= style.sheet;
tempsheet.insertRule(".header-ad,.in-read-ad,.hot-articles,.discover-stream,.octopus,.article-ad,.pixnet-ad{ display: none!important; }", 0);

window.onload = function () {
	if(!(typeof pix === "undefined") && pix.isMobile){
		tempsheet.insertRule(".pix-related-post{ display: none!important; }", 0);
	}
} 
