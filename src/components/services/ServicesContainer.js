import React from "react";
import Button from "../basics/Button";


class ServicesContainer extends React.Component{


    render(){
        return(
            <div className="flex sm:flex-row bg-gray-800 mt-10 rounded-3xl overflow-hidden mx-auto flex-col">
                <div className="card-width">
                  <img className="bg-center h-full object-cover bg-cover bg-no-repeat bg-fixed" src={this.props.image}  alt="cctv image"/>  
                </div>
                
                <div className="text-white p-3 w-full">
                    <h3 className="text-white text-3xl">{this.props.title}</h3>
                    <p>{this.props.paragraph}</p>
                    <Button text="CALL" />
                </div>
            </div>
        )
    }
}

export default ServicesContainer;