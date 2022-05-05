import React  from "react";


class AboutCover extends React.Component{
    render(){
        return(
            <div className="img-company-cover flex justify-center items-center p-3">
                 <div className="m-auto bg-gray-800 opacity-80 p-5 rounded-3xl">
                       <h1 className="uppercase text-white text-5xl">Our company</h1>
                       <p className="text-white text-xl">Pariatur culpa ut fugiat et qui ut velit consectetur velit occaecat nisi ullamco irure.</p>
                </div>
            </div>
        )
    }
}

export default AboutCover;