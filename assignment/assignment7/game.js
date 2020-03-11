window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick = startGame;
	
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById("clock");
	timer = setInterval(timeCount, TIMER_TICK);
	var currnttime = 10;

	function timeCount(){
		var allbox = document.querySelectorAll("#squares-layer div");
		currnttime --;
		x.innerHTML = currnttime;
		if (currnttime == 0){
			alert("LOSE!!!")
			clearInterval(timer);
			clearScreen();
			// alert("Time Up!!")
		}
		if(allbox.length == 0){
			alert("WIN!!!")
			clearInterval(timer);
			clearScreen();
		}
		}
	}

function addBox(){

	var numbox = document.getElementById("numbox").value;
	var squaresLayer = document.getElementById("squares-layer");
	var colorDrop = document.getElementById("color");
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square " + colorDrop.value;
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		squaresLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}
var finish;

function bindBox(box){
	finish = document.getElementById("squares-layer")
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		
		finish.removeChild (box);
	}
}

function clearScreen(){
	var allbox = document.querySelectorAll(".square");
	//delete all  squares
	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i]);
  
	}
}




