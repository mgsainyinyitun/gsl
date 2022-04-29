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
                <div className="flex justify-center text-white m-0 p-0">
                    <div className="w-3/6">
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