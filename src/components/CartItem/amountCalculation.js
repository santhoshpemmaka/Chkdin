// calculate total price of the cart items.
export const totalPrice = (data) => {
	let resultTotal = data?.inCartItems.reduce(
		(accu, curr) => accu + Number(curr.actualCost) * curr.count,
		0
	);
	return resultTotal;
};

// calculate discount price of the cart items.
export const discountPrice = (data) => {
	let resultTotal = data?.inCartItems.reduce(
		(accu, curr) =>
			accu + (Number(curr.actualCost) - Number(curr.discountCost)) * curr.count,
		0
	);
	return resultTotal;
};
