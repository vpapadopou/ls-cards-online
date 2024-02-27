import minSpecsLogo from './logos/min-specs.svg';

const minSpecs = {
  id: 14,
  title: 'Min Specs',
  description: 'Specify only the absolute "Must do\'s" & "Must not do\'s" for achieving a purpose',
  logo: minSpecsLogo,
  categories: [{ title: 'Strategize', color: 'bg-red-500' }],
  time: 45,
  invitation:
    "- In the context of a challenging activity, a new initiative, or a strategic bottleneck, invite participants to generate a list of all the do's and don'ts they should pay attention to in order to achieve a successful outcome (Max Specs)\n- Ask participants to reduce the previous list to the absolute minimum needed to achieve their purpose (Min Specs)",
  people: 'Start alone, then small groups of 4 to 7, then the whole group',
  spaceAndMaterials: '- Groups of 4 to 7 chairs around small tables\n- Paper to record Max and Min Specs',
  steps: [
    { id: 1, description: 'Starting alone, each participant generates their Max Specs list', time: '1 min' },
    { id: 2, description: 'Repeat the process, this time in small groups. Make list as complete as possible', time: '5 min' },
    {
      id: 3,
      description:
        'Each group sifts through the list one item at a time and eliminates every rule that gets a positive answer to: "If we broke or ignored this rule, could we still achieve our purpose?"',
      time: '15 min',
    },
    { id: 4, description: 'Do a second round if needed', time: '15 min' },
    { id: 5, description: 'Consolidate across groups to the shortest possible list', time: '15 min' },
  ],
  stringWith: 'Simple Ethnography, Nine Whys',
};

export default minSpecs;
