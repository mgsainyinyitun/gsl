import { Form } from 'antd';
import React from 'react';

class ContactForm extends React.Component{

    render(){
        return(
            <>
            <div>Contact Form</div>
            <Form>
                <input type={'text'} />
                <input type={'email'} />
            </Form>
            </>
        )
    }
}

export default ContactForm;