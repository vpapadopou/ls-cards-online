import OneTwoFourAllSvg from './logos/OneTwoFourAll';

const oneTwoFourAll = {
  id: 1,
  title: '1-2-4-All',
  description: 'Engage everyone simultaneously in generating questions, ideas and suggestions',
  logo: OneTwoFourAllSvg,
  categories: [1],
  time: 12,
  invitation: 'Ask a question in response to the presentation of an issue, or about a problem to resolve or a proposal put forward',
  people: 'Start alone, then in pairs, then groups of four, then the whole group',
  spaceAndMaterials:
    '- Space for people to work face-to-face in pairs and foursomes\n- Paper for participants to record observations and insights\n- Chairs and tables (optional)',
  steps: [
    { id: 1, description: 'Silent self-reflection by individuals on a shared challenge, framed as a question', time: '1 min' },
    { id: 2, description: 'Generate ideas in pairs, building on ideas from self-reflection', time: '2 min' },
    { id: 3, description: 'Share and develop ideas from your pair in foursomes (notice similarities and differences)', time: '4 min' },
    { id: 4, description: 'Each group shares one important idea with all (repeat cycle as needed)', time: '5 min' },
  ],
  stringWith: 'Design Storyboards, Improv Prototyping, Ecocycle Planning',
};

export default oneTwoFourAll;
