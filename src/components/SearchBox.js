import React from 'react';


const SearchBox = ({searchfield, searchChange}) => {
/* we are creating an object called SearchBox that flows to APP object
and uses two properties as parameters in the function */
	return(
		<div className="pa2">
			<input 
				className="pa3 ba b--green bg-lightest-blue"
				type='search' 
				placeholder='search robots'
				onChange={searchChange}
			/>
		</div>

	);
}

export default SearchBox;

/*searchChange is how this child communicates with the parent and
once you run the searchChange function in the parent, it now has
the value that can then be communicated downward to the CardList*/