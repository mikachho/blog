var head = document.getElementsByTagName("head")[0];
var style = document.createElement('style');
style.type = 'text/css';
head.appendChild(style);
var tempsheet= style.sheet;
tempsheet.insertRule(".header-ad,.in-read-ad,.hot-articles,.discover-stream,.octopus,.article-ad,div[id^='div-gpt-ad']:nth-child(n+10),.global-keyword,.article-body:last-child { display: none!important; }", 0);
tempsheet.insertRule("p,div { word-break:break-all; }", 0);
tempsheet.insertRule("#main .header-fixed-area {min-height: unset;}", 0);


try{
	(function() {
		tempsheet.insertRule(".pixnet-ad { display: none!important; }", 0);
		if('none' !==document.getElementsByTagName("body")[0].getAttribute("data-mobile-mode")){
			tempsheet.insertRule(".pix-related-post,.relative-article{ display: none!important; }", 0);
		}
		

		
		/*
		var artWet = document.getElementsByClassName('article-body')[0];
		if(artWet){
		    artWet = artWet.getElementsByClassName('forward')[0];
		    while (artWet) {
			artWet.style.display = 'none';
			artWet = artWet.nextElementSibling;
		    }
		}
		var mkxx = document.getElementsByClassName("pixnet-ad");
		for (var i=0, j = mkxx.length;i<j;i++){
		  mkxx[i].style.display = 'none';
		}*/
		
	})();

}catch(e){console.log(e)}
