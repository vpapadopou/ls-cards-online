import generativeRelationshipsLogo from './logos/generative-relationships.svg';

const generativeRelationships = {
  id: 26,
  title: 'Generative Relationships',
  description: 'Reveal and understand relationship patterns that create value or dysfunctions',
  logo: generativeRelationshipsLogo,
  categories: [{ title: 'Analyze', color: 'bg-purple-500' }],
  time: 25,
  invitation:
    'Invite participants to assess their working group or team in terms of four attributes:\nS - Separateness (diversity)\nT - Tuning (listening, reflecting on challenges)\nA - Action (opporunities to act on ideas)\nR - Reason to work together',
  people: 'Start alone, then small groups, then the whole group',
  spaceAndMaterials:
    '- Tables for small groups of 4, with a STAR compass graphic and pens for each individual\n- A STAR compass graphic on a flip-chart page for each small group & one for the whole group',
  steps: [
    { id: 1, description: 'Participants individually assess where the team is in regard to each of the four elements', time: '5 min' },
    {
      id: 2,
      description:
        'In small groups, participants place a dot along each compass point, then talk with their neighbors (1-2-4) about their placements, looking for consensus and differences',
      time: '5 min',
    },
    {
      id: 3,
      description: 'Small groups decide what type of results are generated by the pattern of interaction they have identified',
      time: '5 min',
    },
    { id: 4, description: 'Small groups brainstorm action steps to boost elements needing attention', time: '5 min' },
    { id: 5, description: 'Whole group assembles list of action steps and decides: "What first steps can we take right now?"', time: '5 min' },
  ],
};

export default generativeRelationships;
