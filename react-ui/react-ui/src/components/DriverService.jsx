import React, { useState } from 'react';
import { User, FileText, BarChart, Award, PlusCircle, CheckCircle } from 'lucide-react';
import Header from './Header';
import AddDriverDialog from '../Dialogs/AddDriverDialog';
import InfoCard from '../common/InfoCard';
import AllEntityTable from '../common/AllEntityTable';
import axios from 'axios';
import DriverDetailsDialog from '../Dialogs/DriverDetailsDialog';
import EditDriverDialog from '../Dialogs/EditDriverDialog';

const DriverService = () => {
  const [isAddDriverDialogOpen, setIsAddDriverDialogOpen] = useState(false);
  const [isAllDriverClick, setIsAllDriverClick] = useState(false);
  const [driverData, setDriverData] = useState([]);
  const [driverColumns, setDriverColumns] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [isViewDriver, setIsViewDriver] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [editableData, setEditableData] = useState(false);

  const url = process.env.REACT_APP_BASE_URL;

  const fetchAllDrivers = () => {
    axios.get(`${url}driver-service/drivers/getAllDriver`, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        const columnKeyMap = {
          id: 'id',
          name: 'name',
          license_number: 'licenseNumber',
          phone_number: 'phoneNumber',
          available: 'available'
        };
        const mappedColumns = response.data.columns.map((col) => {
          const key = columnKeyMap[col] || col;
          return {
            key,
            label: col.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
            render: key === 'available' ? (value) => value ? 'Yes' : 'No' : undefined
          };
        });
        // const mappedColumns = response.data.columns.map(col => {
        //   const key = columnKeyMap[col] || col;
        //   return {
        //     key,
        //     label: col.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
        //     render: key === 'available' ? (value) => value ? 'Yes' : 'No' : undefined

        //   };
        // });
        console.log("response.data.data", response.data.data);
        console.log("mappedColumns", mappedColumns);
        setDriverData(response.data.data);
        setDriverColumns(mappedColumns);
      })
      .catch(error => {
        console.error('Error fetching drivers:', error);
        if (error.response) {
          console.error("Server responded with non-2xx code:", error.response.status);
          console.log("Error data:", error.response.data);
        } else if (error.request) {
          console.error("Request made but no response received:", error.request);
        } else {
          console.error("Error setting up request:", error.message);
        }
        //alert('Failed to fetch drivers');
      });
  };

  const handleAddDriverClick = () => {
    setIsAddDriverDialogOpen(true);
  };

  const handleAllDriverClick = () => {
    setIsAllDriverClick(true);
    fetchAllDrivers();
  };

  const handleCloseAddDriverDialog = () => {
    setIsAddDriverDialogOpen(false);
  };

  const handleViewDriver = (driver) => {
    setIsViewDriver(true);
    setSelectedDriver(driver);
    // alert(`View driver details:\n${JSON.stringify(driver, null, 2)}`);
  };

  const handleUpdateDriver = (driver) => {
    // alert(`Edit driver:\n${JSON.stringify(driver, null, 2)}`);
    setEditableData(driver);
    setIsEditable(true);

  };

  const handleDeleteDriver = (driver) => {
    if (window.confirm(`Are you sure you want to delete ${driver.name}?`)) {
      axios.delete(`${url}driver-service/drivers/${driver.id}`)
        .then(() => {
          alert("Driver deleted successfully.");
          fetchAllDrivers(); // Refresh data
        })
        .catch(err => {
          console.error("Failed to delete driver:", err);
          alert("Failed to delete driver.");
        });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col font-inter">
      {isAllDriverClick ? (
        <AllEntityTable
          title="All Driver Details"
          data={driverData}
          columns={driverColumns}
          onView={handleViewDriver}
          onUpdate={handleUpdateDriver}
          onDelete={handleDeleteDriver}
          onBackClick={() => setIsAllDriverClick(false)}
        />
      ) : (
        <div className="w-full bg-gray-50 dark:bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10">
          <Header />

          <div className="flex justify-end mb-8">
            <button
              onClick={handleAddDriverClick}
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 flex items-center"
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              Add New Driver
            </button>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Current Driver Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <InfoCard icon={<User className="w-8 h-8" />} title="Total Drivers" onClick={handleAllDriverClick}>
                <p className="text-4xl font-extrabold text-green-600">98</p>
                <p>Registered and active drivers.</p>
              </InfoCard>
              <InfoCard icon={<CheckCircle className="w-8 h-8" />} title="Drivers in Compliance">
                <p className="text-4xl font-extrabold text-blue-600">95</p>
                <p>Drivers with up-to-date licenses and documents.</p>
              </InfoCard>
              <InfoCard icon={<Award className="w-8 h-8" />} title="Top Performers">
                <p className="text-4xl font-extrabold text-yellow-600">10</p>
                <p>Consistently exceeding performance metrics.</p>
              </InfoCard>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <InfoCard icon={<BarChart className="w-8 h-8" />} title="Driver Performance Analytics">
              <p className="mb-4">Track safety, efficiency, and compliance.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-green-500 text-white py-2 px-4 rounded">Safety Report</button>
                <button className="bg-green-500 text-white py-2 px-4 rounded">Efficiency Metrics</button>
              </div>
            </InfoCard>

            <InfoCard icon={<FileText className="w-8 h-8" />} title="Documents & Compliance">
              <ul className="list-disc list-inside space-y-2">
                <li>John - License Renewal Due: 2025-10-20</li>
                <li>Jane - Medical Check Due: 2025-09-01</li>
              </ul>
              <p className="mt-4">Manage all compliance documentation easily.</p>
            </InfoCard>
          </section>

          <AddDriverDialog isOpen={isAddDriverDialogOpen} onClose={handleCloseAddDriverDialog} />
        </div>
      )}
      <DriverDetailsDialog
        isOpen={isViewDriver}
        onClose={() => setIsViewDriver(false)}
        driver={selectedDriver}
      />
      <EditDriverDialog
        isOpen={isEditable}
        onClose={() => setIsEditable(false)}
        driver={editableData}
        onSave={(updatedVehicle) => {
          fetchAllDrivers();
          console.log("Updated:", updatedVehicle);
        }}
      />
    </div>


  );
};

export default DriverService;
