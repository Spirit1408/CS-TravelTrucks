export const swapCityCountry = (location) => {
	const [country, city] = location.split(",");
	return `${city}, ${country}`;
};

