import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import AddMeals from "./components/AddMeals";
import HomePage from "./components/homepage/HomePage";
import Nav from "./components/homepage/Nav";
import MealDetails from "./components/MealDetails";
import Notfound from "./components/Notfound";
import AuthProvider from "./context/AuthProvider";

function App() {

	return (

		<AuthProvider>

			<Router>

				<Nav />

				<Switch>

					<Route exact path="/">
						<HomePage />
					</Route>

					<Route exact path="/home">
						<HomePage />
					</Route>

					<Route exact path="/addmeal">
						<AddMeals />
					</Route>

					<Route exact path="/details/:_id">
						<MealDetails />
					</Route>

					<Route exact path="*">
						<Notfound />
					</Route>

				</Switch>

			</Router>

		</AuthProvider>

	);

}

export default App;
