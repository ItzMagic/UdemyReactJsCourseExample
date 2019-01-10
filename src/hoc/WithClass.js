import React, { Component }from 'react';

// import React from 'react';
// const withClass = (WrappedComponent, className) =>{
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     )
// }


// Below is a function that returns a class on demand and the class name doesn't matter.
const withClass = (WrappedComponent, className) => {
    const WithClass = class extends Component {
        render(){
            return(
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedREf} {...this.props} />
                </div>
           )
        }   
    }    
    return React.forwardRef(( props , ref )=> {
        return <WithClass {...props} forwardedREf ={ref} />;
    } );
}

export default withClass; 