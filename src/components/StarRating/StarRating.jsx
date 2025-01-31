import css from './StarRating.module.css'

export const StarRating = ({ rating }) => {
	return (
		<div className={css.starRating}>
			{[...Array(5)].map((_, index) => (
				<span
					key={index}
					className={`${css.star} ${index < rating ? css.filled : css.empty}`}
				>
					★
				</span>
			))}
		</div>
	);
};