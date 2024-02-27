import whatThreeDebriefLogo from './logos/what-three-debrief.svg';

const whatThreeDebrief = {
  id: 9,
  title: 'What? So What? Now What?',
  description: 'Together, look back on progress to date and decide what adjustments are needed',
  logo: whatThreeDebriefLogo,
  categories: [{ title: 'Analyze', color: 'bg-purple-500' }],
  time: 45,
  invitation:
    'After a shared experience, ask three questions to reflect in a way that builds understanding and spurs coordinated action while avoiding unproductive conflict',
  people: 'Start alone, then groups of 5 to 7 people, then the whole group',
  spaceAndMaterials:
    '- Chairs for people to sit in small groups\n- Paper to make lists\n- Flip chart may be needed with a large group to collect answers\n- Small tables & Talking object (optional)',
  steps: [
    {
      id: 1,
      description:
        'Individuals work 1 min alone on "What happened? What did you notice, what facts or observations stood out?"\nThen, 2-7 mins in small groups',
      time: '8 min',
    },
    { id: 2, description: 'Salient facts are shared with the whole group and collected', time: '3 min' },
    {
      id: 3,
      description:
        'Repeat the same process with:\n"Why is that important? What patterns or conclusions are emerging? What hypotheses can I/we make?"',
      time: '13 min',
    },
    { id: 4, description: 'Then with:\n"Now what? What actions make sense?"', time: '18 min' },
  ],
};

export default whatThreeDebrief;
