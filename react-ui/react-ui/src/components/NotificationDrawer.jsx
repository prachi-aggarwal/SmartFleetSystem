import { X } from "lucide-react";

const NotificationDrawer = ({ isOpen, onClose, notifications }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="fixed inset-0 bg-black bg-opacity-30"
        onClick={onClose}
      />

      <div className="relative w-80 max-w-full h-full bg-white dark:bg-gray-800 shadow-lg p-6 overflow-y-auto z-50">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300">Notifications</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-red-500" />
          </button>
        </div>

        <ul className="space-y-4">
          {notifications.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">No new notifications</p>
          ) : (
            notifications.map((notif, index) => (
              <li key={index} className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700">
                <p className="text-sm font-medium">{notif.title}</p>
                <p className="text-xs text-gray-600 dark:text-gray-300">{notif.message}</p>
                <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default NotificationDrawer;
