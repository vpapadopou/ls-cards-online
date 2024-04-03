import React from 'react';
import PropTypes from 'prop-types';

import { Badge } from '@/components/ui/badge';

import { categoryList } from '@/data/card-categories';

function LSCardHeader({ data }) {
  return (
    <>
      {/* Row 1 - Header */}
      <div className="flex flex-row space-x-5">
        {/* Left column - Icon */}
        <div className="basis-1/5 pt-2">
          <img className="max-h-16" src={data.logo} alt="Card Icon" data-testid="card-logo" />
        </div>
        {/* /Left column - Icon */}
        {/* Right column - Details */}
        <div className="basis-4/5">
          {/* Title & actions */}
          <div className="flex items-start">
            {/* Title */}
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-foreground mt-1">{data.title}</h4>
            {/* /Title */}
            {/* Actions */}
            <div className="flex flex-row ml-auto" />
            {/* /Actions */}
          </div>
          {/* /Title & actions */}
          {/* Short description */}
          <p className="text-sm text-muted-foreground">{data.description}</p>
          {/* /Short description */}
        </div>
        {/* /Right column - Details */}
      </div>
      {/* /Row 1 - Header */}
      {/* Row 2 - Categories & Time */}
      <div className="flex flex-row">
        {/* Loop through categories */}
        {data.categories.map((categoryId) => (
          <div className="flex items-center mr-3" key={categoryId}>
            {/* The category data is in the -1 position in the array since id numbering starts from 1 */}
            <span className={`w-3 h-3 ${categoryList[categoryId - 1].color} rounded-full mr-2`} data-testid="category-color" />
            <span className="text-sm font-bold text-muted-foreground" data-testid="category-title">
              {categoryList[categoryId - 1].title}
            </span>
          </div>
        ))}
        {/* /Loop through categories */}
        {/* Time */}
        <Badge className="ml-auto" variant="secondary">{`${data.time} min`}</Badge>
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
    categories: PropTypes.arrayOf(PropTypes.number).isRequired,
    time: PropTypes.number.isRequired,
  }).isRequired,
};

export default LSCardHeader;
