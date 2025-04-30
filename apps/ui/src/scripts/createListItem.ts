import type { Burger } from "@minnebar-2025/burgers";
import { GLOBE_ICON } from "../constants/GLOBE_ICON";
import { LOCATION_ICON } from "../constants/LOCATION_ICON";

/** Creates markup for the Burger LI element  */
export const createListItem = (burger: Burger): HTMLLIElement => {
	const { name, location, url, restaurant, description } = burger;

	const li = document.createElement("li");
	const h2 = document.createElement("h2");
	h2.classList.add("poppins-semibold");
	h2.textContent = name;
	const button = document.createElement("button");
	button.appendChild(h2);
	button.setAttribute("data-burger-id", `${burger.id}`);

	const addressLine = document.createElement("p");
	addressLine.classList.add("attribute", "poppins-semibold");
	addressLine.innerHTML = `
      ${LOCATION_ICON}
      <span>${location}</span>
  `;

	const websiteLine = document.createElement("p");
	websiteLine.classList.add("attribute", "poppins-semibold");
	websiteLine.innerHTML = `
      ${GLOBE_ICON}
      <a href="${url}" target="_blank" rel="noopener noreferrer">${restaurant}</a>
  `;

	const descriptionLine = document.createElement("p");
	descriptionLine.classList.add("description", "lusitana");
	descriptionLine.textContent = description;

	li.appendChild(button);

	if (description) {
		li.appendChild(descriptionLine);
	}

	li.appendChild(addressLine);
	li.appendChild(websiteLine);

	return li;
};
