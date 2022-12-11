function openLoginPopup() {
    console.log("opened")
}

function menuToggle() {
    const toggleMenu = document.querySelector(".menu-profile");
    toggleMenu.classList.toggle("active");
	
	const arrow = document.querySelector(".arrow-wrap");
    arrow.classList.toggle("active");
}

setTimeout(() => {
    const toggleMenu = document.querySelector(".loading-container");
    toggleMenu.classList.toggle("hide");
    setTimeout(() => {
        toggleMenu.classList.toggle("display-none");
    }, 1000)
}, 500);