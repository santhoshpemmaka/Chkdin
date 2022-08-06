import "./App.scss";
import {useData} from "./Context/DataContext";
import {Header, ProductPage, CartItems, WishList} from "./components";
import {Routes, Route} from "react-router-dom";

function App() {
	const {state, dispatch} = useData();
	return (
		// Routing implementation cart page and wishlist page
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<ProductPage />} />
				<Route path='/cartitems' element={<CartItems />} />
				<Route path='/wishlist' element={<WishList />} />
			</Routes>
		</div>
	);
}

export default App;
