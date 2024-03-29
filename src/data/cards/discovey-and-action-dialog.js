import discoveryAndActionDialogLogo from './logos/discovery-and-action-dialog.svg';

const discoveryAndActionDialog = {
  id: 10,
  title: 'Discovery & Action Dialog',
  description: 'Discover, invent and unleash local solutions to chronic problems',
  logo: discoveryAndActionDialogLogo,
  categories: [{ title: 'Reveal', color: 'bg-green-500' }],
  time: 50,
  people:
    '- Facilitator works with a partner to serve as a recorder\n- Total group size should be between 5-15 people\n- Diversity in roles and experience is an important asset',
  spaceAndMaterials:
    '- DADs take place in a local setting or unit\n- Groups may be standing or sitting around a table\n- Paper, flip chart or projection equipment is needed to record insights and actions',
  stepsAltTitle: 'Invitation & Steps',
  steps: [
    {
      id: 1,
      description: 'State the purpose of the initiative being discussed and the DAD and invite brief round-robin introductions',
      time: '5 min',
    },
    {
      id: 2,
      description:
        'Ask the 7 questions one by one:\n1. How do you know the problem is exists?\n2. How do you contribute the solution?\n3. What prevents you from doing this or taking these actions all the time?\n4. Do you know anybody who is able to frequently solve the problem and overcome barriers? What made their success possible?\n5. Do you have any ideas?\n6. What needs to be done to make it happen? Any volunteers?\n7. Who else needs to be involved?',
      time: '60 min',
    },
    { id: 3, description: 'Ask the recorder to recap insights', time: '5 min' },
  ],
  stringWith: 'Improv Prototyping',
};

export default discoveryAndActionDialog;
