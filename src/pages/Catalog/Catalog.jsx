import { SearchTruck } from "../../components/SearchTruck/SearchTruck";
import { TruckList } from "../../components/TruckList/TruckList";
import css from "./Catalog.module.css";

export default function Catalog() {
	return (
		<div className={css.wrapper}>
			<SearchTruck />

			<TruckList />
		</div>
	);
}
