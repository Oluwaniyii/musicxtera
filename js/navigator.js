function resize() {
	console.log("resize");
}

//Accordion
function accordion() {
	let acc = document.getElementsByClassName("accordion");
	let i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function (e) {
			// e.preventDefault();
			console.log(this);
			let panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}
}
accordion();

function socialSm_toggle() {
	const social_sm = select(".social-sm");
	const share = select(".social-sm > .share");
	share.addEventListener("click", function (e) {
		e.preventDefault();
		const lis = selectAll(".social-sm-list > li");
		social_sm.classList.toggle("active");
		lis.forEach((li, index) => {
			li.style.animation = li.style.animation
				? ""
				: (li.style.animation = `fadeIn 0.5s ease forwards ${index / 9}s`);
		});
	});
}
socialSm_toggle();

//
//nav
let nav = select("nav");

//mq_logo
let mqLogo = select("#mq_logo");
mqLogo.style.display = "none";

let navLinks = select("nav .nav-links");
mqLogo.style.display = "block";

// nav.style.padding = "20px 40px";
// nav.style.background = "#1b1d2f";
navLinks.replaceChild(mqLogo, select(".nav-links-holder"));

let social = select(".social-media");
let social_sm = select(".social-sm");
social_sm.style.display = "block";
nav.replaceChild(social_sm, social);

console.log(nav.firstElementChild);
