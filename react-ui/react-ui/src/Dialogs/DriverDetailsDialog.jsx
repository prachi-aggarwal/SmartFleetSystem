import { X } from "lucide-react";

const DriverDetailsDialog = ({ isOpen, onClose, driver }) => {
  if (!isOpen || !driver) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 font-inter">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          aria-label="Close driver details dialog"
        >
          <X className="w-6 h-6" />
        </button>

        <header className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-blue-700 dark:text-blue-400 mb-2 leading-tight">
            Driver Details
          </h2>
          <p className="text-md text-gray-700 dark:text-gray-300">
            Detailed profile for Driver ID: <span className="font-semibold">{driver.id}</span>
          </p>
        </header>

        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-900 dark:text-white">Driver ID:</span>
            <span>{driver.id}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-900 dark:text-white">Name:</span>
            <span>{driver.name}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-900 dark:text-white">License Number:</span>
            <span>{driver.licenseNumber}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-900 dark:text-white">Phone Number:</span>
            <span>{driver.phoneNumber}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-900 dark:text-white">Available:</span>
            <span>{driver.available ? "Yes" : "No"}</span>
          </div>
        </div>

        <div className="flex justify-end pt-6">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default DriverDetailsDialog;