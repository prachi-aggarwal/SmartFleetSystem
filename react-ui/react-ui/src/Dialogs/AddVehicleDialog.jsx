import React, { useState } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';

const AddVehicleDialog = ({ isOpen, onClose }) => {
  const [vehicleData, setVehicleData] = useState({
    model: '',
    capacity: '',
    active: false,
    plateNumber: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setVehicleData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const url = process.env.REACT_APP_BASE_URL;
    axios.post(`${url}fleet-service/add`, vehicleData, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        console.log('Vehicle added successfully:', response.data);
        //alert("Vehicle added successfully!");
        onClose();
        setVehicleData({
          model: '',
          capacity: '',
          active: false,
          plateNumber: '',
        });
      })
      .catch(error => {
        if (error.response) {
          console.error("Error Status:", error.response.status);
          console.error("Error Data:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Request setup error:", error.message);
        }
        alert("Failed to add vehicle.");
      })
      .finally(() => {
        setIsLoading(false);
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
            <label htmlFor="model" className="block text-sm font-bold mb-1 text-gray-700 dark:text-gray-300">
              Model
            </label>
            <input
              type="text"
              id="model"
              name="model"
              value={vehicleData.model}
              onChange={handleChange}
              className="w-full p-3 border rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="capacity" className="block text-sm font-bold mb-1 text-gray-700 dark:text-gray-300">
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              value={vehicleData.capacity}
              onChange={handleChange}
              className="w-full p-3 border rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="active"
              name="active"
              checked={vehicleData.active}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="active" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Active
            </label>
          </div>

          <div>
            <label htmlFor="plateNumber" className="block text-sm font-bold mb-1 text-gray-700 dark:text-gray-300">
              License Plate
            </label>
            <input
              type="text"
              id="plateNumber"
              name="plateNumber"
              value={vehicleData.plateNumber}
              onChange={handleChange}
              className="w-full p-3 border rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex justify-end pt-4 space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white font-semibold py-2 px-5 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors duration-200"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className={`font-semibold py-2 px-5 rounded-md shadow-lg transition-colors duration-200 ${
                isLoading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {isLoading ? "Adding..." : "Add Vehicle"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVehicleDialog;
