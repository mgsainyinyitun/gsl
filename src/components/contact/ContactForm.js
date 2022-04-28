import { Form } from 'antd';
import React from 'react';

class ContactForm extends React.Component{

    render(){
        return(
            <>
            <div className='flex justify-center'>
                <div className='w-3/6'>
                    <h1 className='text-3xl'>Contact Form</h1>
                    <form>
                        <div>
                            <input className='border-2 h-10 rounded-3xl border-teal-500' type={'text'} />
                        </div>
                        <div>
                            <input className='border-2 h-10 rounded-3xl border-teal-500' type={'text'} />
                        </div>
                        <div>
                            <textarea className='border-2 rounded-3x border-teal-500 h-36'>
                                abcd
                            </textarea>
                        </div>
                    </form>
                </div>
            </div>
            </>
        );
    }
}

export default ContactForm;