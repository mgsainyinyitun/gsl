import React from 'react';

class Button extends React.Component{


    render(){
        return(
            <button className='border-2 border-green-700 p-3 rounded-3xl w-40 mr-5'>
                {this.props.text}
            </button>
        )
    }
}
export default Button;