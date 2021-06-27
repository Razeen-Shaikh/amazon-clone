import { Dispatch, Reducer } from 'react';
import { ContextType } from 'react';
import { ReducerState } from 'react';
import { createContext, ReactNode, useContext, useReducer } from 'react';

interface ContextTypes {
	reducer: Reducer<any, any>,
	initialState: ReducerState<Reducer<any, any>>,
	children: ReactNode
}

type InitialStateType = {
	basket: any[];
}

const intialState = {
	basket: [],
}

export const StateContext: ContextType<React.Context<any>> = createContext<{
	state: InitialStateType;
	dispatch: Dispatch<any>;
}>({
	state: intialState,
	dispatch: () => null
});

export const StateProvider: React.FC<ContextTypes> = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext)


