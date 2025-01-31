import { useDispatch, useSelector } from "react-redux";
import { TruckFeatures } from "../TruckFeatures/TruckFeatures";
import css from "./TruckCard.module.css";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice";
import sprite from "../../images/sprite.svg";
import { swapCityCountry } from "../../helpers";

export const TruckCard = ({ truck }) => {
	const { id, name, gallery, reviews, description, location, price, rating } =
		truck;
	const dispatch = useDispatch();
	const favorite = useSelector((state) => state.favorites.favorites);
	const isFavorite = favorite.includes(id);

	const handleFavoriteClick = () => {
		if (isFavorite) {
			dispatch(removeFavorite(id));
		} else {
			dispatch(addFavorite(id));
		}
	};

	return (
		<div className={css.truckCard}>
			<div className={css.imageWrapper}>
				<img
					className={css.truckImage}
					src={gallery[0].thumb}
					alt={name}
					loading="lazy"
				/>
			</div>

			<div className={css.descriptionWrapper}>
				<div className={css.headerWrapper}>
					<div className={css.namePriceWrapper}>
						<h2 className={css.truckName}>{name}</h2>

						<div className={css.priceFavBtnWrapper}>
							<p className={css.truckPrice}>€{price.toFixed(2)}</p>
							<button
								type="button"
								className={css.favButton}
								onClick={handleFavoriteClick}
							>
								<svg
									className={`${css.favIcon} ${isFavorite ? css.marked : ""}`}
								>
									<use href={`${sprite}#icon-heart`} />
								</svg>
							</button>
						</div>
					</div>

					<div className={css.infoWrapper}>
						<p className={css.rating}>
							<svg className={css.ratingIcon}>
								<use href={`${sprite}#icon-rating`} />
							</svg>
							{rating} ({reviews.length} Reviews)
						</p>

						<p className={css.location}>
							<svg className={css.locationIcon}>
								<use href={`${sprite}#icon-map`} />
							</svg>{" "}
							{swapCityCountry(location)}
						</p>
					</div>
				</div>

				<p className={css.description}>{description}</p>

				<div className={css.featuresWrapper}>
					<TruckFeatures truck={truck} />
				</div>

				<a
					href={`/catalog/${id}`}
					target="_blank"
					rel="noreferrer noopener"
					className={css.link}
				>
					Show more
				</a>
			</div>
		</div>
	);
};
