import React from 'react'
import GoogleMapReact from 'google-map-react'

import './Styles-components.css'

let Contact = () => {

    let prop = {
        center: {
            lat: 32.976419180537924,
            lng: 72.8880333690405
        },
        zoom: 11
    }

    const deviceWidth = window.innerWidth
    const deviceHeight = window.innerHeight

    const AnyReactComponent = ({ text }) => <div className='marker'>{text}</div>;
    return (
        <div className="Contact">
            <div className="map">
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyDJDYdZMb9a5MRNY2Lv9iK_Kw48-JBJGD8'}}
                    defaultCenter={prop.center}
                    defaultZoom={prop.zoom}
                >
                    <AnyReactComponent
                        lat={32.976419180537924}
                        lng={72.8880333690405}
                        text="My Marker"
                    />
            </GoogleMapReact>
            </div>
            <div className="TextSection">
                <h1>Address</h1>
                <p>Chakwal Dar ul Kamal check</p>
                <h1>Anything Else </h1>
                <p>{deviceHeight}</p>
                <p>{deviceWidth}</p>

                <div className="iconsLinks">
                    <p className="ContactFacebook">f</p>
                    <p className="ContactGoogle">g</p>
                    <p className="ContactTwitter">t</p>
                    <p className="ContactGithub">G</p>

                </div>
            </div>
        </div>
    )
}


export default Contact