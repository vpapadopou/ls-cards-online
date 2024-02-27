import troikaConsultingLogo from './logos/troika-consulting.svg';

const troikaConsulting = {
  id: 8,
  title: 'Troika Consulting',
  description: 'Get practical and imaginative help from colleagues immediately',
  logo: troikaConsultingLogo,
  categories: [
    { title: 'Help', color: 'bg-amber-700' },
    { title: 'Reveal', color: 'bg-green-500' },
  ],
  time: 30,
  invitation: 'Invite the group to explore the questions:\n- "What is your challenge?"\n- "What kind of help do you need?"',
  people: '- Ask participants to form groups of 3 people\n- People with diverse backgrounds and perspectives are most helpful',
  spaceAndMaterials: '- Groups of 3 chairs, knee-to-knee seating preferred\n- No tables',
  steps: [
    { id: 1, description: 'Invite participants to reflect on the consulting question they plan to ask when they are the clients', time: '1 min' },
    { id: 2, description: 'The first client shares their question', time: '2 min' },
    { id: 3, description: 'Consultants ask clarifying questions', time: '2 min' },
    { id: 4, description: 'Client turns their back to consultants. The two consultants generate ideas, suggestions, coaching advice', time: '5 min' },
    { id: 5, description: 'Client turns around and shares what were the most valuable things', time: '2 min' },
    { id: 6, description: 'Switch to next person and repeat steps', time: '22 min' },
  ],
  stringWith: 'Helping Heuristics, Nine Whys, Heard-Seen-Respected',
};

export default troikaConsulting;
