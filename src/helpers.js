export const swapCityCountry = (location) => {
	const [country, city] = location.split(",");
	return `${city}, ${country}`;
};

export const capitalizeFirstLetter = (string) => {
	if (string.length === 2) {
		return string.toUpperCase();
	}
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const validateName = (name) => {
	const nameRegex = /^[A-Za-z]+$/;
	if (!nameRegex.test(name) && name !== "") {
		return "Name should contain only Latin letters";
	}
	return "";
};

export const validateEmail = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email) && email !== "") {
		return "Please enter a valid email address";
	}
	return "";
};
