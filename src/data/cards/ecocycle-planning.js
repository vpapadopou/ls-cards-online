import ecocyclePlanningLogo from './logos/ecocycle-planning.svg';

const ecocyclePlanning = {
  id: 31,
  title: 'Ecocycle Planning',
  description: 'Analyze the full portfolio of activities & relationships to identify obstacles & opportunities for progress',
  logo: ecocyclePlanningLogo,
  categories: [3, 5],
  time: 95,
  invitation:
    'View, organize, and prioritize current activities using four developmental phases: birth, maturity, creative destruction and renewal. Formulate action steps linked to each phase',
  people: '1-2-4-All, small groups for action steps',
  spaceAndMaterials:
    '- Chairs in groups of 4, with or without tables\n- Blank Ecocycle map worksheet for each participant & large version posted on the wall\n- Post-it notes for each activity',
  steps: [
    { id: 1, description: 'Introduce the idea of the Ecocycle', time: '5 min' },
    { id: 2, description: 'Generate individual activity list', time: '5 min' },
    { id: 3, description: 'Place activities on the Ecocycle, 2-4-All with Post-its on the big wall map', time: '40 min' },
    { id: 4, description: 'Decide for activities with consensus which to stop and which to start', time: '15 min' },
    { id: 5, description: 'Create first-action steps for items in the Rigidity and the Poverty trap', time: '20 min' },
    {
      id: 6,
      description:
        'Ask all the groups to focus on all the activities for which there is no consensus. When possible, create first-action steps to handle each one',
      time: '10 min',
    },
  ],
  stringWith: 'Panarchy, 1-2-4-All, WINFY, Open Space',
};

export default ecocyclePlanning;
