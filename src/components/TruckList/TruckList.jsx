import css from "./TruckList.module.css";
import {
	selectIsLoading,
	selectTrucks,
	selectPage,
	selectTotal,
} from "./../../redux/trucks/selectors";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getTrucks } from "../../redux/trucks/operations";
import { useDispatch } from "react-redux";
import { Loader } from "../Loader/Loader";
import { TruckCard } from "../TruckCard/TruckCard";

export const TruckList = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);
	const page = useSelector(selectPage);
	const total = useSelector(selectTotal);
	const isLastPage = Math.ceil(total / 4) === page;

	useEffect(() => {
		dispatch(getTrucks());
	}, [dispatch]);

	const trucks = useSelector(selectTrucks);

	const handleLoadMore = () => {
		dispatch(getTrucks({ page: page + 1 }));
	};

	return (
		<>
			{trucks.length > 0 ? (
				<div>
					<ul className={css.trucksList}>
						{trucks.map((truck) => (
							<li key={truck.id}>
								<TruckCard truck={truck} />
							</li>
						))}
					</ul>

					{!isLastPage && !isLoading && (
						<button
							type="button"
							className={css.loadMoreBtn}
							onClick={handleLoadMore}
						>
							Load more
						</button>
					)}

					{!isLastPage && isLoading && <Loader />}
				</div>
			) : isLoading ? (
				<div className={css.loaderWrapper}>
					<Loader />
				</div>
			) : (
				<p className={css.noTrucksMessage}>
					No trucks found. Try adjusting your filters or check back later.
				</p>
			)}
		</>
	);
};
