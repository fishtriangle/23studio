import {Map, Placemark, YMaps} from 'react-yandex-maps'


export default function Location() {

  return (
    <div id={'location'}>
      <YMaps>
        <Map
          height={'500px'}
          width={'100%'}
          defaultState={{
            center: [53.045127, 158.667147],
            zoom: 17
          }}
        >
          <Placemark defaultGeometry={[53.045127, 158.667147]} />
        </Map>
      </YMaps>
    </div>
  )
}