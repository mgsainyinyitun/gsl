import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

class Card extends React.Component{
    render(){
        return(
            <div className='border-2 border-green-700 rounded-3xl p-3'>
                <FontAwesomeIcon icon={this.props.icon} className='text-white text-4xl'/>
                <h3 className='text-white text-2xl'>{this.props.title}</h3>
                <p>{this.props.info}</p>
            </div>
        )
    }
}

export default Card;