import { useStateValue } from '../../context/StateProvider';
import './style.scss';

interface CheckProductParams {
	id: string,
	image: string,
	title: string,
	price: number,
	rating: number
}

const CheckoutProduct: React.FC<CheckProductParams> = ({
	id,
	image,
	title,
	price,
	rating
}) => {
	const [, dispatch]: any = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id,
		});
	};

	return (
		<div className='checkout-product'>
			<img src={image} className='image' alt='title' />

			<div className='info'>
				<p className='title'>{title}</p>
				<p className='price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='rating'>
					{Array(rating)
						.fill(rating)
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
				<button onClick={removeFromBasket}>Remove From Basket</button>
			</div>
		</div>
	);
};

export default CheckoutProduct;
