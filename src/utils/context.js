import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';

const table = {
	general: 9,
};

const tempURL =
	'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	//**************** variables ****************//
	const [waiting, setWaiting] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [index, setIndex] = useState(0);
	const [correct, setCorrect] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<AppContext.Provider
			value={{
				waiting,
				loading,
				error,
				questions,
				index,
				correct,
				isModalOpen,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

/***** make sure to use *****/
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
