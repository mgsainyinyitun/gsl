import React from 'react';
import Card from '../basics/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera,faCameraRetro } from '@fortawesome/free-solid-svg-icons'

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


class Services extends React.Component{
    render(){
        return(
          <div className='w-full flex flex-col items-center'>
             <div className='w-full p-2 m-5 bg-gray-800 '>
                <span className='text-3xl uppercase text-white font-extrabold'>services</span>
            </div>
            <div className='w-4/6'>

              <Card
                icon={faCameraRetro}
                title = 'SERVICES NAME'
                info = 'Aliquam gravida nisi consequat nulla sagittis luctus. Aenean vel cursus nisi. Donec quis erat'
                detail = 'Consequat Lorem pariatur cillum fugiat enim anim sunt elit culpa enim tempor anim enim commodo.'
              />

              <Card
                icon={faCameraRetro}
                title = 'SERVICES NAME'
                info = 'Aliquam gravida nisi consequat nulla sagittis luctus. Aenean vel cursus nisi. Donec quis erat'
              />

              <Card
                icon={faCameraRetro}
                title = 'SERVICES NAME'
                info = 'Aliquam gravida nisi consequat nulla sagittis luctus. Aenean vel cursus nisi. Donec quis erat'
              />

            </div>
          </div>
        )
    }
}


export default Services;