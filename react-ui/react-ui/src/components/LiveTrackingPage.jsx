import React from 'react';
import {
  LocateFixed,
  Activity,
  PlayCircle,
  Info,
  ArrowLeft
} from 'lucide-react';

const mockLiveVehicles = [
  {
    id: 'SF007',
    driver: 'Ravi Kumar',
    location: 'NH-8, Delhi',
    speed: '68 km/h',
    fuel: '75%',
    status: 'Moving',
  },
  {
    id: 'SF015',
    driver: 'Anjali Sharma',
    location: 'Ring Road, Mumbai',
    speed: '45 km/h',
    fuel: '60%',
    status: 'Idle',
  },
  {
    id: 'SF022',
    driver: 'Rajesh Gupta',
    location: 'Outer Ring, Bangalore',
    speed: '0 km/h',
    fuel: '90%',
    status: 'Stopped',
  },
];

const LiveTrackingPage = ({ open, close }) => {
  if (!open) return null;

  const handleTrack = (vehicle) => {
    alert(`📍 Tracking ${vehicle.id} on map at ${vehicle.location}`);
  };

  const handleDiagnostics = (vehicle) => {
    alert(`🛠️ Diagnostics for ${vehicle.id}: Fuel ${vehicle.fuel}, Speed ${vehicle.speed}`);
  };

  const handlePlayback = (vehicle) => {
    alert(`⏪ Showing route playback for ${vehicle.id}`);
  };

  const handleDetails = (vehicle) => {
    alert(`ℹ️ Details for ${vehicle.id} - Driver: ${vehicle.driver}, Status: ${vehicle.status}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 font-inter">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl w-full max-w-5xl shadow-2xl overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-400">
            All Live Vehicles
          </h2>
          <button
            onClick={close}
            className="text-sm bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Close
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200 dark:border-gray-700">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Vehicle ID</th>
                <th className="px-4 py-3 text-left">Driver</th>
                <th className="px-4 py-3 text-left">Location</th>
                <th className="px-4 py-3 text-left">Speed</th>
                <th className="px-4 py-3 text-left">Fuel</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              {mockLiveVehicles.map((vehicle, idx) => (
                <tr
                  key={vehicle.id}
                  className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'}
                >
                  <td className="px-4 py-3">{vehicle.id}</td>
                  <td className="px-4 py-3">{vehicle.driver}</td>
                  <td className="px-4 py-3">{vehicle.location}</td>
                  <td className="px-4 py-3">{vehicle.speed}</td>
                  <td className="px-4 py-3">{vehicle.fuel}</td>
                  <td className="px-4 py-3">{vehicle.status}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center space-x-3">
                      <button
                        onClick={() => handleTrack(vehicle)}
                        title="Track on Map"
                        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        <LocateFixed className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDiagnostics(vehicle)}
                        title="Diagnostics"
                        className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        <Activity className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handlePlayback(vehicle)}
                        title="Route Playback"
                        className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      >
                        <PlayCircle className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDetails(vehicle)}
                        title="View Details"
                        className="p-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                      >
                        <Info className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LiveTrackingPage;
