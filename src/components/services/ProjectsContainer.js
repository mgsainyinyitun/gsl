import React from "react";
import Button from "../basics/Button";


class ProjectsContainer extends React.Component{


    render(){
        return(
            <div className="flex bg-gray-800 rounded-3xl overflow-hidden flex-col mx-auto">
                <img className="" src={this.props.image}  alt="cctv image"/>
                <div className="text-white p-3">
                    <h3 className="text-white text-3xl">{this.props.title}</h3>
                    <p>{this.props.paragraph}</p>
                    <Button text="CALL" />
                </div>
            </div>
        )
    }
}

export default ProjectsContainer;