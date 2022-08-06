import React, {useState} from "react";
import {useNavigate} from "react-router";
import {useData} from "../../Context/DataContext";
import {Link} from "react-router-dom";
const WishCard = ({product}) => {
	const [category, setCategory] = useState(product.sizes[0]);
	const {state, dispatch} = useData();
	const navigate = useNavigate();
	let productIncart = -1;
	productIncart = state.inCartItems.findIndex((item) => item.id === product.id);
	const changeHandler = (e) => {
		setCategory(e.target.value);
	};
	const cartHandler = (product) => {
		product.count = 1;
		product.category = category;
		dispatch({type: "ADD_CART", payload: product});
	};
	// Display the wishlist page.
	return (
		<div className='product-listing-card' key={product.id}>
			<div className='product-listing-image'>
				<img
					className='product-responsive-image'
					src={product.image}
					alt='product-image'
				/>
			</div>
			<div className='product-listing-description'>
				<h4>
					{product.name} by {product.brand}
				</h4>
				<p>{product.DESC}</p>
				<span className='display-category'>Category: {product.category}</span>
				<div className='product-listing-display-price'>
					<span className='product-listing-price discount-price'>
						Rs. {product.discountCost}
					</span>
					<span className='product-listing-price actual-price'>
						Rs. {product.actualCost}
					</span>
				</div>
			</div>
			{productIncart > -1 ? (
				<Link to='/cartitems' style={{textDecoration: "none"}}>
					<button className='addwishlist'>Go To Cart</button>
				</Link>
			) : (
				<button className='addwishlist' onClick={() => cartHandler(product)}>
					Add Cart
				</button>
			)}
			<div className='product-listing-rating'>
				{product.rating} <i className='far fa-star'></i>
			</div>

			<i
				onClick={() =>
					dispatch({type: "REMOVE_ITEM_WISHLIST", payload: product})
				}
				className='fas fa-times product-listing-wishicon'></i>
		</div>
	);
};

export default WishCard;
