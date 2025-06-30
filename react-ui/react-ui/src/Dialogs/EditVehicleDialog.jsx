import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';

const EditVehicleDialog = ({ isOpen, onClose, vehicle, onSave }) => {
  const [formData, setFormData] = useState({
    plateNumber: '',
    model: '',
    capacity: '',
    active: false
  });

  useEffect(() => {
    if (vehicle) {
      setFormData({
        plateNumber: vehicle.plateNumber || '',
        model: vehicle.model || '',
        capacity: vehicle.capacity || '',
        active: vehicle.active || false
      });
    }
  }, [vehicle]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    const updatedData={ ...vehicle, ...formData };
    console.log("updateData",updatedData);
  
     const url = process.env.REACT_APP_BASE_URL;
axios.post(`${url}fleet-service/update/${updatedData.id}`, updatedData, {
  headers: { 'Content-Type': 'application/json' }
})
.then(response => {
  console.log('Vehicle added successfully:', response.data);
  alert("Vehicle updated successfully!");
   onSave({ ...vehicle, ...formData });
  onClose(); // Close the dialog
})
.catch(error => {
  console.error('Error adding vehicle:', error);
  alert("Failed to add vehicle.");
});
    onClose();
  };

  if (!isOpen || !vehicle) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 font-inter">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-blue-700 mb-6">Edit Vehicle</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Plate Number</label>
            <input
              name="plateNumber"
              value={formData.plateNumber}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Model</label>
            <input
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Capacity</label>
            <input
              name="capacity"
              type="number"
              value={formData.capacity}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded border"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="active"
              checked={formData.active}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm font-medium">Active</label>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditVehicleDialog;
