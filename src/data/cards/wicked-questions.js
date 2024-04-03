import wickedQuestionsLogo from './logos/wicked-questions.svg';

const wickedQuestions = {
  id: 4,
  title: 'Wicked Questions',
  description: 'Articulate the paradoxical challenges that a group must confront to succeed',
  logo: wickedQuestionsLogo,
  categories: [1],
  time: 25,
  invitation: 'Ask:\n"What opposing-yet-complementary strategies do we need to pursue simultaneously in order to be successful?"',
  people: 'Ask participants to form groups of 4 to 6 people',
  spaceAndMaterials: '- Chairs\n- Paper for participants to record observations and insights\n- Small round tables (optional)',
  steps: [
    {
      id: 1,
      description:
        'Introduce the concept of Wicked Questions and paradox.\nGive the following template: "How is it that we are ... and we are ... simultaneously?"',
      time: '5 min',
    },
    { id: 2, description: 'First alone then in small groups, generate pairs of opposites or paradoxes using the above format', time: '5 min' },
    { id: 3, description: 'Each group selects its most impactful Wicked Question and shares it with the whole group', time: '5 min' },
    { id: 4, description: 'Whole group picks out the most powerful Wicked Questions and further refines them', time: '10 min' },
  ],
  stringWith: 'Improv Prototyping, Ecocycle Planning, 25/10 Crowd Sourcing, 15% Solutions, 1-2-4-All',
};

export default wickedQuestions;
