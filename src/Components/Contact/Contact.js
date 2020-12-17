import React from 'react';
import {YMaps, Map, Placemark} from "react-yandex-maps";

function Contact(props) {
    const mapData = {
        center: [43.32694476313189, 45.692195937799376],
        zoom: 15,
    };

    const coordinates = [
        [43.32698590963397, 45.692200288773265]
    ];

    return (
        <YMaps>
            <Map defaultState={mapData} className={'map'}>
                {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
            </Map>
        </YMaps>
    );
}

export default Contact;