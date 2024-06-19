import IntegratedAutonomySvg from './logos/IntegratedAutonomy';

const integratedAutonomy = {
  id: 29,
  title: 'Integrated~Autonomy',
  description: 'Move from either-or to robust both-and solutions',
  logo: IntegratedAutonomySvg,
  categories: [5],
  time: 80,
  invitation:
    '"Will our purpose be best served by increased local autonomy, customization, competition, and freedom among units/sites? Or by increased integration, standardization, and control among units/sites? Or both?"',
  people: 'Start alone, then small groups of 4, then the whole group',
  spaceAndMaterials:
    '- Chairs for people to sit in groups of 4, with or without small tables\n- "Integrated Autonomy Worksheet" for each participant and a large one on the wall\n- Paper for recording activities and action steps',
  steps: [
    { id: 1, description: 'Introduce the idea', time: '5 min' },
    { id: 2, description: '1-2-4-All to generate a list of activities requiring attention', time: '10 min' },
    { id: 3, description: 'Groups of four pick and work on one activity from the list', time: '10 min' },
    { id: 4, description: '1-2-4 to develop action steps for standardization/customization', time: '10 min' },
    {
      id: 5,
      description:
        '"Which actions boost both? What modifications or ideas can be adopted to move some actions from the standardization/customization group to the common group?"',
      time: '5+15 min',
    },
    { id: 6, description: '1-2-4-All to prioritize the most promising actions that promote both integration and autonomy', time: '10 min' },
  ],
};

export default integratedAutonomy;
