import React from 'react';

export const Input = () => {
  return (
    <div className="py-5 space-y-8">
      <div className="flex flex-col space-y-2">
        <label htmlFor="default" className="font-medium text-gray-700 select-none">
          Default
        </label>
        <input
          id="default"
          type="text"
          name="default"
          placeholder="Placeholder"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="success" className="font-medium text-gray-700 select-none">
          Success
        </label>
        <input
          id="success"
          type="text"
          name="success"
          placeholder="Placeholder"
          className="px-4 py-2 text-green-600 placeholder-green-600 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="warning" className="font-medium text-gray-700 select-none">
          Warning
        </label>
        <input
          id="warning"
          type="text"
          name="warning"
          placeholder="Placeholder"
          className="px-4 py-2 text-yellow-600 placeholder-yellow-600 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="error" className="font-medium text-gray-700 select-none">
          Error
        </label>
        <input
          id="error"
          type="text"
          name="error"
          placeholder="Placeholder"
          className="px-4 py-2 text-red-600 placeholder-red-600 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200"
        />
      </div>
    </div>
  );
};
