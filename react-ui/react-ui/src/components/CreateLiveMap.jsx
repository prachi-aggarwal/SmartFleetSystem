// components/LiveMap.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const LiveMap = ({ vehicles }) => {
  const center = [28.6139, 77.2090]; // Default center (Delhi)

  return (
    <MapContainer center={center} zoom={5} scrollWheelZoom={true} className="h-80 w-full rounded-xl z-10">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {vehicles.map(vehicle => (
        <Marker key={vehicle.id} position={[vehicle.latitude, vehicle.longitude]}>
          <Popup>
            <strong>{vehicle.name || `Vehicle ${vehicle.id}`}</strong><br />
            Speed: {vehicle.speed} km/h<br />
            Status: {vehicle.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LiveMap;
