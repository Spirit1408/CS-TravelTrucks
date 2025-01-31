import css from "./Loader.module.css";
import { Audio } from "react-loader-spinner";

export const Loader = () => {
	return (
		<div className={css.wrapper}>
			<Audio
				height="80"
				width="80"
				radius="9"
				color="#e44848"
				ariaLabel="loading"
			/>
		</div>
	);
};
