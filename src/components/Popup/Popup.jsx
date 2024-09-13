import React from 'react';

const Popup = (props) => {
  return (props.trigger) ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-6 w-4/5 max-h-[90vh] text-center relative shadow-lg">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">{props.title}</h1>
        </div>
        <div className="text-gray-600 mb-6">
          {props.description}
        </div>
        <div>
          <button
            type="button"
            className="py-2 px-4 bg-[--secondary-color] border-2 border-[--secondary-color] text-white rounded-lg hover:bg-white hover:text-[--secondary-color] transition duration-300 ease-in-out"
            onClick={props.onClick}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default Popup;