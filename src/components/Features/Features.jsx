import { TruckFeatures } from "../TruckFeatures/TruckFeatures";
import css from "./Features.module.css";

export const Features = ({ truck }) => {
	const { form, length, width, height, tank, consumption } = truck;

	const formatNumbers = (data) => {
		return `${data.slice(0, -1)} ${data.slice(-1)}`;
	};

	const formatTruckForm = (form) => {
		const formattedForm = form.replace(/([A-Z])/g, " $1").trim().toLowerCase();
        return formattedForm[0].toUpperCase() + formattedForm.slice(1);
	};

	return (
		<div className={css.wrapper}>
			<TruckFeatures truck={truck} />

			<div>
				<h3 className={css.title}>Vehicle details</h3>
	
				<ul className={css.details}>
					<li className={css.detail}>
						<p>Form</p>
						<p>{formatTruckForm(form)}</p>
					</li>
					<li className={css.detail}>
						<p>Length</p>
						<p>{formatNumbers(length)} </p>
					</li>
					<li className={css.detail}>
						<p>Width</p>
						<p>{formatNumbers(width)} </p>
					</li>
					<li className={css.detail}>
						<p>Height</p>
						<p>{formatNumbers(height)} </p>
					</li>
					<li className={css.detail}>
						<p>Tank</p>
						<p>{formatNumbers(tank)} </p>
					</li>
					<li className={css.detail}>
						<p>Consumption</p>
						<p>{consumption} </p>
					</li>
				</ul>
			</div>
			</div>
	);
};
