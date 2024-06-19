import FifteenPercentSolutionsSvg from './logos/FifteenPercentSolutions';

const fifteenPercentSolutions = {
  id: 7,
  title: '15% Solutions',
  description: 'Discover & focus on what each person has the freedom and resources to do now',
  logo: FifteenPercentSolutionsSvg,
  categories: [1],
  time: 20,
  invitation:
    'In connection with their personal challenge or their group\'s challenge, ask:\n- "What is your 15 percent?"\n- "Where do you have discretion and freedom to act?"\n- "What can you do without more resources or authority?"',
  people: 'Start alone, then groups of 2 to 4 people',
  spaceAndMaterials: 'Chairs for people to sit in groups',
  steps: [
    { id: 1, description: 'First alone, each person generates their own list of 15% Solutions', time: '5 min' },
    { id: 2, description: 'Individuals share their ideas with a small group, one person at a time\n(3 min per person)', time: '12 min' },
    {
      id: 3,
      description:
        'Group members provide consultation to one another (asking clarifying questions and offering advice), one person at a time\n(5-7 min per person)',
      time: '28 min',
    },
  ],
  stringWith: 'Troika Consulting, Wise Crowds, Open Space Technology, Integrated~Autonomy, Helping Heuristics',
};

export default fifteenPercentSolutions;
