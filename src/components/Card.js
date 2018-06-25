import React from 'react';


const Card = ({ name, hairColor, eyeColor }) => {
	/* the parantheses denote paramterization while the curly brackets
	denote that we are destructuring the properties of Card as passed
	down by definition from CardList. */
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<h2>{name}</h2>
			<p>{hairColor}</p>
			<p>{eyeColor}</p>
		</div>
	);
}

/* In JSX, the properties must be wrapped in curly brackets */

export default Card;