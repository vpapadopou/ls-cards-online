import React from 'react';
import PropTypes from 'prop-types';

function LSCardHeader({ data }) {
  return (
    <>
      {/* Row 1 - Header */}
      <div className="flex flex-row space-x-5">
        {/* Left column - Icon */}
        <div className="basis-1/5 pt-2">
          <img className="max-h-16" src={data.logo} alt="1-2-4-All Icon" data-testid="card-logo" />
        </div>
        {/* /Left column - Icon */}
        {/* Right column - Details */}
        <div className="basis-4/5">
          {/* Title & actions */}
          <div className="flex items-start">
            {/* Title */}
            <h3 className="text-xl font-bold tracking-tight text-gray-700 dark:text-white mt-1">{data.title}</h3>
            {/* /Title */}
            {/* Actions */}
            <div className="flex flex-row ml-auto" />
            {/* /Actions */}
          </div>
          {/* /Title & actions */}
          {/* Short description */}
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">{data.description}</p>
          {/* /Short description */}
        </div>
        {/* /Right column - Details */}
      </div>
      {/* /Row 1 - Header */}
      {/* Row 2 - Categories & Time */}
      <div className="flex flex-row">
        {/* Loop through categories */}
        {data.categories.map((item) => (
          <div className="flex items-center mr-3" key={item.title}>
            <span className={`w-3 h-3 ${item.color} rounded-full mr-2`} data-testid="category-color" />
            <span className="text-gray-500 dark:text-gray-400 font-bold text-sm" data-testid="category-title">
              {item.title}
            </span>
          </div>
        ))}
        {/* /Loop through categories */}
        {/* Time */}
        <div className="bg-gray-200 dark:text-gray-700 px-3 py-1 rounded-full text-xs font-medium text-gray-800  ml-auto">{`${data.time} min`}</div>
        {/* /Time */}
      </div>
      {/* /Row 2 - Categories & Time */}
    </>
  );
}

LSCardHeader.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.node.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,
    time: PropTypes.number.isRequired,
  }).isRequired,
};

export default LSCardHeader;
