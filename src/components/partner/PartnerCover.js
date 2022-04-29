import React from "react";

import Button from '../../components/basics/Button';
class PartnerCover extends React.Component{

    render(){
        return(
            <div className="w-full img-partner-cover">
               <div className="flex flex-col items-end mr-10 mt-10">
                   <div className="bg-gray-800 w-3/6 rounded-3xl p-5 opacity-90 pr-20">
                        <h1 className="text-white text-6xl uppercase">Let innovate together.</h1>
                        <p className="text-xl text-white">Do eu nostrud proident quis tempor enim consectetur aliqua voluptate aliqua in ea aliquip.</p>
                        <Button text='BECOME A PARTNER'/>
                   </div>
               </div>
            </div>
        )
    }
}

export default PartnerCover;