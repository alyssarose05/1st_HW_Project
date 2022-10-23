const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const refund = document.getElementById("refund");
const back = document.getElementById("back");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", function() {
	currentActive++;
	if (currentActive > circles.length) {
		currentActive = circles.length;
	}
	
	update();
});

prev.addEventListener("click", function() {
	currentActive--;
	if (currentActive <  1) {
		currentActive = 1;
	}
	
	update();
});

refund.addEventListener("click", function() {
	document.getElementById("purchase").style = "display:none";
	document.getElementById("request").style = "display:block";
	document.getElementById("prev").style = "display:none";
	document.getElementById("next").style = "display:none";
	document.getElementById("refund").style = "display:none";
});

back.addEventListener("click", function() {
	document.getElementById("purchase").style = "display:block";
	document.getElementById("request").style = "display:none";
	document.getElementById("prev").style = "display:inline";
	document.getElementById("next").style = "display:inline";
	document.getElementById("refund").style = "display:inline";
});

function update() {
	circles.forEach((circle, idx) => {
		if (idx < currentActive) {
			circle.classList.add("active");
		}
		else {
			circle.classList.remove("active");
		}
	})
	
	const actives = document.querySelectorAll(".active");
	
	progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
	
	if (currentActive === 1) {
		prev.disabled = true;
		document.getElementById("one").style = "display:block";
		document.getElementById("two").style = "display:none";
		document.getElementById("three").style = "display:none";
		document.getElementById("four").style = "display:none";
	}
	else if (currentActive === circles.length) {
		next.disabled = true;
		document.getElementById("one").style = "display:none";
		document.getElementById("two").style = "display:none";
		document.getElementById("three").style = "display:none";
		document.getElementById("four").style = "display:block";
	}
	else {
		prev.disabled = false;
		next.disabled = false;
		if (currentActive === 2) {
			document.getElementById("one").style = "display:none";
			document.getElementById("two").style = "display:block";
			document.getElementById("three").style = "display:none";
			document.getElementById("four").style = "display:none";
		}
		else if (currentActive === 3) {
			document.getElementById("one").style = "display:none";
			document.getElementById("two").style = "display:none";
			document.getElementById("three").style = "display:block";
			document.getElementById("four").style = "display:none";
		}
	}
}