import React from 'react';
import PropTypes from 'prop-types';

import LSCardHeader from './LSCardHeader';
import LSCardSteps from './LSCardSteps';
import LSCardText from './LSCardText';

function LSCard({ data }) {
  return (
    <div className="flex flex-col place-content-evenly gap-4">
      <LSCardHeader data={data} />
      {data.invitation && <LSCardText title="Invitation" text={data.invitation} />}
      <LSCardText title="People" text={data.people} />
      <LSCardText title="Space & Materials" text={data.spaceAndMaterials} />
      <LSCardSteps title={data.stepsAltTitle} steps={data.steps} />
      {data.stringWith && <LSCardText title="String With" text={data.stringWith} />}
    </div>
  );
}

LSCard.propTypes = {
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
    invitation: PropTypes.string,
    people: PropTypes.string.isRequired,
    spaceAndMaterials: PropTypes.string.isRequired,
    stepsAltTitle: PropTypes.string,
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        time: PropTypes.string,
      })
    ).isRequired,
    stringWith: PropTypes.string,
  }).isRequired,
};

export default LSCard;
