import css from "./Reviews.module.css";
import { StarRating } from "../StarRating/StarRating";

export const Reviews = ({ reviews }) => {
	return (
		<ul className={css.reviewsList}>
			{reviews.map((review, index) => (
				<li key={index}>
					<div className={css.revNameStarWrapper}>
						<span className={css.revNameInit}>
							{review.reviewer_name[0].toUpperCase()}
						</span>
	
						<div>
							<p className={css.revName}>{review.reviewer_name}</p>
	
							<StarRating rating={review.reviewer_rating} />
						</div>
					</div>
	
					<p className={css.revComment}>{review.comment}</p>
				</li>
			))}
		</ul>
	);
};
