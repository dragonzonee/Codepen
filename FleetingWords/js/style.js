function fleet1 () {
	var warpper = document.getElementById("warpper1");
	var body = document.body;
	body.style.background="#333";
	warpper.style.zIndex="2";
	warpper.style.color="red";
}

function fleet2 () {
	var warpper = document.getElementById("warpper1");
	var body = document.body;
	body.style.background="white";
	warpper.style.zIndex="2";
	warpper.style.color="black";
}


function fleet3 () {
	var warpper = document.getElementById("warpper1");
	warpper.style.color="blue";
}


function fleet4 () {
	var warpper = document.getElementById("warpper2");
	warpper.style.transform="translate(1em,-0.2em)";
	warpper.style.fontSize = "90px";
	warpper.style.color="purple";
}

function fleet5 () {
	var warpper = document.getElementById("warpper2");
	warpper.style.transform="none";
	warpper.style.fontSize = "80px";
	warpper.style.color="blue";
}



setInterval(fleet1, 100);
setInterval(fleet2, 100,50);
setInterval(fleet3, 60);
setInterval(fleet4, 50);
setInterval(fleet5, 50,50);