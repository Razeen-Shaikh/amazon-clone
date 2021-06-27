import { useStateValue } from '../../context/StateProvider';
import './product.scss';

interface ProductParams {
	id: string;
	title: string;
	price: number;
	image: string;
	rating: number;
}

const Product: React.FC<ProductParams> = ({ id, title, price, image, rating }) => {
	const [, dispatch]: any = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id,
				title,
				price,
				image,
				rating,
			},
		});
	};

	return (
		<div className='product'>
			<div className='product-info'>
				<p>{title}</p>
				<p className='product-price'>
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
			</div>

			<img src={image} alt='Product' />

			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
};

export default Product;
