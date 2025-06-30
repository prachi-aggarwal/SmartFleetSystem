// TripServicePage.js
import React from 'react';
import { Map, Clock, Package, CheckCircle, PlusCircle, Calendar } from 'lucide-react'; // Import relevant icons
import Header from './Header';
import InfoCard from '../common/InfoCard';
import PlanTripDialog from '../Dialogs/PlanTripDialog';
import { useState } from 'react';
import axios from 'axios';
import AllEntityTable from '../common/AllEntityTable';

// Main TripServicePage Component
const TripService = () => {
  const [isddPlanTripDialogOpen, setIsAddPlanTripDialogOpen] = useState(false); // New state
  const [tripData, setTripData] = useState(null);
  const [columnData, setColumnData] = useState(null);
  const [viewTripData, setViewTripData] = useState(false);
  const url = process.env.REACT_APP_BASE_URL;
  const fetchAllTripData = async () => {
    await axios.get(`${url}trip-service/trips/getAllTrips`, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        const columnKeyMap = {
          start_time: 'startTime',
          end_time: 'endTime',
          id: 'id',
          driver_id: 'driverId',
          vehicle_id: 'vehicleId',
          status: 'status',
          origin: 'origin',
          destination: 'destination'
        };
       const mappedColumns = response.data.columns.map((col) => {
  const key = columnKeyMap[col] || col;
  return {
    key,
    label: col.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    render: key === 'status' ? (value) => {
      let colorClass = '';
      let displayText = value;

      switch (value.toLowerCase()) {
        case 'completed':
          colorClass = 'bg-green-100 text-green-800';
          break;
        case 'ongoing':
          colorClass = 'bg-yellow-100 text-yellow-800';
          break;
        case 'scheduled':
          colorClass = 'bg-blue-100 text-blue-800';
          break;
        case 'cancelled':
          colorClass = 'bg-red-100 text-red-800';
          break;
        default:
          colorClass = 'bg-gray-100 text-gray-800';
      }

      return (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${colorClass}`}>
          {displayText}
        </span>
      );
    } : undefined
  };
});

        console.log("response.data.data", response.data.data)
        console.log("mappedColumns", mappedColumns);
        setTripData(response.data.data);
        setColumnData(mappedColumns);
        setViewTripData(true); 
      })
      .catch(error => {
        console.error('Error fetching vehicles:', error);
      });
  };
  const handlePlanTripClick = () => { // New handler
    setIsAddPlanTripDialogOpen(true);
  };
  const handleClosePlanTriprDialog = () => { // New handler
    setIsAddPlanTripDialogOpen(false);
  };
  const handleViewTripClick = () => {
    
    fetchAllTripData();
  
    
  }
  const handleViewTrip = () => {
    console.log("clicked");
  }
  const handleUpdateTrip = () => {
    console.log("clicked");

  }
  const handleDeleteTrip = () => {
    console.log("clicked");

  }
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col font-inter">
      {viewTripData ? (
        <AllEntityTable
          title="All Trips Details"
          data={tripData}
          columns={columnData}
          onView={handleViewTrip}
          onUpdate={handleUpdateTrip}
          onDelete={handleDeleteTrip}
          onBackClick={() => setViewTripData(false)}
        />
      ) : (
        <div className="w-full  bg-gray-50 dark:bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10">

          <Header />

          <div className="flex justify-end mb-8">
            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center"
              onClick={handlePlanTripClick}
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              Plan New Trip
            </button>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Current Trip Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <InfoCard icon={<Map className="w-8 h-8" />} title="Live Trips"
                onClick={handleViewTripClick}
              >
                <p className="text-4xl font-extrabold text-purple-600 dark:text-purple-400">32</p>
                <p>Trips currently in progress.</p>
              </InfoCard>
              <InfoCard icon={<CheckCircle className="w-8 h-8" />} title="Completed Today">
                <p className="text-4xl font-extrabold text-green-600 dark:text-green-400">18</p>
                <p>Trips successfully delivered today.</p>
              </InfoCard>
              <InfoCard icon={<Clock className="w-8 h-8" />} title="Upcoming Trips">
                <p className="text-4xl font-extrabold text-yellow-600 dark:text-yellow-400">25</p>
                <p>Scheduled for the next 24 hours.</p>
              </InfoCard>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <InfoCard icon={<Map className="w-8 h-8" />} title="Real-time Tracking & Routes">
              <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 text-xl">
                [Interactive Trip Map Placeholder]
              </div>
              <p className="mt-4">Monitor live trip progress, driver location, and adherence to optimized routes.</p>
            </InfoCard>

            <InfoCard icon={<Package className="w-8 h-8" />} title="Delivery Management">
              <ul className="list-disc list-inside space-y-2">
                <li>Trip #TRP001 - Status: En Route, 2 stops left</li>
                <li>Trip #TRP005 - Status: Delivered, Proof of Delivery captured</li>
                <li>Trip #TRP008 - Status: Delayed, awaiting customer confirmation</li>
                <li className="text-blue-600 dark:text-blue-300 cursor-pointer hover:underline">View All Deliveries...</li>
              </ul>
              <p className="mt-4">Track delivery statuses, manage proof of delivery, and handle exceptions.</p>
            </InfoCard>
          </section>

          

        </div>
      )
      }
      <PlanTripDialog
        isOpen={isddPlanTripDialogOpen}
        onClose={handleClosePlanTriprDialog}
      />
    </div>
  );
};

export default TripService;
