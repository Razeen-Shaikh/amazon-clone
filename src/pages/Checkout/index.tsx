import userEvent from '@testing-library/user-event';
import { useStateValue } from '../../context/StateProvider';
import CheckoutProduct from '../CheckoutProduct';
import Subtotal from '../Subtotal';
import './checkout.scss';

const Checkout = () => {
	const [{ basket, user },]: any = useStateValue();

	return (
		<div className='checkout'>
			<div className='checkout-left'>
				<img
					className='checkout-ad'
					src='https://images-na.ssl-images-amazon.com/images/G/02/UK_COMP/TM/OCC_Amazon1._CB423492668_.jpg'
					alt='Ad'
				/>
				<div>
					<h3>Hello, {user.email}</h3>
					<h2 className='checkout-title'>
						Your shopping Basket
					</h2>
					{basket?.map((item: any) => (
						<CheckoutProduct
							id={item.id}
							image={item.image}
							title={item.title}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>
			<div className='checkout-right'>
				<Subtotal />
			</div>
		</div>
	);
};

export default Checkout;
