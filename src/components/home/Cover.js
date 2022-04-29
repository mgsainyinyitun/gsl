import Button  from "./../basics/Button";
import React from "react";


class Cover extends React.Component{
    render(){
        return(
            <div>
                <div className='background-image flex justify-center flex-col' >
                    <div className="text-white border-4 ml-80 mr-80 p-20 rounded-3xl transition  duration-300 hover:-translate-x-3 hover:shadow-2xl">

                        <h1 className="text-5xl text-white m-3 font-extrabold border-b-8 p-3 mb-3">GLOBAL SECURITY LIGHT</h1>
                        <h3 className="text-2xl text-white m-3">company services lists go here</h3>
                        <div className="mt-10 flex justify-center">

                        <Button text="CONTACT US"/>
                        <Button text="SERVICES"/> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cover;
