import React, { useState } from 'react';
import { Truck, Menu, BellRing } from 'lucide-react';
import { Link } from 'react-router-dom';
import NotificationDrawer from './NotificationDrawer';
import axios from 'axios';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const notifications = [
    {
      title: "Critical: Vehicle SF007 - Engine Overheat",
      message: "Immediate attention required. Driver notified.",
      time: "10 mins ago"
    },
    {
      title: "New Trip Assignment: TRP015",
      message: "Trip to warehouse B, scheduled for 14:00.",
      time: "30 mins ago"
    },
    {
      title: "Daily Summary Report Ready",
      message: "View yesterday's fleet performance metrics.",
      time: "1 hour ago"
    }
  ];
  const url = process.env.REACT_APP_BASE_URL;
  const handleClosenotification=()=>{
        console.log("inside close notification");
        
    axios.post(`${url}notification-service/getUnreadByRecipient`, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        console.log('notification closed ', response.data);
        //alert("Vehicle added successfully!");
        setDrawerOpen(false);
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
    
         setDrawerOpen(false);
      });
  }

  return (
    <>
      <nav className="flex items-center justify-between mb-16 p-4">
        <div className="flex items-center space-x-2">
          <Truck className="w-8 h-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-800 dark:text-white">SMART FLEET</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-lg font-medium text-gray-600 dark:text-gray-300">
          <Link to="/" className="hover:text-blue-600 transition-colors duration-200">Home</Link>
          <Link to="/fleet" className="hover:text-blue-600 transition-colors duration-200">Fleet</Link>
          <Link to="/driver" className="hover:text-blue-600 transition-colors duration-200">Driver</Link>
          <Link to="/trip" className="hover:text-blue-600 transition-colors duration-200">Trip</Link>
          <Link to="/track" className="hover:text-blue-600 transition-colors duration-200">Tracking</Link>

          <button
            onClick={() => setDrawerOpen(true)}
            className="text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-white"
            title="Open Notifications"
          >
            <BellRing className="w-6 h-6" />
          </button>
        </div>

        <div className="md:hidden">
          <button className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      <NotificationDrawer
        isOpen={drawerOpen}
        onClose={handleClosenotification}
        notifications={notifications}
      />
    </>
  );
};

export default Header;
