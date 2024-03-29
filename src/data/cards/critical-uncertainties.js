import criticalUncertaintiesLogo from './logos/critical-uncertainties.svg';

const criticalUncertainties = {
  id: 30,
  title: 'Critical Uncertainties',
  description: 'Develop strategies for successfully operating in a range of plausible yet unpredictable futures',
  logo: criticalUncertaintiesLogo,
  categories: [{ title: 'Strategize', color: 'bg-red-500' }],
  time: 100,
  invitation: 'Identify the most critical and uncertain "realities" in your operating environment or market. Which strategies can help?',
  people: 'Have a group large and diverse enough to break it up into four separate small groups',
  spaceAndMaterials: '- Four groups of chairs around tables\n- Paper, Post-it notes, flip charts, or tapestry paper for each group',
  steps: [
    { id: 1, description: 'Describe the sequence of steps', time: '2 min' },
    { id: 2, description: 'Make a list of uncertainties', time: '5 min' },
    { id: 3, description: 'Prioritize the most critical factors', time: '10 min' },
    { id: 4, description: 'Select the two most critical and most uncertain, place on grid as X and Y.\nFour quadrants are created', time: '5 min' },
    { id: 5, description: 'Each group writes a scenario for one quadrant, shares it, brainstorms strategies and shares them', time: '40 min' },
    { id: 6, description: 'Select robust and hedging strategies', time: '10 min' },
    { id: 7, description: 'Groups debrief with What? So What? Now What?', time: '10 min' },
    { id: 8, description: 'Groups share their debriefs and select a Now What to follow', time: '10 min' },
  ],
  stringWith: 'Conversation Cafe, P2P, WINFY, Open Space Technology, Wicked Questions, Min Specs',
};

export default criticalUncertainties;
