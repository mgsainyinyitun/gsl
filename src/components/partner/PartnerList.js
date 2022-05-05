import React from "react";
import DAHUA from '../../images/vendor/dahua.jpg';

class PartnerList extends React.Component{
    render(){
        return(
            <>
                 <h1 className='text-5xl uppercase mt-20 text-white border-b-8 border-green-800 pb-10'>our Partner</h1>

                <div className=' w-5/6 md:w-4/6 p-5  flex mt-10 mb-10  justify-between flex-col-reverse md:flex-row items-center'>
                    <div className='text-white ml-10 md:w-1/2'>
                        <h1 className='text-white text-5xl'>Exercitation deserunt enim ut amet.</h1>
                        <p>Laborum do nostrud veniam ex excepteur ea ut deserunt sit. Nisi esse laboris cupidatat est velit qui. Cillum sit et labore minim laborum ut tempor id est consequat proident ut ad. Sunt ea ad dolor et exercitation anim enim commodo irure nulla do excepteur ut. Aliqua aliquip excepteur cillum est mollit laboris sunt do minim nisi </p>
                    </div>
                
                    <div className="">
                        <img src={DAHUA} className='rounded-full'/>
                    </div>
                    
                </div>

                <div className='w-4/6 p-5  flex mt-10 mb-10 justify-between flex-col md:flex-row items-center'>
                    <div>
                        <img src={DAHUA} className='rounded-full'/>
                    </div>

                    <div className='text-white ml-10 md:w-1/2'>
                        <h1 className='text-white text-5xl'>Exercitation deserunt enim ut amet.</h1>
                        <p>Laborum do nostrud veniam ex excepteur ea ut deserunt sit. Nisi esse laboris cupidatat est velit qui. Cillum sit et labore minim laborum ut tempor id est consequat proident ut ad. Sunt ea ad dolor et exercitation anim enim commodo irure nulla do excepteur ut. Aliqua aliquip excepteur cillum est mollit laboris sunt do minim nisi </p>
                    </div>
                </div>

                <div className=' w-4/6 p-5  flex mt-10 mb-10 justify-between flex-col-reverse md:flex-row items-center'>
                    <div className='text-white ml-10 md:w-1/2'>
                        <h1 className='text-white text-5xl'>Exercitation deserunt enim ut amet.</h1>
                        <p>Laborum do nostrud veniam ex excepteur ea ut deserunt sit. Nisi esse laboris cupidatat est velit qui. Cillum sit et labore minim laborum ut tempor id est consequat proident ut ad. Sunt ea ad dolor et exercitation anim enim commodo irure nulla do excepteur ut. Aliqua aliquip excepteur cillum est mollit laboris sunt do minim nisi </p>
                    </div>
                    <div>
                        <img src={DAHUA} className='rounded-full'/>
                    </div>
                    
                </div>   
            </>
        )
    }
}

export default PartnerList;