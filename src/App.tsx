import './App.scss';
import Header from './pages/Header';
import Home from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './context/StateProvider';

function App() {
	const [, dispatch]: any = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log(authUser);
			if (authUser) {
				// user is logged in

				dispatch({
					type: "SET_USER",
					user: authUser
				})
			} else {
				// user is logged out
				dispatch({
					type: "SET_USER",
					user: null
				})
			}
		});
	}, []);

	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route exact path='/'>
						<Header />
						<Home />
					</Route>
					<Route exact path='/checkout'>
						<Header />
						<Checkout />
					</Route>
					<Route exact path='/login' component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
