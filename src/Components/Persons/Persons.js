import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
    constructor( props ) {
        super( props );
        console.log( '[Persons.js] Inside Constructor', props );
        this.lastPersonRef = React.createRef();  // this makes it easier to use ref() through out this component.
    }

    componentWillMount () {
        console.log( '[Persons.js] Inside componentWillMount()' );
    }

    componentDidMount () {
        console.log( '[Persons.js] Inside componentDidMount()' );
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps ( nextProps ) {
        console.log( '[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps );
    }

    // shouldComponentUpdate ( nextProps, nextState ) {
    //     console.log( '[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState );
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    //     // return true;
    // }

    componentWillUpdate ( nextProps, nextState ) {
        console.log( '[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState );
    }

    componentDidUpdate () {
        console.log( '[UPDATE Persons.js] Inside componentDidUpdate' );
        this.lastPersonRef.current.focus()
    }

    render () {
        console.log( '[Persons.js] Inside render()' );
        return this.props.persons.map( ( person, index ) => {
            return <Person
                click={() => this.props.clicked( index )}
                name={person.name}
                age={person.age}
                ref={this.lastPersonRef} // gives access to the Peson component 
                key={person.id}
                changed={( event ) => this.props.changed( event, person.id )} />
        } );
    }
}

export default Persons;