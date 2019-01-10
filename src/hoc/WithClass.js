import React from 'react';

const withClass= (WrappedComponent, className) => {
    const WithClass = class extends Component 
        return () (props) => (
            <div className={className}>
            <WrappedComponent {...props} />
    }        </div>
    )
 }

/*
HOC RETURNING STATEFUL COMPONENT
----------------------------------------------------------------
const withClass = (WrappedComponent, className) => {
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props} />
                <div>
            )
        }
    }
}
*/
 export default withClass;