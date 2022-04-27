import React from 'react';


class Customer extends React.Component{
    render(){
        return(
            <div className='mt-10 flex flex-col items-center'>
                <h1 className='text-3xl mb-5'>Our Customers</h1>
                <div className='flex  justify-around'>
                    <img width={'20%'} src='https://www.pngitem.com/pimgs/m/247-2477379_transparent-background-cartoon-house-png-png-download.png'/>
                    <img  width={'20%'} src='https://www.pngitem.com/pimgs/m/247-2477379_transparent-background-cartoon-house-png-png-download.png'/>
                    <img  width={'20%'} src='https://www.pngitem.com/pimgs/m/247-2477379_transparent-background-cartoon-house-png-png-download.png'/>
                </div>
                <div className='flex  justify-around mt-5 w-4/5 border-2'>
                    <img width={'20%'} src='https://www.pngitem.com/pimgs/m/247-2477379_transparent-background-cartoon-house-png-png-download.png'/>
                    <img  width={'20%'} src='https://www.pngitem.com/pimgs/m/247-2477379_transparent-background-cartoon-house-png-png-download.png'/>
                </div>
                <h3 className='text-2xl'>Any many more ...</h3>
            </div>
        )
    }
}

export default Customer;