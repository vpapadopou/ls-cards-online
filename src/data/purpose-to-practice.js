import purposeToPracticeLogo from './logos/purpose-to-practice.svg';

const purposeToPractice = {
  id: 33,
  title: 'Purpose-To-Practice (P2P)',
  description: 'Define the five essential elements for a resilient & enduring initiative',
  logo: purposeToPracticeLogo,
  categories: [{ title: 'Plan', color: 'bg-orange-500' }],
  time: 120,
  invitation:
    'Invite all or most stakeholders to participate in the design of their new initiative in order to specify its five essential elements: purpose, principles, participants, structure and practices',
  people: '- Start with 1-2-4-All\n- Whole group for finalizing each element',
  spaceAndMaterials:
    '- Chairs and small tables for people to work in groups of 4\n- Large wall with poster paper for recording the P2P result for each element\n- Five worksheets for each participant, one for each of the five elements',
  steps: [
    { id: 1, description: 'Introduce the idea of P2P', time: '5 min' },
    { id: 2, description: 'Use 1-2-4-All to clarify purpose', time: '10 min' },
    { id: 3, description: 'In groups of four, compare, sift and amplify the top ideas', time: '10 min' },
    { id: 4, description: 'As a whole group, integrate themes and finalize ideas for Purpose', time: '10 min' },
    { id: 5, description: 'Repeat process to clarify principles, participants, structure and practices', time: '55 min' },
    { id: 6, description: 'After each element:\n"Has this element shed new light that suggests revisions to previous elements?"', time: '5 min' },
    { id: 7, description: 'Debrief using What? So What? Now What? in small groups and prioritize next steps as a whole group', time: '15 min' },
  ],
};

export default purposeToPractice;
