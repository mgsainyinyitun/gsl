import { Map, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';


const mapStyles = {
  width: '50%',
  height: '50%',
  position:'relative',
};

class GoogleMap extends React.Component{
    render(){
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 21.9588, lng: 96.0891}}
            />);
    }
}


export default GoogleApiWrapper({
   // apiKey: 'AIzaSyDGArUEBa5ns09IA7nt7jP-xfNIUkToFts'
   apiKey:'AIzaSyCZYbGEYuboOIKbjy0nM8CEOI5sSXO--1A'
  })(GoogleMap);