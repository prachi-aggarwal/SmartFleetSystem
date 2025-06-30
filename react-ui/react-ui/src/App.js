
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import FleetService from './components/FleetService';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ Import Routes and Route
import DriverService from './components/DriverService';
import TripService from './components/TripService';
import TrackingService from './components/Tracking';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/fleet" element={<FleetService />} />
          <Route path="/driver" element={<DriverService />}/>
          <Route path="/trip" element={<TripService />}/>
          <Route path="/track" element={<TrackingService />}/>
          


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
