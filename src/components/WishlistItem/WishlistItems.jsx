import React from "react";
import {useData} from "../../Context/DataContext";
import WishCard from "./WishCard";
import "./WishlistItems.scss";
const WishList = () => {
	const {state, dispatch} = useData();
	const {inWishlistItems} = state;
	// WishList page of the application.
	return (
		<div className='wishlist-container'>
			<div className='spacer-3rem'></div>
			<h1>
				My WishList
				<span> {inWishlistItems.length} Items</span>{" "}
			</h1>
			{inWishlistItems && inWishlistItems.length === 0 ? (
				<h2 className='no-items-wishlist'>No Items in wishList</h2>
			) : (
				<div className='grid-4-column-layout-wishlist'>
					{inWishlistItems.map((product) => (
						<WishCard product={product} key={product.id} />
					))}
				</div>
			)}
			<div className='spacer-3rem'></div>
		</div>
	);
};

export default WishList;
