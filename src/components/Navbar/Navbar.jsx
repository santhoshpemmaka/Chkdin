import React from "react";
import {useData} from "../../Context/DataContext";
import "./Navbar.scss";
const Navbar = () => {
	const {state, dispatch} = useData();
	const sortByPrice = (e) => {
		dispatch({type: "SORT_PRICE", payload: e.target.value});
	};
	const sortByRating = (e) => {
		dispatch({type: "SORT_RATING", payload: e.target.value});
	};
	// Filter Component of the Applications.
	return (
		<div className='navbarfilter-container'>
			<div className='category-labels'>
				<label className='category-heading'>FILTERS</label>
				<button
					onClick={() => {
						dispatch({type: "CLEAR_ALL"});
					}}
					className='category-heading1'>
					CLEAR ALL
				</button>
			</div>
			<div className='navbarfilter-price'>
				<h3 className='navbarfilter-sort'>SORT PRICE</h3>
				<div className='navbarfilter-display'>
					<label className='navbarfilter-label'>
						<input
							className='navbarfilter-checkbox'
							type='radio'
							name='sort_price'
							value='HIGH_TO_LOW_PRICE'
							onChange={(e) => sortByPrice(e)}
							checked={"HIGH_TO_LOW_PRICE" === state.sortByPrice}
						/>
						Price High to Low
					</label>
				</div>
				<div className='navbarfilter-display'>
					<label className='navbarfilter-label'>
						<input
							className='navbarfilter-checkbox'
							type='radio'
							name='sort_price'
							value={"LOW_TO_HIGH_PRICE"}
							onChange={(e) => sortByPrice(e)}
							checked={"LOW_TO_HIGH_PRICE" === state.sortByPrice}
						/>
						Price Low to High
					</label>
				</div>
			</div>
			<div className='navbar-filter-line'></div>
			<div className='navbarfilter-price'>
				<h3 className='navbarfilter-sort'>SORT RATING</h3>
				<div className='navbarfilter-display'>
					<label className='navbarfilter-label'>
						<input
							className='navbarfilter-checkbox'
							type='radio'
							name='sort_rating'
							value='HIGH_TO_LOW_RATING'
							onChange={(e) => sortByRating(e)}
							checked={"HIGH_TO_LOW_RATING" === state.sortByRating}
						/>
						Price High to Low
					</label>
				</div>
				<div className='navbarfilter-display'>
					<label className='navbarfilter-label'>
						<input
							className='navbarfilter-checkbox'
							type='radio'
							name='sort_rating'
							value={"LOW_TO_HIGH_RATING"}
							onChange={(e) => sortByRating(e)}
							checked={"LOW_TO_HIGH_RATING" === state.sortByRating}
						/>
						Price Low to High
					</label>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
