import { Reducer } from 'react';

export const initialState = {
	basket: [],
	user: null,
};

export const getBasketTotal = (basket: any[]) =>
	basket?.reduce((amount: number, item: any) => item.price + amount, 0);

const reducer: Reducer<any, any> = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state,
				basket: [...state.basket, action.item],
			};

		case 'REMOVE_FROM_BASKET':
			const index = state.basket?.findIndex(
				(basketItem: any) => basketItem.id === action.id
			);

			let newBasket = [...state.basket];
			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn("can't remove");
			}
			return {
				...state,
				basket: newBasket,
			};
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};

export default reducer;
