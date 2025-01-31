import css from "./Reviews.module.css";
import { StarRating } from "../StarRating/StarRating";

export const Reviews = ({ reviews }) => {
	return (
		<div>
			<ul>
				{reviews.map((review, index) => (
					<li key={index}>
						<div>
							<span>{review.reviewer_name[0].toUpperCase()}</span>

							<p>{review.reviewer_name}</p>

							<p>{review.reviewer_rating}</p>
						</div>

						<StarRating rating={review.reviewer_rating} />

						<p>{review.comment}</p>
					</li>
				))}
			</ul>
		</div>
	);
};
