import improvPrototypingLogo from './logos/improv-prototyping.svg';

const improvPrototyping = {
  id: 15,
  title: 'Improv Prototyping',
  description: 'Develop effective solutions to chronic challenges while having serious fun',
  logo: improvPrototypingLogo,
  categories: [{ title: 'Reveal', color: 'bg-green-500' }],
  time: 20,
  invitation:
    'Identify a chronic challenge in your work, then playfully experiment, invent, and discover better ways to address the challenge by acting out the situation and possible solutions',
  people: '- One small group of players on "the stage"\n- All others, the observers, in small groups in front or around the stage',
  spaceAndMaterials: 'Open space or stage with chairs for everyone',
  steps: [
    { id: 1, description: 'Explain the process', time: '2 min' },
    { id: 2, description: 'Describe the scenario', time: '3 min' },
    { id: 3, description: 'Players on stage enact the scene', time: '3-5 min' },
    {
      id: 4,
      description: 'Each group debriefs with 1-2-4-All to identify successful and unsuccessful "chunks" from the observed scene',
      time: '5 min',
    },
    {
      id: 5,
      description: 'Each group pieces together the successful chunks into a new prototype. Volunteers act out the new prototype for their own group',
      time: '5 min',
    },
    {
      id: 6,
      description:
        'Participants from one of the groups who believe they have an improved prototype come on stage and enact their version for the whole group\n(Repeat as necessary)',
      time: '3-5 min',
    },
  ],
  stringWith: 'Design StoryBoards, Shift & Share, User Experience Fishbowl',
};

export default improvPrototyping;
