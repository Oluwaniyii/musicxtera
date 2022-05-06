function image_slider() {
	let imageOutro = select("#image-outro");
	//
	function selectImageSource() {
		//select outro
		let imageGallery = select(".currentGallery");
		let image = select(".currentGallery img");
		let image_source = image.getAttribute("src");
		return image_source;
	}

	function renderNewImage(source) {
		//select outro
		let imageOutro = select("#image-outro");
		let image = select("#image-outro .outro-gallery-image img");
		image.style.transition = "all .3s ease-out";
		image.style.opacity = "0";
		setTimeout(() => {
			let image_source = image.getAttribute("src");
			image.setAttribute("src", source);
			image.style.transition = "all .3s ease-out";
			image.style.opacity = "1";
		}, 400);
	}

	function change(current, next) {
		current.classList.remove("currentGallery");
		next.classList.add("currentGallery");
		renderNewImage(selectImageSource());
	}

	//change

	const leftBtn = select("#left");
	const rightBtn = select("#right");

	leftBtn.addEventListener("click", (e) => {
		let imageGallery = select(".currentGallery");
		if (imageGallery.previousElementSibling) {
			change(imageGallery, imageGallery.previousElementSibling);
		} else {
			change(imageGallery, select(".gallery-last"));
		}
	});

	rightBtn.addEventListener("click", (e) => {
		let imageGallery = select(".currentGallery");
		if (imageGallery.nextElementSibling) {
			change(imageGallery, imageGallery.nextElementSibling);
		} else {
			change(imageGallery, select(".gallery-first"));
		}
	});

	const allGallery = selectAll(".gallery-img-container");
	allGallery.forEach((gallery, index) => {
		gallery.addEventListener("click", (e) => {
			e.preventDefault();
			for (let i = 0; i < allGallery.length; i++) {
				if (allGallery[i].classList.contains("currentGallery")) {
					allGallery[i].classList.remove("currentGallery");
				}
			}
			gallery.classList.add("currentGallery");
			renderNewImage(selectImageSource());
			imageOutro.style.display = "flex";
		});
	});

	//close image slide
	imageOutro.addEventListener("click", (e) => {
		if (e.target.classList.contains("image-outro")) {
			imageOutro.style.display = "none";
		}
	});
}
