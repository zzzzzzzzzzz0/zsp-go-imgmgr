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

function new__(s) {
	return document.createElement(s);
}
function add__(e, e2) {
	e2.appendChild(e); 
}

function url__(s) {
	return encodeURIComponent(s);
}

function log__(s) {
	console.log(s);
}

function focus__(w, s) {
	log__(w.location.href);

	w.focus();

	w.blur();
	w.setTimeout(w.focus, 0);

	alert(s + " 哈");
}

function msg__(s) {
	if(!("Notification" in window)) {
		alert(s);
		return;
	}
	if(Notification.permission === "granted") {
		new Notification(s);
		return;
	}
	if(Notification.permission !== "denied") {
		Notification.requestPermission(function(permission) {
			if(permission === "granted") {
				new Notification(s);
			} else {
				alert(s);
			}
		});
	}
}

function ajax__(s, f, o) {
	var hr = new XMLHttpRequest();
	if(f) {
		hr.onreadystatechange = function() {
			if(hr.readyState == 4 && hr.status == 200) {
				f(hr.responseText, o);
			}
		}
	}
	hr.open("GET", s, true);
	hr.send();
}
