import React from 'react';
import PartnerCover from './PartnerCover';
import PartnerList from './PartnerList';

class Partner extends React.Component{

    render(){
        return(
            <div className='flex flex-col items-center bg-gray-900'>
                <PartnerCover/>
                <PartnerList/>
            </div>
        )
    }
}

export default Partner;