import React from 'react';

class Button extends React.Component{


    render(){
        return(
            <button className='bg-gray-700 border-2 border-gray-700 p-3 rounded-3xl w-40 mr-5'>
                {this.props.text}
            </button>
        )
    }
}
export default Button;