function e__(s) {
	return document.getElementById(s);
}
function e_tn__(s) {
	return document.getElementsByTagName(s);
}
function e_cn__(s) {
	return document.getElementsByClassName(s);
}
function e_n__(s) {
	return document.getElementsByName(s);
}
function o_e__(s) {
	return opener.document.getElementById(s);
}

function focus__(s) {
	alert(s + " 哈");
	
	//window.focus();

	/*setTimeout(window.focus, 300);
	window.blur();*/
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
