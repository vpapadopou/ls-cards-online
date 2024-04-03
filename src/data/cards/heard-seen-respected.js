import heardSeenRespectedLogo from './logos/heard-seen-respected.svg';

const heardSeenRespected = {
  id: 19,
  title: 'Heard, Seen, Respected (HSR)',
  description: 'Practice deeper listening and empathy with colleagues',
  logo: heardSeenRespectedLogo,
  categories: [4],
  time: 35,
  invitation:
    '- Tell a story to a partner about a time when you felt you were not heard, seen or respected\n- Ask listeners to avoid any interruptions except for asking clarifying questions',
  people: 'In pairs for the storytelling, then foursomes',
  spaceAndMaterials: 'Chairs facing each other, a few inches between knees',
  steps: [
    {
      id: 1,
      description: 'Introduce the purpose of HSR:\nTo practice listening without trying to fix anything or make any judgments',
      time: '3 min',
    },
    { id: 2, description: 'One at a time, each person has 7 minutes to share their story', time: '15 min' },
    { id: 3, description: 'Partners share with one another the experiences of listening and storytelling', time: '5 min' },
    {
      id: 4,
      description:
        'In a foursome, participants share reflections using 1-2-4, asking, "What patterns are revealed in the stories? What importance do you assign to the pattern?"',
      time: '5 min',
    },
    { id: 5, description: 'Whole group reflects on how HSR could be used to address challenges revealed by the patterns', time: '5 min' },
  ],
  stringWith: 'Troika Consulting, Generative Relationships STAR, Appreciative Interviews, Helping Heuristicsm Conversation Cafe',
};

export default heardSeenRespected;
