import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../context/reducers/reducer';
import { useStateValue } from '../../context/StateProvider';
import './subtotal.scss';

const Subtotal = () => {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className='subtotal'>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							{/* need to do */}
							Subtotal ({basket?.length} items) :
							<strong>{value}</strong>
						</p>
						<small className='subtotal-gift'>
							<input type='checkbox' /> This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>

			<button>Proceed to Checkout</button>
		</div>
	);
};

export default Subtotal;
