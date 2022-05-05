import { Form } from 'antd';
import React from 'react';
import Button from '../basics/Button'

class ContactForm extends React.Component{

    render(){
        return(
            <>
            <div className='w-full p-2 mb-5 mt-5 bg-gray-800 '>
                <span className='text-3xl uppercase text-white font-extrabold'>contact Us</span>
            </div>

            <div className='flex justify-center  '>

                <div className='sm:w-4/6 border-2 border-gray-900 rounded-3xl p-3 shadow-lg bg-transparent'>
                    <h1 className='text-3xl uppercase text-white'>Contact Form</h1>
                    <form>
                        <div>
                            <input className='hover:bg-gray-800 bg-gray-700 border-2 h-10 w-full rounded-lg border-gray-900 m-1' type={'text'} />
                        </div>
                        <div>
                            <input className='hover:bg-gray-800 bg-gray-700 border-2 h-10 w-full rounded-lg border-gray-900 m-1' type={'text'} />
                        </div>
                        <div>
                        <textarea className='hover:bg-gray-800 bg-gray-700 border-2 h-36 w-full rounded-lg border-gray-900 m-1'>
                                
                        </textarea>
                        </div>

                        <Button text='SUBMIT' />
                    </form>
                </div>
            </div>
            </>
        );
    }
}

export default ContactForm;