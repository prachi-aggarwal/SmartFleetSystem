export const VehicleColumn = [
  { label: 'ID', key: 'id' },
  { label: 'Make', key: 'make' },
  { label: 'Model', key: 'model' },
  { label: 'Year', key: 'year' },
  {
    label: 'Status',
    key: 'status',
    render: (value) => (
      <span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full shadow-sm
        ${
          value === 'Active' ? 'bg-green-200 text-green-900' :
          value === 'In Motion' ? 'bg-blue-200 text-blue-900' :
          'bg-yellow-200 text-yellow-900'
        }`}>
        {value}
      </span>
    )
  },
  { label: 'Location', key: 'location' },
  { label: 'Driver', key: 'driver' }
];
