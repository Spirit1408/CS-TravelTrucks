import css from './StarRating.module.css'
import sprite from '../../images/sprite.svg'

export const StarRating = ({ rating }) => {
	return (
		<div className={css.starRating}>
			{[...Array(5)].map((_, index) => (
				<span
					key={index}
					className={css.star}
				>
					<svg className={`${css.starIcon} ${index < rating ? css.filled : css.empty}`}>
						<use href={`${sprite}#icon-rating`} />
					</svg>
				</span>
			))}
		</div>
	);
};