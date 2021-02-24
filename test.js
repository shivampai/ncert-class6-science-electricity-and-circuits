function getresult() {
	var x = 0;
  var checkBox = document.getElementById("c1");
  var text = document.getElementById("text");
  if (c1.checked == true){
	  x = x+1;
  }
	var c2 = document.getElementById("c2");
	if (c2.checked == true){
		x = x+1;
	}
	var c3 = document.getElementById("c3");
	if (c3.checked == true){
		x = x+1;
	}
	var c4 = document.getElementById("c4");
	if (c4.checked == true){
		x = x+1;
	}
	var c5 = document.getElementById("c5");
	if (c5.checked == true){
		x = x+1;
	}
	document.getElementById("result").innerHTML ="Marks: "+ x + "/5";
	document.getElementById("resultpercent").innerHTML ="Percentage Of Marks: " + x / 5 *100 +" %";
	document.getElementById("c1text").innerHTML = "2. Flowing".fontcolor("green");
	document.getElementById("c2text").innerHTML = "4. None Of the Above".fontcolor("green");
	document.getElementById("c3text").innerHTML = "1. Thomas Alva Edison".fontcolor("green");
	document.getElementById("c4text").innerHTML = "1. Electrical , Light & Heat".fontcolor("green");
	document.getElementById("c5text").innerHTML = "3. Straight".fontcolor("green");
	document.getElementById("hidden").style.display = "block";
	document.getElementById("main").style.display = "none";
}
function sa() {
	document.getElementById("main").style.display = "block";
	document.getElementById("submit").style.display = "none";
	document.getElementById("sa").style.display = "none";
}