
import React, { useState } from 'react';
import { X } from 'lucide-react'; 
import axios from 'axios';
const AddVehicleDialog = ({ isOpen, onClose }) => {
  const [vehicleData, setVehicleData] = useState({
    
    model: '',
    capacity: '',
    active: '',
    plateNumber: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setVehicleData(prevData => ({ ...prevData, [name]: value })); 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log("New Vehicle Data:", vehicleData);

    
    const url = process.env.REACT_APP_BASE_URL;
axios.post(`${url}fleet-service/add`, vehicleData, {
  headers: { 'Content-Type': 'application/json' }
})
.then(response => {
  console.log('Vehicle added successfully:', response.data);
  alert("Vehicle added successfully!");
  onClose(); // Close the dialog
  setVehicleData({ name: "", type: "", number: "" }); // Reset form
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
    alert("Vehicle added successfully! Check console for data."); 
    onClose(); 
    setVehicleData({ 
    
      model: '',
      capacity: '',
      active: '',
      plateNumber: '',
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 font-inter">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 sm:p-8 relative">
        <button
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          aria-label="Close add vehicle dialog" 
        >
          <X className="w-6 h-6" /> 
        </button>

        <header className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-blue-700 dark:text-blue-400 mb-2 leading-tight">
            Add New Vehicle
          </h2>
          <p className="text-md text-gray-700 dark:text-gray-300">
            Enter the details for the new vehicle.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label htmlFor="model" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-1">Model</label>
            <input
              type="text"
              id="model"
              name="model"
              value={vehicleData.model}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="capacity" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-1">Capacity</label>
            <input
              type="number" 
              id="capacity"
              name="capacity"
              value={vehicleData.capacity}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="active" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-1">Active</label>
            <input
              type="text"
              id="active"
              name="active"
              value={vehicleData.active}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="plateNumber" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-1">License Plate</label>
            <input
              type="text"
              id="plateNumber"
              name="plateNumber"
              value={vehicleData.plateNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Add Vehicle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVehicleDialog;
