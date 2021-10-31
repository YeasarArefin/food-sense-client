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
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

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

					<PrivateRoute exact path="/details/:_id">
						<MealDetails />
					</PrivateRoute>

					<PrivateRoute exact path="/dashboard/manageorders">
						<ManageOrders />
					</PrivateRoute>

					<PrivateRoute exact path="/dashboard/addmeal">
						<AddMeals />
					</PrivateRoute>

					<PrivateRoute exact path="/myorders">
						<Myorders />
					</PrivateRoute>

					<Route exact path="/login">
						<Login />
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
