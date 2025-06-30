// PlanTripDialog.js
import React, { useState } from 'react';
import { X } from 'lucide-react'; // Import the 'X' icon for closing the dialog
import { useEffect } from 'react';
import axios from 'axios';

const PlanTripDialog = ({ isOpen, onClose }) => {
  const [tripData, setTripData] = useState({
    driverId: '',
    vehicleId: '',
    origin: '',
    destination: ''
  });

  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const url = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    if (!isOpen) return;

    // Fetch drivers
    axios.get(`${url}driver-service/drivers/getAllDriver`)
      .then(res => setDrivers(res.data.data))
      .catch(err => console.error('Failed to fetch drivers:', err));

    // Fetch vehicles
    axios.get(`${url}fleet-service/allFleet`)
      .then(res => setVehicles(res.data.data))
      .catch(err => console.error('Failed to fetch vehicles:', err));

  }, [isOpen]);

  if (!isOpen) return null;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripData(prevData => ({ ...prevData, [name]: value })); 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log("New Trip Data:", tripData);
 const url = process.env.REACT_APP_BASE_URL;
axios.post(`${url}trip-service/trips/createTrip`, tripData, {
  headers: { 'Content-Type': 'application/json' }
})
.then(response => {
  console.log('trip added successfully:', response.data);
  alert("trip added successfully!");
  onClose(); 
  setTripData({ 
      driverId: '',
    vehicleId: '',
    origin: '',
    destination: ''
    });
})
.catch(error => {
    if (error.response) {
    console.error("Error Status:", error.response.status);
    console.error("Error Data:", error.response.data);
    console.error("Error Headers:", error.response.headers);
  } else if (error.request) {
    console.error("No response received:", error.request);
  } else {
    console.error("Request setup error:", error.message);
  }
  console.error('Error adding vehicle:', error);
  alert("Failed to add vehicle.");
});
    
    alert("Trip planned successfully! Check console for data."); 
    onClose(); 
    setTripData({ 
      driverId: '',
    vehicleId: '',
    origin: '',
    destination: ''
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 font-inter">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 sm:p-8 relative">
        <button
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          aria-label="Close plan trip dialog" 
        >
          <X className="w-6 h-6" />
        </button>

        <header className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-purple-700 dark:text-purple-400 mb-2 leading-tight">
            Plan New Trip
          </h2>
          <p className="text-md text-gray-700 dark:text-gray-300">
            Enter the details to plan a new trip.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="driver" className="block text-sm font-bold mb-1 text-gray-700 dark:text-gray-300">Driver</label>
            <select
              id="driverId"
              name="driverId"
              value={tripData.driver}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Driver</option>
              {drivers.map(driver => (
                <option key={driver.id} value={driver.id}>
                  {driver.name} (ID: {driver.id})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="vehicle" className="block text-sm font-bold mb-1 text-gray-700 dark:text-gray-300">Vehicle</label>
            <select
              id="vehicleId"
              name="vehicleId"
              value={tripData.vehicle}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Vehicle</option>
              {vehicles.map(vehicle => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.registrationNumber || `Vehicle #${vehicle.id}`}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="startLocation" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-1">Start Location</label>
            <input
              type="text"
              id="origin"
              name="origin"
              value={tripData.startLocation}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g., Main Depot"
              required
            />
          </div>
          <div>
            <label htmlFor="endLocation" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-1">End Location</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={tripData.endLocation}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g., Customer Warehouse A"
              required
            />
          </div>


          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white font-semibold py-2 px-5 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-600 text-white font-semibold py-2 px-5 rounded-md shadow-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Plan Trip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanTripDialog;
