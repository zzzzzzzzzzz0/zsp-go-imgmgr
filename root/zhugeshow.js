function zhugeshow__() {
	var y1 = document.body.scrollTop, y2 = y1 + document.body.clientHeight;
	var imgs = document.getElementsByTagName("img");
	for(var i = 0; i < imgs.length; i++) {
		var img = imgs[i];
		var y = img.offsetTop;
		if(y + img.height >= y1 && y <= y2) {
			var src2 = img.attributes["src2"];
			if(src2)
				img.src = src2.nodeValue;
		}
	}
}
window.onscroll = zhugeshow__;
window.onload = zhugeshow__;
