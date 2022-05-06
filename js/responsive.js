window.addEventListener("scroll", () => {
	const nav = select("nav");
	const navHeight = nav.clientHeight;

	nav.style.transition = `all .4s ease-in-out`;
	if (window.scrollY > navHeight) {
		nav.classList.add("fixed");
	} else {
		nav.classList.remove("fixed");
		select(".landing-content").style.marginTop = "0px";
	}
});
