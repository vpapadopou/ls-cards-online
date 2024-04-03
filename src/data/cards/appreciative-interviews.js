import appreciativeInterviewsLogo from './logos/appreciative-interviews.svg';

const appreciativeInterviews = {
  id: 5,
  title: 'Appreciative Interviews',
  description: 'Discover & build on the root causes of success',
  logo: appreciativeInterviewsLogo,
  categories: [2, 1],
  time: 60,
  invitation:
    'Ask:\n"Please tell a story about a time when you worked on a challenge with others and you are proud of what you accomplished. What is the story and what made the success possible? Pair up preferably with someone you don\'t know well."',
  people: '- Start with pairs, then groups of 4\n- Encourage groups to be diverse',
  spaceAndMaterials: '- Chairs for people to sit in pairs face-to-face\n- Paper for participants to take notes',
  steps: [
    {
      id: 1,
      description:
        'In pairs, participants take turns conducting an interview and telling a success story. Pay attention to what made success possible',
      time: '20 min',
    },
    {
      id: 2,
      description:
        'In groups of 4, each person retells the story of their partner. Listen for patterns in conditions/assets supporting success and take notes',
      time: '15 min',
    },
    { id: 3, description: 'Collect insights and patterns for the whole group on a flip chart', time: '15 min' },
    {
      id: 4,
      description:
        'Ask: "How are we investing in the assets and conditions that foster success" and "What opportunities do you see to do more?"\nUse 1-2-4-All to discuss',
      time: '10 min',
    },
  ],
  stringWith: 'Min Specs',
};

export default appreciativeInterviews;
