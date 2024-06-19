import UserExperienceFishbowlSvg from './logos/UserExperienceFishbowl';

const userExperienceFishbowl = {
  id: 18,
  title: 'User Experience Fishbowl',
  description: 'Share know-how gained from experience with a larger community',
  logo: UserExperienceFishbowlSvg,
  categories: [2],
  time: 50,
  invitation:
    "Ask those in the fishbowl to describe their experience - the good, the bad and the ugly - informally, concretely, and openly. Invite them to do it in conversation with each other as if the audience wasn't there. Firmly, ask them to avoid presenting to the audience",
  people: '- One inner circle group of 3-7 people\n- One outer circle with multiple small satellite groups of 3-4 people',
  spaceAndMaterials: '- 3-7 chairs in circle in the middle of the room\n- Chairs as needed in an outer circle\n- Microphones (optional)',
  steps: [
    { id: 1, description: 'Explain configuration and steps', time: '2 min' },
    { id: 2, description: 'Inner circle conversation goes on until it ends on its own', time: '10-25 min' },
    { id: 3, description: 'Groups in outer circle formulate observations and questions', time: '4 min' },
    {
      id: 4,
      description:
        'Questions submitted to the inner circle are answered. Back-and-forth interaction between inner and outer circles goes on as needed',
      time: '10-25 min',
    },
    { id: 5, description: 'Debrief using What? So What? Now What? and ask:\n"What seems possible now?"', time: '10-15 min' },
  ],
  stringWith: 'Improv Prototyping, 25/10 Crowd Sourcing, Ecocycle Planning, Simple Ethnography, Shift & Share',
};

export default userExperienceFishbowl;
