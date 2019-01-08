import React, { Component } from 'react';

import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit.css'
import classes from './App.css'



class App extends Component {
  state = {
    persons: [
      {name: 'Max' , age:28},
      {name: 'Manu' , age:29},
      {name: 'Stephanie' , age:26}
    ],
    showPersons: false //Boolean
  }

  togglePersonsHandler = ( event ) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  nameChangedHandler = (event) => {
    this.setState( { 
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Stephanie',age: 26} 
      ]  
    } ) 
  }
  switchNameHandler = () => { // this is a normal function aka method
    // console.log('was clicked!')
    this.setState( {persons: [ {name: 'Maximillan' , age:28}, {name: 'Manu' , age:29}, {name: 'Stephanie' , age:27} ]} )}
    
    
    render() {
      
    let persons = null;
    let btnClass= '';

    if( this.state.showPersons ) {
      persons = <Persons 
            persons={this.state.persons}
            clicked ={this.deletePersonHandler}
            changed ={this.nameChangedHandler}/>;
    }

    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons}
          persons = {this.state.persons}
          clicked ={this.togglePersonsHandler}/>
        {persons}
      </div>

    );
  }
}

export default    App;
