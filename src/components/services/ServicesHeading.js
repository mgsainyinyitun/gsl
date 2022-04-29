
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export default function ServicesHeading(){
    return(
        <div className="bg-gray-800 p-3 rounded-3xl w-4/6">
            <div>
                <FontAwesomeIcon icon={faGlobeAmericas}  className='text-white text-7xl'/>
            </div>
            <div>
                <p className="text-white text-lg">
                    Fugiat duis voluptate aliquip labore liqua deserunt irure.id consectetur. Sit eiusmod sint deserunt consequat .
                    n occaecat ut nostrud non dolore minim.
                </p>
            </div>
        </div>
    )
}