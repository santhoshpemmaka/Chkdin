import React, {useState} from "react";
import "./ProductListing.scss";
import {Link} from "react-router-dom";
import {useData} from "../../Context/DataContext";
const ProductCard = ({product}) => {
	const [category, setCategory] = useState(product.sizes[0]);
	const {state, dispatch} = useData();
	const changeHandler = (e) => {
		setCategory(e.target.value);
	};
	let productIncart = -1;
	let isProductInWishlist = -1;

	productIncart = state?.inCartItems?.findIndex(
		(productItem) => productItem.id === product.id
	);

	isProductInWishlist = state?.inWishlistItems?.findIndex(
		(productItem) => productItem.id === product.id
	);

	const cartHandler = (product) => {
		product.count = 1;
		product.category = category;
		dispatch({type: "ADD_CART", payload: product});
	};

	const wishlistHandler = (product) => {
		product.category = category;
		product.count = 1;
		dispatch({type: "ADD_WISHLIST", payload: product});
	};
	// List of the product card.
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
				<div className='product-listing-display-price'>
					<span className='product-listing-price discount-price'>
						Rs. {product.discountCost}
					</span>
					<span className='product-listing-price actual-price'>
						Rs. {product.actualCost}
					</span>
				</div>
				<div className='product-sizes'>
					<label>
						Category :
						<select onChange={(e) => changeHandler(e)}>
							{product.sizes.map((size) => (
								<option value={size} key={size}>
									{size}
								</option>
							))}
						</select>
					</label>
				</div>
				{productIncart > -1 ? (
					<Link to='/cartitems' style={{textDecoration: "none"}}>
						<button className='addCart'>Go To Cart</button>
					</Link>
				) : (
					<button className='addCart' onClick={() => cartHandler(product)}>
						Add Cart
					</button>
				)}
			</div>
			<div className='product-listing-rating'>
				{product.rating} <i className='far fa-star'></i>
			</div>
			<i
				onClick={() => wishlistHandler(product)}
				className={`fas fa-heart product-listing-wishicon ${
					isProductInWishlist !== -1 ? "wish-active" : "wish-inactive"
				}`}></i>
		</div>
	);
};

export default ProductCard;
