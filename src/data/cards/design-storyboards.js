import DesignStoryboardsSvg from './logos/DesignStoryboards';

const designStoryboards = {
  id: 21,
  title: 'Design Storyboards',
  description: 'Define step-by-step elements for bringing initiatives or meetings to productive endpoints',
  logo: DesignStoryboardsSvg,
  categories: [6],
  time: 50,
  invitation:
    'Invite a design team (a representative subset of the group) to create a detailed plan, including visual cues, for how participants will interact to achieve their purpose',
  people: '1-2-All or 1-All in rapid cycles for each step',
  spaceAndMaterials: '- Open wall with tapestry paper or flip charts\n- Large Post-its and/or LS Cards\n- Blank storyboard',
  steps: [
    { id: 1, description: 'Clarify the purpose of working together\n(use Nine Whys if needed)', time: '2-5 min' },
    { id: 2, description: 'Evaluate the standard approach you would normally use for this session', time: '5-10 min' },
    { id: 3, description: 'Reexamine and strengthen the purpose statement if needed', time: '2-5 min' },
    { id: 4, description: 'Reexamine and decide who needs to participate or be involved', time: '2-5 min' },
    { id: 5, description: 'Brainstorm microstructures that could achieve the purpose', time: '5-10 min' },
    { id: 6, description: 'Select the best microstructures\n(choose one plus a backup)', time: '2-10 min' },
    { id: 7, description: 'Determine the questions and process you will use to evaluate your design', time: '2-5 min' },
  ],
};

export default designStoryboards;
