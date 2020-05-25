/*
  TODO: Edit by Kehinde Faleye
  Create states for the following required variables:
  => Username -- The name of the user. To appear on the app
  => Email -- The email of users. To be used to identify a particular user
  => Logged_In status -- To serve as session for the user
*/
/*
  This file is used to provide context a.k.a global state for the whole app
  Therefore some props do not be passed and all currently rendered components could 
  Respond to state change without forcing a re-render
*/
import React from 'react';

// Our context
let Context = React.createContext({});

// The initial context state. Any global state can be added here
let initialContextState = {
  username: '',
  email: '',
  isLoggedIn: false
};

// Now, let's set our reducer. The reducer is for changing the state.
// Every component can change the state using the reducer
// Check react's doc for more info if needed
// Please Note: Don't modify the state directly as they should be immutable and it wouldn't force a render.
// Instead, create a clone of the state,
// Moodify that and return it.
let reducer = (state, action) => {
	switch(action.type) {
		case 'setLoggedIn': {
			// This action type would set the state of the user. Either logged in or not
			// Set to true for logged in and false for logged out
			// The state param for this object should be a boolean value true or false
			let newState = Object.assign({},state);
			newState.isLoggedIn = action.payload;
			return newState;
		}

		case 'setEmail': {
			// This action type would set the email of the user.
			// The state param for this object should be a string representing the email
			let newState = Object.assign({},state);
			newState.email = action.payload;
			return newState
		}
		
  case 'setUsername': {
			// This action type would set the username of the user.
			// The state param for this object should be a string representing the username
  	let newState = Object.assign({},state);
  	newState.username = action.payload;
  	return newState;
  }

  default: // In case
  	throw new Error();
	}
}

// Now to set up the context provider. This function would setup the context on every component that imports it
// Reducing code space and abstracting implementation
function ContextProvider(props){
	// Set up the the reducer
	const [ state, dispatch ] = React.useReducer(reducer, initialContextState);
	// We will set up a default value to export to consumers
	let value = { state, dispatch };

	// Let's return the Context
	return (
			<Context.Provider value={value}>
				{ props.children }
			</Context.Provider> 
		);
}

// Export the function component. This component would be placed in the app component.
// All routes would be placed as childre. This way, all routes that imports it's value 
// props would have access to the global state. Check the dashboard component for an example on how to use it 
// The contextProvider wraps all route so that they have access to the state as said
export { Context, ContextProvider };