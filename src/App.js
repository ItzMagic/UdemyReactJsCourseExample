import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import Radium, { StyleRoot } from 'radium'


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
    const style = {
      backgroundColor: 'green',
      color: '#000',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        background: 'lightgreen',
        color:'black'
      }
    };

    let persons = null;

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
      
      style.backgroundColor = 'red';
      style[':hover']= {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes =[];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = [red]

    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }
    return (
      <StyleRoot>
      <div className="App App-header">
        <h1> Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
          <button onClick = { this.togglePersonsHandler} style={style} >Toggle Persons</button>
          {persons}
        
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
