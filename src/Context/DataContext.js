import React, {createContext, useContext, useReducer} from "react";
import {initialState, useReducerFunction} from "./useReducerFunction";

const DataContext = createContext({});

// Implement Data Provider

const DataProvider = ({children}) => {
	const [state, dispatch] = useReducer(useReducerFunction, initialState);

	return (
		<DataContext.Provider value={{state, dispatch}}>
			{children}
		</DataContext.Provider>
	);
};

const useData = () => useContext(DataContext);

export {DataProvider, useData};
