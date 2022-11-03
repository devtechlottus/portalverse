import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import cn from "classnames";

const Map = ({ classNames, coords, zoom = 13, scroll = false }: any) => {
  
  return <section className={cn(classNames)}>
    <MapContainer center={coords} zoom={zoom} scrollWheelZoom={scroll}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coords}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  </section>
};

export default Map;