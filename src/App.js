import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './App.css';



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
      persons =(
        <div>
          { 
            this.state.persons.map((person,index) => {
            return <Person      
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person)} /> 
            }) 
          }
      </div>
      );
      btnClass = classes.Red;
      style.backgroundColor = 'red';
    }

    let classes =[];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = [red]

    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }
    return (
   
      <div className="App App-header">
        <h1> Hi, I'm a React App</h1>
        <p className={btnClass}>This is really working!</p>
          <button onClick = { this.togglePersonsHandler} className={btnClass}>Toggle Persons</button>
          {persons}
        
      </div>

    );
  }
}

export default    App;
