import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes/RoutesConstant";

class Footer extends React.Component{

    render(){
        return(
            <footer className="w-ful bg-gray-900 mt-20 rounded-t-3xl ">
                <div className="bg-gray-900 rounded-t-3xl hover:-translate-y-10 transition delay-100 duration-300">
                    <div className="flex  justify-around text-white mt-16">
                        <div className="mt-16">
                            <h3 className="text-white text-lg">QUICK LINK</h3>
                            <p><Link to={ROUTES.HOME} ><FontAwesomeIcon icon={faAngleRight} /> HOME</Link> </p>
                            <p><Link to={ROUTES.SERVICES} ><FontAwesomeIcon icon={faAngleRight} /> SERVICES</Link> </p>
                            <p><Link to={ROUTES.PARTNER} ><FontAwesomeIcon icon={faAngleRight} /> PARTNER</Link> </p>
                            <p><Link to={ROUTES.ABOUTUS} ><FontAwesomeIcon icon={faAngleRight} /> ABOUT US</Link> </p>
                        </div>
                        <div className="mt-16">
                            <h3 className="text-white text-lg">Contact</h3>
                            <p>Pone : +959XXXXX XXX </p>
                            <p>E-mail: xxxxxxxxxx@gmail.com</p>
                            <p>Address : Mandalay, Myanmar </p>
                        </div>
                        <div className="mt-16">
                            <h3 className="text-white text-lg">SERVICES</h3>
                            <p>CCTV</p>
                            <p>PBX PHONE SYSTEM</p>
                            <p>FIRE ALARM SYSTEM</p>
                            <p>NETWORKING</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-center m-3 mb-9">
                        <div className="flex w-1/5 justify-around">
                            <FontAwesomeIcon icon={faFacebook} className='text-white text-3xl' />
                            <FontAwesomeIcon icon={faTwitter} className='text-white text-3xl' />
                            <FontAwesomeIcon icon={faYoutube} className='text-white text-3xl' />
                            <FontAwesomeIcon icon={faLinkedin} className='text-white text-3xl' />
                        </div>
                    </div>
                    </div>

                    <div className=" bg-black w-full flex justify-center p-3">
                        <p className="text-white">Copyright © 2022 Global Security Light</p>
                    </div>
                

            </footer>
        );
    }
}

export default Footer;