import { faArchway } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

class Footer extends React.Component{

    render(){
        return(
            <footer className="w-full border-2 border-red-700 bg-gray-900 mt-20">
                <div className="flex  justify-around text-white">
                    <div className="border-2">
                        <p>abcd</p>
                        <p>defg</p>
                        <p>hijk</p>
                    </div>
                    <div className="border-2">
                        <p>abcd</p>
                        <p>defg</p>
                        <p>hijk</p>
                    </div>
                    <div className="border-2">
                        <p>abcd</p>
                        <p>defg</p>
                        <p>hijk</p>
                    </div>
                </div>

                <div>
                    <FontAwesomeIcon icon={faArchway} className='text-white text-7xl' />
                    <FontAwesomeIcon icon="fa-brands fa-youtube"  className="text-white text-7xl"/>
                </div>

                <div className="h-10 bg-black w-full">

                </div>

            </footer>
        );
    }
}

export default Footer;