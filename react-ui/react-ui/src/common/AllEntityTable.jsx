import { ArrowLeft, Eye, Edit, Trash2 } from "lucide-react";

const AllEntityTable = ({ title, data, columns, onBackClick, onView, onUpdate, onDelete }) => {
  console.log(columns)

  console.log(data)
  return (
    <div className="w-full mx-auto px-4 py-10 font-inter">
      <header className="mb-10 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
        <button
          onClick={onBackClick}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-5 rounded-full flex items-center justify-center sm:justify-start hover:from-blue-700 hover:to-blue-900 transition-all duration-300 ease-in-out mb-4 sm:mb-0 transform hover:scale-105 shadow-lg font-semibold"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back
        </button>
       <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 dark:text-blue-400 text-center mb-6">
  {title}
</h1>

        <div className="w-24 sm:block hidden" />
      </header>

      <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <tr>
              
              {columns.map((col, i) => (
                <th key={i} className={`px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider ${i === 0 ? 'rounded-tl-xl' : ''} ${i === columns.length - 1 ? 'rounded-tr-xl' : ''}`}>
                  {col.label}
                </th>
              ))}
              {(onView || onUpdate || onDelete) && (
                <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider rounded-tr-xl">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {data.map((item, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-150 transform hover:scale-x-[1.01] hover:shadow-md`}>
                {columns.map((col, i) => (
                  <td key={i} className="px-6 py-5 text-sm text-center text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    {col.render ? col.render(item[col.key], item) : item[col.key]}
                  </td>
                ))}
                {(onView || onUpdate || onDelete) && (
                  <td className="px-6 py-5 text-center text-sm">
                    <div className="flex justify-center space-x-4">
                      {onView && (
                        <button
                          onClick={() => onView(item)}
                          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                          title="View"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      )}
                      {onUpdate && (
                        <button
                          onClick={() => onUpdate(item)}
                          className="text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300"
                          title="Edit"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(item)}
                          className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AllEntityTable;
