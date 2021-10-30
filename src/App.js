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
import Myorders from "./components/Myorders";
import Notfound from "./components/Notfound";
import ManageOrders from "./components/ManageOrders";
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

					<Route exact path="/details/:_id">
						<MealDetails />
					</Route>

					<Route exact path="/dashboard/manageorders">
						<ManageOrders />
					</Route>

					<Route exact path="/dashboard/addmeal">
						<AddMeals />
					</Route>

					<Route exact path="/myorders">
						<Myorders />
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
