import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

class Card extends React.Component{
    render(){
        return(
            <div className='group border-2 m-1 border-gray-900 rounded-3xl p-3 flex'>
                <FontAwesomeIcon icon={this.props.icon} className='text-white text-8xl mr-5'/>
                <div className="flex flex-col">
                    <h3 className='text-white text-2xl'>{this.props.title}</h3>
                    <p>{this.props.info}</p>

                    <div className="hidden group-hover:block">
                        {this.props.detail || ''}
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;