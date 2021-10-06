import React from 'react';
import Header from './../components/Header';

import { useGlobalContext } from './../utils/context';
import SetUpForm from './../components/SetUpForm';
import Modal from './../components/Modal';
import Loader from './../components/Loader';

function App() {
	//**************** variables ****************//
    const {
			waiting,
			loading,
			questions,
			index,
			correct,

		} = useGlobalContext();

      if (waiting) {
			return(
        <Header>
          <SetUpForm/>
        </Header>
      );
		}
		if (loading) {
			return(
        <Header>
          <Loader />
        </Header>
      );
		}
	return (
		<Header>
      <main id='main-container' className='container'>
        <h2>This is main component</h2>
      </main>
    </Header>
	);
}

export default App;
