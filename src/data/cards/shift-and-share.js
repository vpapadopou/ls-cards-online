import ShiftAndShareSvg from './logos/ShiftAndShare';

const shiftAndShare = {
  id: 11,
  title: 'Shift & Share',
  description: 'Spread good ideas and make informal connections with innovators',
  logo: ShiftAndShareSvg,
  categories: [2],
  time: 90,
  invitation: 'Visit several innovators who will share something new or innovative',
  people:
    '- Presenters set up their individual stations\n- Whole group is split into the same number of small groups as there are presenters\n- Groups stay together while they rotate through all the innovation stations',
  spaceAndMaterials:
    '- Large space where 5 to 8 stations (with chairs) can be set up far enough from each other to minimize interference\n- Space for a display as needed by presenters',
  steps: [
    {
      id: 1,
      description:
        'Describe the process:\nGroups will move from station to station for a 10-minute presentation and brief questions & feedback period',
      time: '5 min',
    },
    { id: 2, description: 'Each group goes to a different station, where presenters conduct their sessions', time: '10 min' },
    { id: 3, description: 'Participants ask questions or provide feedback', time: '2 min' },
    { id: 4, description: 'Groups move to the next station\n\nRepeat until groups have visited all stations', time: '1 min' },
  ],
  stringWith: 'Improv Prototyping, What? So What? Now What?',
};

export default shiftAndShare;
