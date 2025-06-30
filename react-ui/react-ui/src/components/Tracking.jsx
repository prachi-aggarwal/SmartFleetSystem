// TrackingServicePage.js
import React, { useState } from 'react';
import { MapPin, Truck, AlertTriangle, BatteryCharging, Wifi, LocateFixed, Clock, Activity } from 'lucide-react'; // Import relevant icons
import Header from './Header';
import InfoCard from '../common/InfoCard';
import LiveTrackingPage from './LiveTrackingPage';
import CreateLiveMap from './CreateLiveMap';

const TrackingService = () => {
  const[allLiveData,setAllLiveData]=useState(false);
  const mockVehicles = [
  { id: 1, name: 'Truck #1', latitude: 28.6139, longitude: 77.2090, speed: 60, status: 'Moving' },
  { id: 2, name: 'Van #2', latitude: 19.0760, longitude: 72.8777, speed: 0, status: 'Idle' },
  { id: 3, name: 'Truck #3', latitude: 13.0827, longitude: 80.2707, speed: 50, status: 'Moving' },
];
  const handleViewAllLive=()=>{
    setAllLiveData(true);
  }
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col font-inter">
  
      <div className="w-full  bg-gray-50 dark:bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10">

    
        <header className="text-center mb-10">
          <Header></Header>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Gain complete visibility over your fleet with live location updates and vehicle diagnostics.
          </p>
        </header>

        <div className="flex justify-end mb-8">
          <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center"
          onClick={handleViewAllLive}
          >
            <LocateFixed className="w-5 h-5 mr-2" />
            View All Live
          </button>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Live Fleet Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard icon={<Truck className="w-8 h-8" />} title="Vehicles Online">
              <p className="text-4xl font-extrabold text-orange-600 dark:text-orange-400">110</p>
              <p>Currently transmitting data.</p>
            </InfoCard>
            <InfoCard icon={<MapPin className="w-8 h-8" />} title="Vehicles in Motion">
              <p className="text-4xl font-extrabold text-green-600 dark:text-green-400">85</p>
              <p>Actively moving on routes.</p>
            </InfoCard>
            <InfoCard icon={<AlertTriangle className="w-8 h-8" />} title="Alerts This Hour">
              <p className="text-4xl font-extrabold text-red-600 dark:text-red-400">3</p>
              <p>Critical incidents reported.</p>
            </InfoCard>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <InfoCard icon={<MapPin className="w-8 h-8" />} title="Real-time Fleet Map">
            <div className="w-full h-80 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 text-xl">
             <CreateLiveMap vehicles={mockVehicles} />
             
            </div>
            <p className="mt-4">Visualize your entire fleet's live location, speed, and direction on a single map.</p>
          </InfoCard>

          {/* Vehicle Telematics & Diagnostics */}
          <InfoCard icon={<Activity className="w-8 h-8" />} title="Vehicle Telematics & Health">
            <ul className="list-disc list-inside space-y-2">
              <li>Truck ID #SF007 - Fuel: 75%, Status: OK</li>
              <li>Van ID #SF015 - Engine Temp: 90°C, Status: Warning</li>
              <li>Truck ID #SF022 - Battery: 98%, Status: OK</li>
              <li className="text-blue-600 dark:text-blue-300 cursor-pointer hover:underline">View All Vehicle Details...</li>
            </ul>
            <p className="mt-4">Access critical vehicle health metrics, fuel levels, and diagnostic alerts.</p>
          </InfoCard>
        </section>


      </div>

     <LiveTrackingPage open={allLiveData} close={() => setAllLiveData(false)} />
    </div>
  );
};

export default TrackingService;
