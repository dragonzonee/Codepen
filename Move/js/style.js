var isback = false;
function move () {
	var div2 = document.getElementById("div2");
	var left = div2.offsetLeft;
	var leftend = 200;

		if(!isback){
			left =left+30; 
			
		}else {
			left =left-30;
		}

		if (left>=900){
				isback = true;
		}

		if(left<=0){
				isback = false;
		}

		div2.style.left=left+"px";
		setTimeout(move, 20);
}