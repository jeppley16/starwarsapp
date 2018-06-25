import React from 'react';
import Card from './Card';

const CardList = ({ charNew }) => {
	/* We are receiving props and destructuring right inside as parameter
	CardList has a chars property that receives filtered list*/
	return (
		<div>
			{
				charNew.map((people, i) => {
					return (
						<Card 
							key={i} 
							name={charNew[i].name} 
							hairColor={charNew[i].hair_color}
							eyeColor={charNew[i].eye_color}
						/>
					);	
				})
			}
		</div>
	);
}

/* A function is not an object */
/* This is a pure component -- it receives characters and will always do so,
therefore, we can set the property to something that changes those characters
yet still have the same functionality repeat itself in this component */

export default CardList;

