import css from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
	return (
		<header className={css.header}>
			<a href="/" className={css.logo}>
				Travel<span>Trucks</span>
			</a>

			<nav>
				<ul className={css.nav}>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? `${css.link} ${css.active}` : css.link
							}
						>
							Home
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/catalog"
							className={({ isActive }) =>
								isActive ? `${css.link} ${css.active}` : css.link
							}
						>
							Catalog
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
