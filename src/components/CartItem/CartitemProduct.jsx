import React from "react";
import {useData} from "../../Context/DataContext";
import {totalPrice} from "./amountCalculation";

const CartitemProduct = ({product}) => {
	const {state, dispatch} = useData();
	// Display of the cart items in the cart page.
	return (
		<div>
			<div className='cart-item'>
				<div className='cartitem-image-container'>
					<img
						className='cartitem-image-res'
						src={product.image}
						alt='product-image'
						loading='lazy'
					/>
				</div>
				<div className='cartitem-description'>
					<label className='cartitem-heading'>{product.name}</label>
					<label className='cartitem-desc'>{product.DESC}</label>
					<label className='cartitem-sold'>{product.brand}</label>
					<span className='display-category'>Category: {product.category}</span>
					<div className='cartitem-cost'>
						<label className='cartitem-pricecost'>
							Rs.{product.discountCost}
						</label>
						<label className='cartitem-actualcost'>
							Rs.{product.actualCost}
						</label>
					</div>
					<div className='cartitem-quantity'>
						<button
							className='cartitem-quantity-btn'
							disabled={product.count === 0 ? true : false}
							onClick={() => {
								if (product.count === 1) {
									dispatch({type: "REMOVE_ITEM", payload: product});
								} else {
									dispatch({type: "DECREMENT_COUNT", payload: product});
								}
							}}>
							<i className='fas fa-minus'></i>
						</button>
						<span className='cartitem-num'>{product.count}</span>
						<button
							className='cartitem-quantity-btn'
							onClick={() =>
								dispatch({type: "INCREMENT_COUNT", payload: product})
							}>
							<i className='fas fa-plus'></i>
						</button>
					</div>
					<button
						className='addCart'
						onClick={() => dispatch({type: "REMOVE_ITEM", payload: product})}>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartitemProduct;
