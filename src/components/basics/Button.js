import React from 'react';

class Button extends React.Component{


    render(){
        return(
            <button className='transition  duration-300 bg-gray-700 border-2 border-gray-700 p-3 rounded-3xl w-40 mr-5 hover:shadow-2xl hover:scale-105'>
                {this.props.text}
            </button>
        )
    }
}
export default Button;