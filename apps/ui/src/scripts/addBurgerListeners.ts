/** Adds Listeners for each button in the list of burgers */
export const addBurgerListeners = () => {
	const burgerButtons = Array.from(
		document.querySelectorAll<HTMLButtonElement>("li button"),
	);

	const burgerMarkers = Array.from(
		document.querySelectorAll<HTMLDivElement>(".marker"),
	);

	function setActiveMarker(id: string) {
		for (const activeLi of document.querySelectorAll("li.active")) {
			activeLi.classList.remove("active");
		}

		for (const marker of burgerMarkers) {
			const markerId = marker.getAttribute("data-burger-id");

			if (markerId === id) {
				marker.classList.add("active");
				marker.style.zIndex = "1000";
			} else {
				marker.classList.remove("active");
				marker.style.zIndex = "";
			}
		}
	}

	for (const button of burgerButtons) {
		// biome-ignore lint/style/noNonNullAssertion: We'll let JS fail if this is null
		const burgerId = button.getAttribute("data-burger-id")!;

		button.addEventListener("click", () => {
			if (button.classList.contains("active")) {
				button.classList.remove("active");
				button.closest("li")?.classList.remove("active");
			} else {
				setActiveMarker(burgerId);
				button.closest("li")?.classList.add("active");
			}
		});
	}
};
