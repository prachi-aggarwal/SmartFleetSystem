
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-102">
      <div className="mb-4 p-3 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300">
        {icon}
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 leading-tight">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">{description}</p>
    </div>
  );
};

export default FeatureCard;