import React from "react";
import ProductListing from "../ProductListing/ProductListing";
import Navbar from "../Navbar/Navbar";
import "./ProductPage.scss";
const ProductPage = () => {
	// Main Page of the Application.
	return (
		<div className='productpage-container'>
			<Navbar />
			<ProductListing />
		</div>
	);
};

export default ProductPage;
