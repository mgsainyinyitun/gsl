import React from "react";
import AboutCover from "./AboutCover";
import ContactCard from "./ContactCard";
import GoogleMap from "./GoogleMap";


class AboutUs extends React.Component{

    render(){
        return(
            <div className="w-full">
                <AboutCover/>
                
                 <div className="flex flex-col w-full items-center mt-36 p-5">
                     <div className=" md:w-3/6 w-full">
                         <div className="flex justify-center">
                            <h1 className="text-5xl text-white border-b-4 border-b-green-700">our vision
                            </h1>
                         </div>
                        <p className="text-white">Ex consectetur qui ad deserunt. Ea reprehenderit anim minim do. Cupidatat labore ex id amet occaecat esse. Sint laboris commodo occaecat sint duis occaecat officia et et. Reprehenderit tempor ad nostrud sint pariatur ad reprehenderit anim pariatur ullamco dolor ex. Duis commodo duis cillum elit eiusmod esse. Consectetur dolore ex laborum aute qui.Consequat voluptate non occaecat laborum pariatur tempor consectetur incididunt duis. Deserunt anim ea commodo commodo exercitation nostrud commodo aute eiusmod cupidatat. Veniam veniam mollit ut esse occaecat eu ex cupidatat sint non adipisicing.</p>
                     </div>
                 </div>


                 <div className="flex flex-col w-full items-center p-5">
                     <div className="md:w-3/6 w-full">
                         <div className="flex justify-center">
                            <h1 className="text-5xl text-white border-b-4 border-b-green-700">about us
                            </h1>
                         </div>
                        <p className="text-white">Ex consectetur qui ad deserunt. Ea reprehenderit anim minim do. Cupidatat labore ex id amet occaecat esse. Sint laboris commodo occaecat sint duis occaecat officia et et. Reprehenderit tempor ad nostrud sint pariatur ad reprehenderit anim pariatur ullamco dolor ex. Duis commodo duis cillum elit eiusmod esse. Consectetur dolore ex laborum aute qui.Consequat voluptate non occaecat laborum pariatur tempor consectetur incididunt duis. Deserunt anim ea commodo commodo exercitation nostrud commodo aute eiusmod cupidatat. Veniam veniam mollit ut esse occaecat eu ex cupidatat sint non adipisicing.</p>
                        <p className="text-white">
                        Ex consectetur qui ad deserunt. Ea reprehenderit anim minim do. Cupidatat labore ex id amet occaecat esse. Sint laboris commodo occaecat sint duis occaecat officia et et. Reprehenderit tempor ad nostrud sint pariatur ad reprehenderit anim pariatur ullamco dolor ex. Duis commodo duis cillum elit eiusmod esse. Consectetur dolore ex laborum aute qui.Consequat voluptate non occaecat laborum pariatur tempor consectetur incididunt duis. Deserunt anim ea commodo commodo exercitation nostrud commodo aute eiusmod cupidatat. Veniam veniam mollit ut esse occaecat eu ex cupidatat sint non 
                        </p>
                     </div>
                 </div>
                
                <div className="flex justify-center mt-36">
                    <ContactCard/>
                </div>

                <div className="flex justify-center mt-36">
                    <div className="md:w-3/6 w-full m-5 bg-gray-900 h-96 rounded-xl">
                    </div>
                </div>
                
            </div>
        )
    }
}


export default AboutUs;