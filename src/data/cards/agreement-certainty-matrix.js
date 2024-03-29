import agreementCertaintyMatrixLogo from './logos/agreement-certainty-matrix.svg';

const agreementCertaintyMatrix = {
  id: 27,
  title: 'Agreement-Certainty Matrix',
  description: 'Sort challenges into simple, complicated, complex and chaotic domains',
  logo: agreementCertaintyMatrixLogo,
  categories: [{ title: 'Analyze', color: 'bg-purple-500' }],
  time: 45,
  invitation: 'Categorize challenges as simple, complicated, complex or chaotic & place them in the matrix',
  people: 'Start alone, groups of 4-6, whole group',
  spaceAndMaterials:
    '- Chairs for groups with or without small tables\n- Long open wall with a large tapestry paper illustration of the matrix\n- One blank matrix for every participant\n- Post-it notes and markers for everybody',
  steps: [
    { id: 1, description: 'Participants individually generate list of challenges', time: '5 min' },
    { id: 2, description: 'Participants place challenges in their individual matrixes', time: '5 min' },
    { id: 3, description: 'Discuss in pairs', time: '5 min' },
    { id: 4, description: 'In a group of 4-6: find points of agreement, difference & mismatches', time: '10 min' },
    { id: 5, description: 'Everyone posts their challenges on the large wall matrix', time: '5 min' },
    { id: 6, description: 'In small groups: "What pattern do we see? Do any mismatches stand out that we should address?"', time: '5 min' },
    { id: 7, description: 'Whole group: Share reflections and decide next steps', time: '10 min' },
  ],
  stringWith: 'Critical Uncertainties, Purpose-To-Practice, Ecocycle, Panarchy, Integrated~Autonomy',
};

export default agreementCertaintyMatrix;
