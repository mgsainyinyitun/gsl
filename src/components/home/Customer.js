import { faBatteryCar, faEarth, faEarthAfrica } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


class Customer extends React.Component{
    render(){
        return(
            <div className='mt-10 flex flex-col items-center'>
                <div className='flex flex-col items-center mb-10 mt-10'>
                    <h1 className='text-3xl font-light text-white'>EXPERIENCE YOU CAN TRUST</h1>
                    <h3 className='text-white'>OVER 50 YEARS COMBINED OF EXPERT SECURITY IT & TELECOME SERVICES </h3>
                </div>

                <div className='w-full p-2 m-5 bg-gray-800 rounded-b-lg'>
                    <span className='text-3xl uppercase text-white font-extrabold'>Our Customers</span>
                </div>
                
                <div className='flex justify-center mt-10 mb-10'>
                    <FontAwesomeIcon icon={faBatteryCar} className='text-9xl m-2 mr-14' />
                    <FontAwesomeIcon icon={faEarthAfrica} className='text-9xl m-2 mr-14' />
                    <FontAwesomeIcon icon={faBatteryCar} className='text-9xl m-2' />
                </div>
                <div className='flex  justify-center mt-10 mb-10 w-4/5'>
                    <FontAwesomeIcon icon={faBatteryCar} className='text-9xl m-2 mr-14' />
                    <FontAwesomeIcon icon={faEarth} className='text-9xl m-2' />
                </div>
                <div className='flex justify-center mt-10 mb-10 w-4/5'>
                    <FontAwesomeIcon icon={faBatteryCar} className='text-9xl m-2 mr-14' />
                    <FontAwesomeIcon icon={faEarthAfrica} className='text-9xl m-2 mr-14' />
                    <FontAwesomeIcon icon={faBatteryCar} className='text-9xl m-2' />
                </div>

                <h3 className='text-lg'>Any many more ...</h3>
            </div>
        )
    }
}

export default Customer;