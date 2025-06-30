import { Truck, Menu } from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeatureCard from "../common/FeatureCard";
import { ShieldCheck, Gauge, Route ,LineChart} from 'lucide-react';

const Homepage = () => {
    return (
    // Added Tailwind CSS CDN and Inter font link here
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="min-h-screen bg-gray-100 flex flex-col  font-inter">
        <div className="bg-white  shadow-2xl w-full  p-6 sm:p-10 lg:p-12 overflow-hidden">
          <Header /> 
          {/* Main Content Section - Key Features Overview */}
          <main className="mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center mb-12 leading-tight">
              Key Features of Smart Fleet
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              <FeatureCard
                icon={<ShieldCheck className="w-10 h-10" />}
                title="Enhanced Security"
                description="Monitor vehicles and driver behavior in real-time to ensure safety and prevent unauthorized use."
              />
              <FeatureCard
                icon={<Route className="w-10 h-10" />}
                title="Optimal Route Planning"
                description="Utilize advanced algorithms to plan the most efficient routes, saving time and fuel costs."
              />
              <FeatureCard
                icon={<Gauge className="w-10 h-10" />}
                title="Performance Analytics"
                description="Gain insights into fleet performance with detailed reports on mileage, speed, and vehicle health."
              />
              <FeatureCard
                icon={<Truck className="w-10 h-10" />}
                title="Fleet Maintenance"
                description="Automate maintenance schedules and track service history to keep your fleet in top condition."
              />
              <FeatureCard
                icon={<LineChart className="w-10 h-10" />}
                title="Cost Efficiency"
                description="Identify areas for cost reduction through optimized operations and fuel consumption monitoring."
              />
              <FeatureCard
                icon={<Menu className="w-10 h-10" />} // Using a generic icon for now
                title="Customizable Dashboards"
                description="Tailor your dashboard to display the most relevant data and metrics for your specific needs."
              />
            </div>
          </main>

          <Footer /> 
        </div>
      </div>
    </>
  );
}


export default Homepage;