var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto Play is set to " +video.autoplay)
	console.log("Loop is set to " +video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	video.play();
	
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});



document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow the Video");
	video.playbackRate *= 0.9;
	console.log("Speed is " +video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up the Video");
	video.playbackRate /= 0.9;
	console.log("Speed is " +video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10;
	if (video.currentTime == video.duration) {
		video.currentTime = 0
	}
	console.log("Skip ahead " +video.currentTime)
});

// Do i have to use 3 equals or two equals 


document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		console.log("Unmute");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
	}else{
		console.log("Mute")
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
	}

});


document.querySelector("#slider").addEventListener("click", function() {
	console.log("Volume is", video.volume)
	video.volume = this.value / 100;
	console.log("Volume is", video.volume)

console.log(document.querySelector("#volume"))
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});



document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});


document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});















