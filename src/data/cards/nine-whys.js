import nineWhysLogo from './logos/nine-whys.svg';

const nineWhys = {
  id: 3,
  title: 'Nine Whys',
  description: 'Make the purpose of your work together clear',
  logo: nineWhysLogo,
  categories: [3],
  time: 20,
  invitation:
    'Ask:\n- "What do you do when working on ... (the subject matter or challenge at hand)? Please make a short list of activities."\n- "Why is that important to you?"\n- Keep asking, "Why? Why? Why?" up to nine times or until participants have reached the fundamental purpose for this work',
  people: 'Start with pairs, then groups of four, then the whole group',
  spaceAndMaterials: '- Chairs for people to sit face-to-face\n- No tables or equipment needed',
  steps: [
    {
      id: 1,
      description:
        'Each person is interviewed by their partner.\nStarting with "What do you do when working on... ?" the interviewer gently seeks a deeper answer by repeating the query: "Why is that important to you?"',
      time: '5 min',
    },
    { id: 2, description: 'Switch roles', time: '5 min' },
    { id: 3, description: 'Each pair shares experience and insights with another pair', time: '5 min' },
    { id: 4, description: 'Invite the whole group to reflect by asking: "How do our purposes influence the next steps we take?"', time: '5 min' },
  ],
  stringWith: 'Purpose-To-Practice, Generative Relationships, Wise Crowds, What, So What, Now What?',
};

export default nineWhys;
