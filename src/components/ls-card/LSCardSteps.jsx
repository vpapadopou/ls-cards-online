import React from 'react';
import PropTypes from 'prop-types';

import { Badge } from '@/components/ui/badge';

function LSCardSteps({ title, steps }) {
  return (
    <div>
      <h5 className="scroll-m-20 text-m font-semibold tracking-tight text-foreground">{title}</h5>

      <div className="flex flex-col gap-3">
        {steps.map((step) => (
          <div className="flex flex-row" key={step.id}>
            {/* Step text */}
            <p className="text-sm font-normal tracking-normal grow whitespace-pre-line text-muted-foreground mr-5" data-testid="step-description">
              {step.description}
            </p>
            {/* /Step text */}
            {/* Step time (Needs a div wrapper) */}
            {step.time && (
              <div className="flex flex-row-reverse">
                <Badge className="min-w-14 h-6 text-center text-nowrap ml-auto" variant="secondary" data-testid="step-time">
                  {step.time}
                </Badge>
              </div>
            )}
            {/* /Step time (Needs a div wrapper) */}
          </div>
        ))}
      </div>
    </div>
  );
}

LSCardSteps.propTypes = {
  title: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      time: PropTypes.string,
    })
  ).isRequired,
};

LSCardSteps.defaultProps = {
  title: 'Steps',
};

export default LSCardSteps;
