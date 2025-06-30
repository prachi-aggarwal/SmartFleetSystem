import { X } from "lucide-react";
export const VehicleDetailsDialog = ({ isOpen, onClose, vehicle }) => {
  if (!isOpen || !vehicle) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 font-inter">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          aria-label="Close vehicle details dialog"
        >
          <X className="w-6 h-6" />
        </button>

        <header className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-blue-700 dark:text-blue-400 mb-2 leading-tight">
            Vehicle Details
          </h2>
          <p className="text-md text-gray-700 dark:text-gray-300">
            Comprehensive information for Vehicle ID: <span className="font-semibold">{vehicle.id}</span>
          </p>
        </header>

        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-900 dark:text-white">Vehicle ID:</span>
            <span>{vehicle.id}</span>
          </div>
         
          <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-900 dark:text-white">Model:</span>
            <span>{vehicle.model}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-900 dark:text-white">Active</span>
            <span>{vehicle.active===true?'Yes':'No'}</span>
          </div>
          {/* <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-900 dark:text-white">Status:</span>
            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full shadow-sm
              ${
                vehicle.active === true ? 'bg-green-200 text-green-900 dark:bg-green-700 dark:text-green-100' :
                vehicle.status === false ? 'bg-blue-200 text-blue-900 dark:bg-blue-700 dark:text-blue-100' :
                'bg-yellow-200 text-yellow-900 dark:bg-yellow-700 dark:text-yellow-100'
              }`}
            >
              {vehicle.status}
            </span>
          </div> */}
          <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-900 dark:text-white">Capacity</span>
            <span>{vehicle.capacity}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-900 dark:text-white">Plate Number</span>
            <span>{vehicle.plateNumber}</span>
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
