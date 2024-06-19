import CelebrityInterviewSvg from './logos/CelebrityInterview';

const celebrityInterview = {
  id: 22,
  title: 'Celebrity Interview',
  description: 'Reconnect the experience of leaders and experts with people closest to the challenge at hand',
  logo: CelebrityInterviewSvg,
  categories: [2],
  time: 45,
  invitation:
    '- Invite the celebrity to let go of their formal presentation or speech and answer the harder questions in a casual "talk show" format\n- Invite group members to listen, see the person behind the celebrity and write down questions with colleagues',
  people: 'Whole group for the interview, 1-2-4 to generate questions',
  spaceAndMaterials:
    '- Interviewer and celebrity in the front of the room where everyone can see and hear the interation\n- Large cards to collect questions',
  steps: [
    { id: 1, description: 'Interviewer welcomes and introduces the celebrity & topic to be discussed', time: '3 min' },
    { id: 2, description: 'Interviewer asks questions that the audience would be expected to ask', time: '15-30 min' },
    { id: 3, description: 'Participants generate additional questions in a 1-2-4 conversation and write them on cards', time: '5-10 min' },
    { id: 4, description: 'Interviewer sifts the cards, looking for patterns and asking additional questions to the celebrity', time: '5-10 min' },
    { id: 5, description: 'Interviewer makes closing comments, thanks the celebrity', time: '1 min' },
  ],
  stringWith: 'User Experience Fishbowl, Open Space Technology, Discovery & Action Dialogue, What I Need From You',
};

export default celebrityInterview;
