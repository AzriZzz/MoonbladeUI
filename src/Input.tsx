import React, { DOMAttributes } from 'react';

export interface InputStateProps extends DOMAttributes<HTMLInputElement> {
  /** Select the state of input field */
  state: 'Default' | 'Success' | 'Warning' | 'Error';
}

export const Input = ({
  state = 'Default',
  ...rest
}: InputStateProps) => {
  return (
    <div className="py-5 space-y-8">
      <div className="flex flex-col space-y-2">
        {state === 'Default' ? (
          <input
            id="default"
            type="text"
            name="default"
            placeholder="Placeholder"
            className="px-4 py-2 border border-gray-300 rounded-lg lg:w-80 focus:outline-none focus:ring-2 focus:ring-gray-200"
            {...rest}
          />
        ) : state === 'Success' ? (
          <input
            id="success"
            type="text"
            name="success"
            placeholder="Placeholder"
            className="px-4 py-2 text-green-600 placeholder-green-600 border border-green-500 rounded-lg lg:w-80 focus:outline-none focus:ring-2 focus:ring-green-200"
            {...rest}
          />
        ) : state === 'Warning' ? (
          <input
            id="warning"
            type="text"
            name="warning"
            placeholder="Placeholder"
            className="px-4 py-2 text-yellow-600 placeholder-yellow-600 border border-yellow-500 rounded-lg lg:w-80 focus:outline-none focus:ring-2 focus:ring-yellow-200"
            {...rest}
          />
        ) : state === 'Error' ? (
          <input
            id="error"
            type="text"
            name="error"
            placeholder="Placeholder"
            className="px-4 py-2 text-red-600 placeholder-red-600 border border-red-500 rounded-lg lg:w-80 focus:outline-none focus:ring-2 focus:ring-red-200"
            {...rest}
          />
        ) : (
          <input
            id="default"
            type="text"
            name="default"
            placeholder="Placeholder"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 lg:w-80 focus:ring-gray-200"
            {...rest}
          />
        )}
      </div>
    </div>
  );
};
