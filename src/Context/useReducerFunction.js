import products from "./DummyData.json";

// Initial State of the E-commerce Application

export const initialState = {
	products: products,
	sortByPrice: "",
	sortByRating: "",
	inCartItems: [],
	inWishlistItems: [],
	searchText: "",
};

// reducer Function of the Application

const useReducerFunction = (state = initialState, action) => {
	switch (action.type) {
		case "SORT_PRICE":
			return {
				...state,
				sortByPrice: action.payload,
			};
		case "SORT_RATING":
			return {
				...state,
				sortByRating: action.payload,
			};

		case "CLEAR_ALL":
			return {
				...state,
				sortByPrice: "",
				sortByRating: "",
			};

		case "ADD_CART":
			return {
				...state,
				inCartItems: [...state.inCartItems, action.payload],
			};

		case "ADD_WISHLIST": {
			return {
				...state,
				inWishlistItems: [...state.inWishlistItems, action.payload],
			};
		}

		case "INCREMENT_COUNT":
			console.log("increment reached");
			return {
				...state,
				inCartItems: state?.inCartItems.map((cartItem) =>
					cartItem.id === action.payload.id
						? {...cartItem, count: cartItem.count + 1}
						: {...cartItem}
				),
			};

		case "DECREMENT_COUNT":
			return {
				...state,
				inCartItems: state?.inCartItems.map((cartItem) =>
					cartItem.id === action.payload.id
						? {...cartItem, count: cartItem.count - 1}
						: {...cartItem}
				),
			};

		case "REMOVE_ITEM":
			return {
				...state,
				inCartItems: state?.inCartItems.filter(
					(cartItem) => cartItem.id !== action.payload.id
				),
			};

		case "REMOVE_ITEM_WISHLIST":
			return {
				...state,
				inWishlistItems: state?.inWishlistItems.filter(
					(wishItem) => wishItem.id !== action.payload.id
				),
			};

		case "SEARCH_TEXT":
			return {
				...state,
				searchText: action.payload,
			};
		default:
			return {...state};
	}
};

export {useReducerFunction};
