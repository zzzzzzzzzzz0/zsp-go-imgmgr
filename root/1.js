function e__(s) {
	return document.getElementById(s);
}
function e_tn__(s) {
	return document.getElementsByTagName(s);
}
function e_cn__(s) {
	return document.getElementsByClassName(s);
}
function o_e__(s) {
	return opener.document.getElementById(s);
}

function exec__(s, f) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			f(xhr.responseText);
		}
	}
	xhr.open("GET", "exec.zsp?" + s, true);
	xhr.send();
}
