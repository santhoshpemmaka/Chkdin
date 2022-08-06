// Data sorting based on the sort by price.
export const sortByPrice = (state, data) => {
	if (state.sortByPrice === "HIGH_TO_LOW_PRICE") {
		const result = [...data].sort((product1, product2) => {
			return Number(product2.discountCost) - Number(product1.discountCost);
		});
		return result;
	}
	if (state.sortByPrice === "LOW_TO_HIGH_PRICE") {
		const result1 = [...data].sort((product1, product2) => {
			return Number(product1.discountCost) - Number(product2.discountCost);
		});
		return result1;
	}
	return data;
};

// Data sorting based on the sort by rating.

export const sortByRating = (state, data) => {
	if (state.sortByRating === "HIGH_TO_LOW_RATING") {
		const result = [...data].sort((product1, product2) => {
			return Number(product2.rating) - Number(product1.rating);
		});
		return result;
	}
	if (state.sortByRating === "LOW_TO_HIGH_RATING") {
		const result1 = [...data].sort((product1, product2) => {
			return Number(product1.rating) - Number(product2.rating);
		});
		return result1;
	}
	return data;
};

// Search by text of the products.

export const getSearchData = (state) => {
	let newData = state.products;
	if (state.searchText?.length > 0) {
		newData = newData.filter(
			(data) =>
				data.name.toLowerCase().includes(state?.searchText?.toLowerCase()) ||
				data.brand.toLowerCase().includes(state?.searchText?.toLowerCase())
		);
	}
	return newData;
};
