import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
/* Add css for each individual component */

class App extends Component { /*standard syntax that comes with React */
/************** DEFINING STATE CONDITIONS *****************************/
	/*State A: Initializing the state of the app at the beginning, 
	this is the first lifecycle hook in a REACT app, mounting*/
	constructor() {
		super()
		this.state = { /*this refers to App object here and its state */
			chars: [],
			searchfield: ''
		}
		console.log('1');
	}
	/*State B: Changing state of the app to fill in character content
	running after the initial render method*/
	componentDidMount() {
		fetch('https://swapi.co/api/people')
		.then(response=> response.json())
		.then(people=> {this.setState({chars: people})});
	}
	/*State C: Changes state of the app *conditioned* on changes to searchfield
	Arrow function is needed for non-React defined functions*/
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
		
	}
/************** DISPLAYING  *****************************/
	render() {   /*Mandatory function to render what should be viewed*/
		const { chars, searchfield } = this.state;
		/* destructuring the state of the APP  and putting in a variable so changes to state cascade*/
		const filteredChar = chars.filter(char => {
			return char.name.toLowerCase().includes(searchfield.toLowerCase()); /*A clean function must return something */
		})
		console.log('3');
			return !chars.length ?
				<h1>Loading</h1> :
			( /*the return must wrap ONE element */
				<div className="tc">
					<h1 className="f2">Star People</h1>
					<SearchBox searchChange = {this.onSearchChange} /> 
					{/*SearchBox is a component object that has a property 
					defined as a searchChange that refers to a function 
					defined within the APP object.  The property represents
					a change in state of the app* that sets searchfield
					value to most current value, then cascading to update
					filteredChar variable*/}
					<Scroll>
						<CardList charNew={filteredChar}/>
						{/*Inserting the filtered list as a property
						cascades down to only show chars that meet the
						criteria*/}
					</Scroll>
				</div>
			);	
	}
}

/*In JSX portion of app, non-HTML tags are component names */
/*Properties are created for component objects and are shareable between files*/
/*Class APP is one giant function (or world) with functions inside of it */
/*Destructuring makes coding cleaner; no need to restate object name*/
/*Every function should RETURN something */
/*State is an object describes application at a given time, able to change*/
/*This page is a smart component, typically a parent component, that sets state changes*/
/*A parent feeds STATE into CHILD, and this becomes a property*/
/*Each time state changes, render() is ran again, re-painting browser view*/




export default App;
/*Default indicates we are only exporting one thing, this component*/