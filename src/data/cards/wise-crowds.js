import wiseCrowdsLogo from './logos/wise-crowds.svg';

const wiseCrowds = {
  id: 13,
  title: 'Wise Crowds',
  description: 'Tap the wisdom of the whole group in rapid cycles',
  logo: wiseCrowdsLogo,
  categories: [1, 4],
  time: 15,
  invitation:
    '- Ask each participant to be the "client" when their turn comes and briefly describe their challenge and ask for help\n- Ask the other participants to act as a group of "consultants" whose task is to help the "client" and offer advice or recommendations',
  people: '- Groups of 4 to 5 people\n- Mixed groups across functions, levels and disciplines are ideal',
  spaceAndMaterials: '- Groups of 4 or 5 chairs arranged around small tables or in circles without tables\n- Paper for participants to take notes',
  steps: [
    { id: 1, description: 'The client presents their challenge and asks for help', time: '2 min' },
    { id: 2, description: 'Consultants ask clarifying questions', time: '3 min' },
    {
      id: 3,
      description:
        'The client turns their back to the consultants and gets ready to take notes.\nConsultants ask questions and offer advice and recommendations, working as a team',
      time: '8 min',
    },
    { id: 4, description: 'The client provides feedback to the consultants: what was useful and what they take away', time: '2 min' },
  ],
  stringWith: 'Helping Heuristics + Heard-Seen-Respected, Nine Whys, Troika Consulting, What I Need From You, Appreciative Interviews',
};

export default wiseCrowds;
