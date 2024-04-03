import panarchyLogo from './logos/panarchy.svg';

const panarchy = {
  id: 32,
  title: 'Panarchy',
  description: 'Understand how embedded systems interact, evolve, influence the spread of innovation and transform',
  logo: panarchyLogo,
  categories: [3, 5],
  time: 120,
  invitation: 'What is contributing to the existence of a challenge at levels above and below you?',
  people: '1-2-4-All',
  spaceAndMaterials:
    '- Room with unobstructed flat wall\n- Blank Panarchy chart handout\n- Large wall-poster version of Panarchy chart\n- Post-it notes for each participant\n- Flip-chart pages for the Panarchy graphic',
  steps: [
    { id: 1, description: 'Introduce the idea of the Panarchy\n(and the Ecocycle if needed)', time: '5 min' },
    { id: 2, description: 'Identify the levels of the Panarchy', time: '30 min' },
    { id: 3, description: 'Identify obstacles and opportunities', time: '50 min' },
    { id: 4, description: 'Create and share action steps', time: '25 min' },
    { id: 5, description: 'Debrief using What? So What? Now What? and prioritize the next possible steps', time: '15 min' },
    { id: 6, description: '(Please refer to the book or website for detailed instructions)' },
  ],
  stringWith: 'Ecocycle Planning, 1-2-4-All, WINFY, Social Network Webbing, Celebrity Interview',
};

export default panarchy;
