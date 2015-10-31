function zhugeshow__() {
	var y1 = document.body.scrollTop, y2 = y1 + document.body.clientHeight;
	var imgs = document.getElementsByTagName("img");
	for(var i = 0; i < imgs.length; i++) {
		var img = imgs[i];
		if(img.attributes["src2o"])
			continue;
		var y = img.offsetTop, h = img.height;
		var h_1 = h, h_2 = 0;
		if(!h) {
			var src2h = img.attributes["src2h"];
			if(src2h) {
				h = parseInt(src2h.nodeValue);
				h_1 = h_2 = h / 2;
			}
		}
		if(y + h_1 >= y1 && y - h_2 <= y2) {
			var src2 = img.attributes["src2"];
			if(src2) {
				img.src = src2.nodeValue;
				img.setAttribute("src2o", "");
				//console.log(i+") "+h_1+" "+h_2);
			}
		}
	}
}
window.onscroll = zhugeshow__;
window.onload = zhugeshow__;
