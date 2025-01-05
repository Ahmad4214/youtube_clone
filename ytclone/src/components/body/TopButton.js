import React from 'react';

const TopButton = ({ list }) => {
  console.log(list);
  return (
    <div className="flex m-4 overflow-x-auto">
      {list.map((item, index) => (
        <button
          className="bg-gray-200 py-2 px-3 rounded-lg mx-3"
          key={index}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
