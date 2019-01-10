import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {
    constructor( props ) {
        super( props );
        console.log( '[Person.js] Inside Constructor', props );
        this.inputElement = React.createRef()
    }

    componentWillMount () {
        console.log( '[Person.js] Inside componentWillMount()' );
    }

    componentDidMount () {
        console.log( '[Person.js] Inside componentDidMount()' );
        // this.inputElement.focus();
    }
    focus() {
            this.inputElement.current.focus();
    }


    render () {
        console.log( '[Person.js] Inside render()' );
        return (
            <Aux className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref={(inp)=> { this.inputElement = inp }}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux>
        )
    }
}

Person.propsTypes = {
   click: PropTypes.func,
   name: PropTypes.string,
   age: PropTypes.number, 
   changed: PropTypes.func 
};


export default withClass(Person, classes.Person);