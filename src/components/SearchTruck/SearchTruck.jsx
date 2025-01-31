import { useDispatch, useSelector } from "react-redux";
import css from "./SearchTruck.module.css";
import sprite from "../../images/sprite.svg";
import {
	setLocation,
	setAC,
	setBathroom,
	setKitchen,
	setTV,
	setRadio,
	setRefrigerator,
	setMicrowave,
	setGas,
	setWater,
	setForm,
	setTransmission,
	setEngine,
} from "../../redux/filters/slice";
import { getTrucks } from "../../redux/trucks/operations";
import { resetTrucks } from "../../redux/trucks/slice";

export const SearchTruck = () => {
	const dispatch = useDispatch();
	const filters = useSelector((state) => state.filters);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(resetTrucks());
		dispatch(getTrucks({ page: 1 }));
	};

	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<label className={css.labelLoc}>
				Location:
				<div className={css.inputGroup}>
					<input
						type="text"
						value={filters.location}
						onChange={(e) => dispatch(setLocation(e.target.value))}
						className={css.input}
						placeholder="City"
					/>

					<svg
						className={filters.location ? `${css.mapIcon} ${css.active}` : css.mapIcon}
					>
						<use href={`${sprite}#icon-map`}></use>
					</svg>
				</div>
			</label>

			<h2 className={css.filtersTitle}>Filters</h2>

			<div className={css.checkboxGroup}>
				<h3 className={css.subtitle}>Vehicle equipment</h3>
				<div className={css.checkboxWrapper}>
					<label className={css.checkboxLabel}>
						<input
							type="checkbox"
							checked={filters.transmission === "automatic"}
							onChange={(e) => {
								if (e.target.checked) {
									dispatch(setTransmission("automatic"));
								} else {
									dispatch(setTransmission(""));
								}
							}}
							className={css.checkbox}
						/>
						<svg className={css.checkboxIcon}>
							<use href={`${sprite}#icon-diagram`}></use>
						</svg>
						Automatic
					</label>

					<label className={css.checkboxLabel}>
						<input
							type="checkbox"
							checked={filters.transmission === "manual"}
							onChange={(e) => {
								if (e.target.checked) {
									dispatch(setTransmission("manual"));
								} else {
									dispatch(setTransmission(""));
								}
							}}
							className={css.checkbox}
						/>
						<svg className={css.checkboxIcon}>
							<use href={`${sprite}#icon-diagram`}></use>
						</svg>
						Manual
					</label>

					<label className={css.checkboxLabel}>
						<input
							type="checkbox"
							checked={filters.engine === "petrol"}
							onChange={(e) => {
								if (e.target.checked) {
									dispatch(setEngine("petrol"));
								} else {
									dispatch(setEngine(""));
								}
							}}
							className={css.checkbox}
						/>
						<svg className={css.checkboxIcon}>
							<use href={`${sprite}#icon-fuel`}></use>
						</svg>
						Petrol
					</label>

					<label className={css.checkboxLabel}>
						<input
							type="checkbox"
							checked={filters.engine === "diesel"}
							onChange={(e) => {
								if (e.target.checked) {
									dispatch(setEngine("diesel"));
								} else {
									dispatch(setEngine(""));
								}
							}}
							className={css.checkbox}
						/>
						<svg className={css.checkboxIcon}>
							<use href={`${sprite}#icon-fuel`}></use>
						</svg>
						Diesel
					</label>

					<label className={css.checkboxLabel}>
						<input
							type="checkbox"
							checked={filters.engine === "hybrid"}
							onChange={(e) => {
								if (e.target.checked) {
									dispatch(setEngine("hybrid"));
								} else {
									dispatch(setEngine(""));
								}
							}}
							className={css.checkbox}
						/>
						<svg className={css.checkboxIcon}>
							<use href={`${sprite}#icon-fuel`}></use>
						</svg>
						Hybrid
					</label>

					<label className={css.checkboxLabel}>
						<input
							type="checkbox"
							checked={filters.AC}
							onChange={(e) => dispatch(setAC(e.target.checked))}
							className={css.checkbox}
						/>
						<svg className={css.checkboxIcon}>
							<use href={`${sprite}#icon-air`}></use>
						</svg>
						AC
					</label>

					<label className={css.checkboxLabel}>
						<input
							type="checkbox"
							checked={filters.bathroom}
							onChange={(e) => dispatch(setBathroom(e.target.checked))}
							className={css.checkbox}
						/>
						<svg className={css.checkboxIcon}>
							<use href={`${sprite}#icon-shower`}></use>
						</svg>
						Bathroom
					</label>

					<label className={css.checkboxLabel}>
						<input
							type="checkbox"
							checked={filters.kitchen}
							onChange={(e) => dispatch(setKitchen(e.target.checked))}
							className={css.checkbox}
						/>
						<svg className={css.checkboxIcon}>
							<use href={`${sprite}#icon-cup-hot`}></use>
						</svg>
						Kitchen
					</label>

					<label className={css.checkboxLabel}>
						<input
							type="checkbox"
							checked={filters.TV}
							onChange={(e) => dispatch(setTV(e.target.checked))}
							className={css.checkbox}
						/>
						<svg className={css.checkboxIcon}>
							<use href={`${sprite}#icon-tv`}></use>
						</svg>
						TV
					</label>

					<label className={css.checkboxLabel}>
						<input
							type="checkbox"
							checked={filters.radio}
							onChange={(e) => dispatch(setRadio(e.target.checked))}
							className={css.checkbox}
						/>
						<svg className={css.checkboxIcon}>
							<use href={`${sprite}#icon-radio`}></use>
						</svg>
						Radio
					</label>

					<label className={css.checkboxLabel}>
						<input
							type="checkbox"
							checked={filters.refrigerator}
							onChange={(e) => dispatch(setRefrigerator(e.target.checked))}
							className={css.checkbox}
						/>
						<svg className={css.checkboxIcon}>
							<use href={`${sprite}#icon-fridge`}></use>
						</svg>
						Refrigerator
					</label>

					<label className={css.checkboxLabel}>
						<input
							type="checkbox"
							checked={filters.microwave}
							onChange={(e) => dispatch(setMicrowave(e.target.checked))}
							className={css.checkbox}
						/>
						<svg className={css.checkboxIcon}>
							<use href={`${sprite}#icon-microwave`}></use>
						</svg>
						Microwave
					</label>

					<label className={css.checkboxLabel}>
						<input
							type="checkbox"
							checked={filters.gas}
							onChange={(e) => dispatch(setGas(e.target.checked))}
							className={css.checkbox}
						/>
						<svg className={css.checkboxIcon}>
							<use href={`${sprite}#icon-gas-stove`}></use>
						</svg>
						Gas
					</label>

					<label className={css.checkboxLabel}>
						<input
							type="checkbox"
							checked={filters.water}
							onChange={(e) => dispatch(setWater(e.target.checked))}
							className={css.checkbox}
						/>
						<svg className={css.checkboxIcon}>
							<use href={`${sprite}#icon-water`}></use>
						</svg>
						Water
					</label>
				</div>
			</div>

			<div className={css.formGroup}>
				<h3 className={css.subtitle}>Vehicle type</h3>
				<div className={css.radioGroup}>
					<label className={css.checkboxLabel}>
						<input
							type="checkbox"
							checked={filters.form === "panelTruck"}
							onChange={(e) => {
								if (e.target.checked) {
									dispatch(setForm("panelTruck"));
								} else {
									dispatch(setForm(""));
								}
							}}
							className={css.checkbox}
						/>
						<svg className={css.checkboxIcon}>
							<use href={`${sprite}#icon-grid1x2`}></use>
						</svg>
						Van
					</label>
					<label className={css.checkboxLabel}>
						<input
							type="checkbox"
							checked={filters.form === "fullyIntegrated"}
							onChange={(e) => {
								if (e.target.checked) {
									dispatch(setForm("fullyIntegrated"));
								} else {
									dispatch(setForm(""));
								}
							}}
							className={css.checkbox}
						/>
						<svg className={css.checkboxIcon}>
							<use href={`${sprite}#icon-grid2x2`}></use>
						</svg>
						Fully Integrated
					</label>
					<label className={css.checkboxLabel}>
						<input
							type="checkbox"
							checked={filters.form === "alcove"}
							onChange={(e) => {
								if (e.target.checked) {
									dispatch(setForm("alcove"));
								} else {
									dispatch(setForm(""));
								}
							}}
							className={css.checkbox}
						/>
						<svg className={css.checkboxIcon}>
							<use href={`${sprite}#icon-grid3x3`}></use>
						</svg>
						Alcove
					</label>
				</div>
			</div>

			<button type="submit" className={`${css.button} .xtraButtonStyle`}>
				Search
			</button>
		</form>
	);
};
