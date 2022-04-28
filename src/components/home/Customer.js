import React from 'react';


class Customer extends React.Component{
    render(){
        return(
            <div className='mt-10 flex flex-col items-center'>
                <div className='flex flex-col items-center mb-10 mt-10'>
                    <h1 className='text-3xl font-light text-gray-800'>EXPERIENCE YOU CAN TRUST</h1>
                    <h3 className='text-gray-800'>OVER 50 YEARS COMBINED OF EXPERT SECURITY IT & TELECOME SERVICES </h3>
                </div>

                <div className='w-full p-2 m-5 bg-black '>
                    <span className='text-3xl uppercase text-white font-extrabold'>Our Customers</span>
                </div>
                
                <div className='flex justify-center mt-10 mb-10'>
                    <img className='rounded-full m-5' width={'20%'} src='https://www.pngitem.com/pimgs/m/247-2477379_transparent-background-cartoon-house-png-png-download.png'/>
                    <img className='rounded-full m-5' width={'20%'} src='https://www.pngitem.com/pimgs/m/247-2477379_transparent-background-cartoon-house-png-png-download.png'/>
                    <img className='rounded-full m-5' width={'20%'} src='https://www.pngitem.com/pimgs/m/247-2477379_transparent-background-cartoon-house-png-png-download.png'/>
                </div>
                <div className='flex  justify-center mt-10 mb-10 w-4/5'>
                    <img className='rounded-full m-5' width={'20%'} src='https://www.pngitem.com/pimgs/m/247-2477379_transparent-background-cartoon-house-png-png-download.png'/>
                    <img className='rounded-full m-5' width={'20%'} src='https://www.pngitem.com/pimgs/m/247-2477379_transparent-background-cartoon-house-png-png-download.png'/>
                </div>
                <div className='flex justify-center mt-10 mb-10 w-4/5'>
                    <img className='rounded-full m-5' width={'20%'} src='https://www.pngitem.com/pimgs/m/247-2477379_transparent-background-cartoon-house-png-png-download.png'/>
                    <img className='rounded-full m-5' width={'20%'} src='https://www.pngitem.com/pimgs/m/247-2477379_transparent-background-cartoon-house-png-png-download.png'/>
                    <img className='rounded-full m-5' width={'20%'} src='https://www.pngitem.com/pimgs/m/247-2477379_transparent-background-cartoon-house-png-png-download.png'/>
                </div>

                <h3 className='text-lg'>Any many more ...</h3>
            </div>
        )
    }
}

export default Customer;