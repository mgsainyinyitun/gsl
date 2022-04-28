import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

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
             <div className='w-full p-2 m-5 bg-black '>
                <span className='text-3xl uppercase text-white font-extrabold'>services</span>
            </div>
            <div className='w-4/6'>
              <Collapse  defaultActiveKey={['1']} onChange={callback}>
                  <Panel header="This is panel header with arrow icon" key="1">
                  <p>{text}</p>
                  </Panel>
                  <Panel header="This is panel header with no arrow icon" key="2">
                  <p>{text}</p>
                  </Panel>
                  <Panel header="This is panel header with no arrow icon" key="2">
                  <p>{text}</p>
                  </Panel>
                  <Panel header="This is panel header with no arrow icon" key="2">
                  <p>{text}</p>
                  </Panel>
              </Collapse>
            </div>
          </div>
        )
    }
}


export default Services;