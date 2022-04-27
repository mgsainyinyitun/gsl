import React from "react";
import ContactForm from "../contact/ContactForm";
import Cover from "./Cover";
import Customer from "./Customer";
import Services from "./Services";

class Home extends React.Component{
    render(){
        return(
            <>
                <Cover/>
                <div className="flex justify-center">
                    <div className="w-4/6 border-2">
                        <Customer/>
                        <Services/>
                        <ContactForm />
                    </div>
                </div>
                
            </>
        )
    }
}
export default Home;