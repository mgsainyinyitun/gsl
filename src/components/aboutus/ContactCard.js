import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


class ContactCard extends React.Component{

    render(){
        return(
            <div className=" p-5 rounded-lg bg-gray-900 w-3/6">
                <div className="m-3">
                   <FontAwesomeIcon icon={faHome }  className='text-white text-3xl mr-3' /> 
                   <span className="text-white text-lg">Mandalay, Myanmar , NA XX XX XX XX </span>
                </div>
                <div className="m-3">
                   <FontAwesomeIcon icon={faPhone}  className='text-white text-3xl mr-3' /> 
                   <span className="text-white text-lg">+959 XXX XXX XXXX </span>
                </div>
                <div className="m-3">
                   <FontAwesomeIcon icon={faEnvelope }  className='text-white text-3xl mr-3' /> 
                   <span className="text-white text-lg"> xxx xxx xxx @ xxxmail.com </span>
                </div>
            </div>
        )
    }
}

export default ContactCard;