import React from "react";
import "./ProductListing.scss";
import {useData} from "../../Context/DataContext";
import ProductCard from "./ProductCard";
import {sortByPrice, sortByRating, getSearchData} from "./dataFilter";

const ProductListing = () => {
	const {state} = useData();
	const {products} = state;
	const searchData = getSearchData(state);
	const filterPrice = sortByPrice(state, searchData);
	const filterData = sortByRating(state, filterPrice);
	// Listing of the products.
	return (
		<div className='productlisting-container'>
			<div className='spacer-3rem'></div>
			<div className='grid-3-columnlayout'>
				{filterData.length > 0 ? (
					filterData.map((product) => (
						<ProductCard product={product} key={product.id} />
					))
				) : (
					<h1 className='no-items-filter'>
						Particular filter has no products. Try other filter :)
					</h1>
				)}
			</div>
			<div className='spacer-3rem'></div>
		</div>
	);
};

export default ProductListing;
