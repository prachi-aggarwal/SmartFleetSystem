// FleetServicePage.js
import React from 'react';
import { Car, Wrench, MapPin, BarChart, FileText, PlusCircle } from 'lucide-react'; // Import relevant icons
import Header from './Header';
import Footer from './Footer';
import { react, useState } from 'react';
import AddVehicleDialog from '../Dialogs/AddVehicleDialog';
import InfoCard from '../common/InfoCard';
import AllEntityTable from '../common/AllEntityTable';
import { AllVehicleData } from '../MockData/AllVehicleData';
import { VehicleColumn } from '../MockData/VehicleColumn';
import axios from 'axios';
import { VehicleDetailsDialog } from '../Dialogs/VehicleDetailsDialog';
import EditVehicleDialog from '../Dialogs/EditVehicleDialog';




// Main FleetServicePage Component
const FleetService = () => {
  const [isAddVehicleDialogOpen, setIsAddVehicleDialogOpen] = useState(false);
  const [isAllVehicleClick, setIsAllVehicleClick] = useState(false);
  const [allVehicleData, setAllVehicleData] = useState([]);
  const [allVehicleColumn, setAllVehicleColumn] = useState([]);
  const [isViewVehicle, setIsViewVehicle] = useState(false);
  const [vehicleData, setVehicleData] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedVehicleToEdit, setSelectedVehicleToEdit] = useState(null);
    const [isLoading, setIsLoading] = useState(false); //loading state





  const url = process.env.REACT_APP_BASE_URL;



  const handleAddVehicleClick = () => {
    setIsAddVehicleDialogOpen(true);
  };
  const handleCloseAddVehicleDialog = () => {
    setIsAddVehicleDialogOpen(false);
  };
  const fetchAllVehicleData = () => {
    setIsLoading(true);
    axios.get(`${url}fleet-service/allFleet`, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        const columnKeyMap = {
          plate_number: 'plateNumber',
          model: 'model',
          id: 'id',
          capacity: 'capacity',
          active: 'active'
        };

        const mappedColumns = response.data.columns.map((col) => {
          const key = columnKeyMap[col] || col;
          return {
            key,
            label: col.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
            render: key === 'active' ? (value) => value ? 'Yes' : 'No' : undefined
          };
        });

        setAllVehicleData(response.data.data);
        setAllVehicleColumn(mappedColumns);
      })
      .catch(error => {
        console.error('Error fetching vehicles:', error);
      })
      .finally(() => {
        setIsLoading(false); // hide loader
      });
  };

  const handleAllVehicleClick = () => {
    setIsAllVehicleClick(true);
    fetchAllVehicleData();
  }
  const handleOView = (vehicle) => {
    console.log("clicked");
    setIsViewVehicle(true);
    setVehicleData(vehicle);

  }
  const handleOnUpdate = (vehicle) => {
    console.log("clicked");
    setSelectedVehicleToEdit(vehicle);
    setEditDialogOpen(true);
  }




 const handleOnDelete = (vehicle) => {
  const confirmDelete = window.confirm(`Are you sure you want to delete vehicle with plate number "${vehicle.plateNumber}"?`);
  if (!confirmDelete) return;

  setIsLoading(true);

  axios.delete(`${url}fleet-service/delete/${vehicle.id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(() => {
      alert("Vehicle deleted successfully!");
      fetchAllVehicleData(); // Refresh table
    })
    .catch(error => {
      console.error('Delete error:', error);
      alert("Failed to delete vehicle.");
    })
    .finally(() => {
      setIsLoading(false);
    });
};




  return (
    <>
      {isAllVehicleClick ? (
         isLoading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid"></div>
          </div>
        ) :(
        <AllEntityTable onView={handleOView} onUpdate={handleOnUpdate} onDelete={handleOnDelete} title={"All Vehicle Details"} data={allVehicleData} columns={allVehicleColumn} onBackClick={() => setIsAllVehicleClick(false)} />
      )
     ) : (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col  font-inter">
          <div className="w-full bg-gray-50 dark:bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10">

            <Header />

            <div className="flex justify-end mb-8">
              <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300 flex items-center"
                onClick={handleAddVehicleClick}
              >
                <PlusCircle className="w-5 h-5 mr-2" />
                Add New Vehicle
              </button>
            </div>

            {/* Fleet Overview Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Current Fleet Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <InfoCard icon={<Car className="w-8 h-8" />} title="Total Vehicles"
                  onClick={handleAllVehicleClick}
                >
                  <p className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">125</p>
                  <p>Active and operational vehicles.</p>
                </InfoCard>
                <InfoCard icon={<Wrench className="w-8 h-8" />} title="Vehicles in Maintenance">
                  <p className="text-4xl font-extrabold text-orange-600 dark:text-orange-400">7</p>
                  <p>Vehicles currently undergoing service.</p>
                </InfoCard>
                <InfoCard icon={<FileText className="w-8 h-8" />} title="Upcoming Inspections">
                  <p className="text-4xl font-extrabold text-purple-600 dark:text-purple-400">15</p>
                  <p>Scheduled for inspection next month.</p>
                </InfoCard>
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <InfoCard icon={<MapPin className="w-8 h-8" />} title="Live Vehicle Tracking">
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 text-xl">
                  [Interactive Map Placeholder]
                </div>
                <p className="mt-4">Monitor the real-time location and status of all your fleet vehicles on an interactive map.</p>
              </InfoCard>

              {/* Maintenance Schedule */}
              <InfoCard icon={<Wrench className="w-8 h-8" />} title="Maintenance Schedule">
                <ul className="list-disc list-inside space-y-2">
                  <li>Truck ID #SF001 - Oil Change Due: 2025-07-15</li>
                  <li>Van ID #SF005 - Tire Rotation: 2025-08-01</li>
                  <li>Truck ID #SF012 - Major Service: 2025-09-01</li>
                  <li className="text-blue-600 dark:text-blue-300 cursor-pointer hover:underline">View All Schedules...</li>
                </ul>
                <p className="mt-4">Keep track of all vehicle maintenance needs and upcoming service dates.</p>
              </InfoCard>
            </section>




          </div>
          <AddVehicleDialog
            isOpen={isAddVehicleDialogOpen}
            onClose={handleCloseAddVehicleDialog}
          />

        </div>
      )}
      <VehicleDetailsDialog
        isOpen={isViewVehicle}
        onClose={() => setIsViewVehicle(false)}
        vehicle={vehicleData}
      />
      <EditVehicleDialog
        isOpen={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        vehicle={selectedVehicleToEdit}
        onSave={(updatedVehicle) => {
          // TODO: Call API to update backend and update UI state
          fetchAllVehicleData();
          console.log("Updated:", updatedVehicle);
        }}
      />

    </>
  );

};

export default FleetService;
