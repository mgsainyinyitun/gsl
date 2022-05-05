import React from "react";

import Button from '../../components/basics/Button';
class PartnerCover extends React.Component{

    render(){
        return(
            <div className="w-full img-partner-cover">
               <div className="flex flex-col md:items-end items-center m-5 mt-10">
                   <div className="bg-gray-800 md:w-3/6 w-full sm:4/6 m-5 rounded-3xl p-5 opacity-90 ">
                        <h1 className="text-white text-4xl uppercase">Let innovate together.</h1>
                        <p className="text-xl text-white">Do eu nostrud proident quis tempor enim consectetur aliqua voluptate aliqua in ea aliquip.</p>
                        <Button text='BECOME A PARTNER'/>
                   </div>
               </div>
            </div>
        )
    }
}

export default PartnerCover;