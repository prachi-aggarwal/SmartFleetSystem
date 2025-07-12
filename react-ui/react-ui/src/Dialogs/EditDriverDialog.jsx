import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';

const EditDriverDialog = ({ isOpen, onClose, driver, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    licenseNumber: '',
    phoneNumber: '',
    available: false
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (driver) {
      setFormData({
        name: driver.name || '',
        licenseNumber: driver.licenseNumber || '',
        phoneNumber: driver.phoneNumber || '',
        available: driver.available || false
      });
    }
  }, [driver]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    setIsLoading(true);
    const updatedData = { ...driver, ...formData };
    console.log("updateData", updatedData);

    const url = process.env.REACT_APP_BASE_URL;
    axios.put(`${url}driver-service/drivers/${updatedData.id}`, updatedData, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        console.log('Driver updated successfully:', response.data);
        onSave(updatedData);
        onClose();
      })
      .catch(error => {
        console.error('Error updating driver:', error);
        alert("Failed to update driver.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (!isOpen || !driver) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 font-inter">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-blue-700 mb-6">Edit Driver</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">License Number</label>
            <input
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded border"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="available"
              checked={formData.available}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm font-medium">Available</label>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`bg-blue-600 text-white font-semibold px-4 py-2 rounded flex items-center ${
              isLoading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
          >
            {isLoading && (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
            {isLoading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDriverDialog;
