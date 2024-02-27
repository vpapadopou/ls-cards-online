import conversationCafeLogo from './logos/conversation-cafe.svg';

const conversationCafe = {
  id: 17,
  title: 'Conversation Cafe',
  description: 'Engage everyone in making sense of profound challenges',
  logo: conversationCafeLogo,
  categories: [{ title: 'Share', color: 'bg-blue-500' }],
  time: 50,
  invitation: "Invite all participants to gather in small groups to listen to one another's thoughts and reflect together on a shared challenge",
  people:
    '- Mixed, diverse groups of 5–7 participants\n- One person to act as the host - a participant whose role is to gently intervene when another participant visibly fails to observe one of the six Conversation Cafe agreements',
  spaceAndMaterials:
    '- Groups of 5 to 7 chairs around small tables\n- Talking object\n- Markers and one or two pieces of flip-chart paper per table (optional)',
  steps: [
    { id: 1, description: 'State the theme of the conversation, usually in the form of a question and explain the process' },
    { id: 2, description: 'Each person shares what they are thinking, feeling, or doing about the theme or topic', time: '1 min p.p.' },
    { id: 3, description: 'Each person shares thoughts and feelings after having listened to everybody at the table', time: '1 min p.p.' },
    { id: 4, description: 'Open conversation', time: '20-40 min' },
    { id: 5, description: 'Each member shares "takeaways"', time: '5-10 min' },
  ],
  stringWith: 'What? So What? Now What?, 15% Solutions, Design StoryBoards, Open Space Technology, User Experience Fishbowl',
};

export default conversationCafe;
