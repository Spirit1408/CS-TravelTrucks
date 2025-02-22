import css from "./TruckInfo.module.css";
import { useParams } from "react-router-dom";
import { RentTruckForm } from "../../components/RentTruckForm/RentTruckForm";
import { useDispatch, useSelector } from "react-redux";
import {
	selectCurrentTruck,
	selectError,
	selectIsLoading,
} from "../../redux/trucks/selectors";
import { useEffect, useState } from "react";
import { getTruckById } from "../../redux/trucks/operations";
import { Loader } from "../../components/Loader/Loader";
import { Reviews } from "../../components/Reviews/Reviews";
import { Features } from "../../components/Features/Features";
import { swapCityCountry } from "../../helpers";
import sprite from "../../images/sprite.svg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function TruckInfo() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const truck = useSelector(selectCurrentTruck);
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);

	const [activeTab, setActiveTab] = useState("features");
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);

	useEffect(() => {
		dispatch(getTruckById(id));
	}, [dispatch, id]);

	const scrollToReviews = (e) => {
		e.preventDefault();

		if (activeTab !== "reviews") {
			setActiveTab("reviews");
		}

		const reviewsContainer = document.querySelector(`.${css.extraInfo}`);
		if (reviewsContainer) {
			reviewsContainer.scrollIntoView({ behavior: "smooth" });
		}
	};

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return (
			<div className={css.errorContainer}>
				<h3>Oops! Something went wrong</h3>
				<p>{error}</p>
			</div>
		);
	}

	if (!truck) {
		return (
			<div className={css.errorContainer}>
				<h3>Truck not found</h3>
			</div>
		);
	}

	const { name, reviews, description, location, price, gallery, rating } =
		truck;

	return (
		<div className={css.wrapper}>
			<h2 className={css.truckName}>{name}</h2>

			<div className={css.infoWrapper}>
				<button
					className={css.rating}
					type="button"
					href="#reviews"
					onClick={scrollToReviews}
				>
					<svg className={css.ratingIcon}>
						<use href={`${sprite}#icon-rating`} />
					</svg>
					{rating} ({reviews.length} Reviews)
				</button>

				<p className={css.location}>
					<svg className={css.locationIcon}>
						<use href={`${sprite}#icon-map`} />
					</svg>{" "}
					{swapCityCountry(location)}
				</p>
			</div>

			<p className={css.truckPrice}>€{price.toFixed(2)}</p>

			<ul className={css.gallery}>
				{gallery.map((item, index) => (
					<li key={index} className={css.galleryItem}>
						<img
							className={css.galleryImage}
							src={item.thumb}
							alt={name}
							onClick={() => {
								setPhotoIndex(index);
								setIsOpen(true);
							}}
						/>
					</li>
				))}
			</ul>

			<Lightbox
				open={isOpen}
				close={() => setIsOpen(false)}
				index={photoIndex}
				slides={gallery.map((item) => ({ src: item.original }))}
				on={{
					view: ({ index }) => setPhotoIndex(index),
				}}
			/>

			<p className={css.description}>{description}</p>

			<div className={css.tabButtons}>
				<button
					className={`${css.tabButton} ${activeTab === "features" ? css.active : ""}`}
					onClick={() => setActiveTab("features")}
				>
					Features
				</button>
				<button
					className={`${css.tabButton} ${activeTab === "reviews" ? css.active : ""}`}
					onClick={() => setActiveTab("reviews")}
				>
					Reviews
				</button>
			</div>

			<div className={css.extraInfo}>
				<div className={css.sliderContainer}>
					<div
						className={css.sliderContent}
						style={{
							transform: `translateX(${activeTab === "features" ? "0" : "-50%"})`,
						}}
					>
						<div className={css.slide}>
							<Features truck={truck} />
						</div>
						<div className={css.slide}>
							<Reviews reviews={reviews} />
						</div>
					</div>
				</div>

				<RentTruckForm truck={truck} />
			</div>
		</div>
	);
}
