const InfoCard = ({ icon, title, children, colorClass = 'bg-blue-100 text-blue-600', onClick }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 ${onClick ? 'cursor-pointer hover:border-blue-400' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full dark:${colorClass.replace('bg-', 'bg-900 dark:bg-')} dark:${colorClass.replace('text-', 'text-300 dark:text-')} mr-4 ${colorClass}`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="text-gray-700 dark:text-gray-300 text-lg">
        {children}
      </div>
    </div>
  );
};
export default InfoCard;