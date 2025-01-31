import css from "./TruckFeatures.module.css";
import sprite from "../../images/sprite.svg";
import { capitalizeFirstLetter } from "../../helpers";

export const TruckFeatures = ({ truck }) => {
	const features = [
		"transmission",
		"engine",
		"AC",
		"bathroom",
		"kitchen",
		"TV",
		"radio",
		"refrigerator",
		"microwave",
		"gas",
		"water",
	];

	const featureIcons = {
		transmission: (
			<svg className={css.featureIcon}>
				<use href={`${sprite}#icon-diagram`} />
			</svg>
		),
		engine: (
			<svg className={css.featureIcon}>
				<use href={`${sprite}#icon-fuel`} />
			</svg>
		),
		AC: (
			<svg className={css.featureIcon}>
				<use href={`${sprite}#icon-air`} />
			</svg>
		),
		bathroom: (
			<svg className={css.featureIcon}>
				<use href={`${sprite}#icon-shower`} />
			</svg>
		),
		kitchen: (
			<svg className={css.featureIcon}>
				<use href={`${sprite}#icon-cup-hot`} />
			</svg>
		),
		TV: (
			<svg className={css.featureIcon}>
				<use href={`${sprite}#icon-tv`} />
			</svg>
		),
		radio: (
			<svg className={css.featureIcon}>
				<use href={`${sprite}#icon-radio`} />
			</svg>
		),
		refrigerator: (
			<svg className={css.featureIcon}>
				<use href={`${sprite}#icon-fridge`} />
			</svg>
		),
		microwave: (
			<svg className={css.featureIcon}>
				<use href={`${sprite}#icon-microwave`} />
			</svg>
		),
		gas: (
			<svg className={css.featureIcon}>
				<use href={`${sprite}#icon-gas-stove`} />
			</svg>
		),
		water: (
			<svg className={css.featureIcon}>
				<use href={`${sprite}#icon-water`} />
			</svg>
		),
	};

	const actualFeatures = features.filter((feature) => truck[feature]);

	return (
		<ul className={css.list}>
			{actualFeatures.map((feature) => (
				<li key={feature} className={css.featureItem}>
					{featureIcons[feature]}

					<p className={css.featureName}>
						{feature === "transmission"
							? capitalizeFirstLetter(truck.transmission)
							: feature === "engine"
								? capitalizeFirstLetter(truck.engine)
								: capitalizeFirstLetter(feature)}
					</p>
				</li>
			))}
		</ul>
	);
};
