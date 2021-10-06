import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';


const table = {
   general: 9
}

const tempURL =
	'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

/***** make sure to use *****/
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
