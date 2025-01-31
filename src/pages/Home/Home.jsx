import css from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();

	return (
		<div className={css.wrapper}>
			<h1 className={css.title}>Campers of your dreams</h1>

			<p className={css.description}>
				You can find everything you want in our catalog
			</p>

			<button
				type="button"
				className={css.button}
				onClick={() => navigate("/catalog")}
			>
				View now
			</button>
		</div>
	);
}
