import React from "react";
import ProjectsList from "./ProjectsList";
import ServicesHeading from "./ServicesHeading";
import ServicesList from "./ServicesList";



class MainServices extends React.Component{

    render(){
        return(
        <div className="mt-10 flex flex-col items-center">
            <ServicesHeading/>
            <ServicesList/>
            <ProjectsList/>
        </div>
        
        )
    }
}

export default MainServices;