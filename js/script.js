
var flag = false; 
var timer, count, time;

start.addEventListener("click", startSec);
pause.addEventListener("click", pauseSec);
reset.addEventListener("click", resetSec);

function startSec() {
	console.log ("start");
 	if (flag == false) {
			time = new Date();

			timer = setInterval ( function () {
			count = new Date() - time;
			var msek = count%1000;
			  
			  if (msek<10) {
			  	msek = "00" + msek;
			  }
			  if ((msek >= 10) && (msek < 100)) {
			  	msek = "0" + msek;
			  }
			  	 
			  var sek = Math.floor(count/1000)%60;
			  if (sek < 10) {
			  	sek = "0" + sek;
			  }
			  
			  var min = Math.floor(count/60000)%60;
			  if (min < 10) {
			  	min = "0" + min;}
			  
			  var hours = Math.floor(count/3600000)%24;
			  if (hours < 10) {
			  	hours = "0" + hours;
			  }
			  
			  out.innerHTML = hours+":"+min+":"+sek+":"+msek;
			  
		}, 4); 
		};
	flag = true;
};

function pauseSec() {
	clearInterval(timer);
	flag = true;
	console.log ("pause");
}; 

function resetSec() {
	clearInterval(timer);
	flag = false;
	out.innerHTML = "00:00:00:000";
	console.log ("stop");
};