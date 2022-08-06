import React, {useState} from "react";
import "./Header.scss";
import {Link} from "react-router-dom";
import {useData} from "../../Context/DataContext";
// Header Component

const Header = () => {
	const [searchText, setsearchText] = useState();
	const {state, dispatch} = useData();
	return (
		<div className='header-container'>
			<Link to='/' className='left-side'>
				<h2 className='header-name'>Shoping</h2>
			</Link>
			{/* Search bar of the E-commerce Application */}
			<input
				type='text'
				className='serach-text'
				value={searchText}
				onChange={(e) => {
					setsearchText(e.target.value);
					dispatch({type: "SEARCH_TEXT", payload: searchText});
				}}
				placeholder='Search product name'
			/>
			<div className='right-side'>
				<Link to='/wishlist' className='link-tag'>
					<h2>WishList</h2>
				</Link>
				<Link to='/cartitems' className='link-tag'>
					<h2>Cart</h2>
				</Link>
			</div>
		</div>
	);
};

export default Header;
