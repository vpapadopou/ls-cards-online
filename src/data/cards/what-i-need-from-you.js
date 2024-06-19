import WhatINeedFromYouSvg from './logos/WhatINeedFromYou';

const whatINeedFromYou = {
  id: 24,
  title: 'What I Need From You (WINFY)',
  description: 'Surface most essential needs across functions and accept or reject requests for support',
  logo: WhatINeedFromYouSvg,
  categories: [4],
  time: 65,
  invitation: 'Invite participants to ask for what they need from others to be successful in reaching a specific goal',
  people: '- 3-7 functional clusters (unlimited members)\n- One spokesperson from each cluster',
  spaceAndMaterials: '- Chairs for a group of 3 to 7 people to sit in a circle in the middle of the room\n- Paper for participants to take notes',
  steps: [
    { id: 1, description: 'Explain the process', time: '3 min' },
    {
      id: 2,
      description:
        'Clusters use 1-2-4-All (or 1-2-All) to make a list of their top needs from each of the other clusters in the room using the format:\n"What I need from you is ... "',
      time: '5-15 min',
    },
    { id: 3, description: 'Spokespersons gather and state their top two needs 1-by-1 to each other', time: '15 min' },
    {
      id: 4,
      description: 'Spokespersons (with group) write down one of four responses to each request: Yes, No, I will try, Whatever',
      time: '5-10 min',
    },
    { id: 5, description: 'Spokepersons repeat their requests and share their responses\n(No discussion! No elaboration!)', time: '10 min' },
    { id: 6, description: 'Debrief with What? So What? Now What?', time: '15 min' },
  ],
  stringWith: 'Helping Heuristics, Integrated~Autonomy, Appreciative Interviews, Ecocycle Planning',
};

export default whatINeedFromYou;
