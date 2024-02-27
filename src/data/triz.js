import trizLogo from './logos/triz.svg';

const triz = {
  id: 6,
  title: 'TRIZ',
  description: 'Stop counterproductive activities & behaviors to make space for innovation',
  logo: trizLogo,
  categories: [{ title: 'Reveal', color: 'bg-green-500' }],
  time: 35,
  people: 'Ask participants to form groups of 4 to 7 people',
  spaceAndMaterials: '- Chairs\n- Paper for participants to record observations and insights\n- Small tables (optional)',
  stepsAltTitle: 'Invitation & Steps',
  steps: [
    { id: 1, description: 'Introduce the idea of TRIZ and identify an unwanted result', time: '5 min' },
    { id: 2, description: '"Make a list of all you can do to make sure you achieve the worst possible results."\nUse 1-2-4-All', time: '10 min' },
    {
      id: 3,
      description:
        '"Ask yourselves: \'Is there anything that we are currently doing that in any way, shape, or form resembles this item?\' Create a second list of all your counterproductive activities/programs/procedures."\nUse 1-2-4-All',
      time: '10 min',
    },
    { id: 4, description: '"What first steps will help you stop what you know creates undesirable results?"\nUse 1-2-4-All', time: '10 min' },
  ],
  stringWith: 'Ecocycle Planning, Troika Consulting, Wise Crowds, Open Space Technology',
};

export default triz;
