import HelpingHeuristicsSvg from './logos/HelpingHeuristics';

const helpingHeuristics = {
  id: 16,
  title: 'Helping Heuristics',
  description: 'Practice progressive methods for helping others, receiving and asking for help',
  logo: HelpingHeuristicsSvg,
  categories: [4],
  time: 15,
  invitation: 'Participants view all human interactions as offers that are either accepted or blocked',
  people:
    'Groups of 3: two participants interacting face-to-face in the roles of client (with a challenge to share) and coach plus one observer (roles can change between rounds)',
  spaceAndMaterials: 'Standing participants, no chairs or tables',
  steps: [
    { id: 1, description: 'Explain the process', time: '2 min' },
    { id: 2, description: '"Quiet Presence": Coach accepts all offers with compassionate listening', time: '2 min' },
    { id: 3, description: '"Guided Discovery": Coach accepts all offers, guiding inquiry for mutual discoveries', time: '2 min' },
    {
      id: 4,
      description: '"Loving Provocation": Coach interjects advice, accepting and blocking as needed when they see something that the client does not',
      time: '2 min',
    },
    {
      id: 5,
      description: '"Process Mindfulness": Coach and client accept all offers from each other, while noticing how novel possibilities are amplified',
      time: '2 min',
    },
    { id: 6, description: 'Debrief in the group', time: '5 min' },
  ],
  stringWith: 'Troika Consulting, Wise Crowds, What I Need From You, Improv Prototyping, Simple Ethnography',
};

export default helpingHeuristics;
