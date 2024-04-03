import openSpaceTechnologyLogo from './logos/open-space-technology.svg';

const openSpaceTechnology = {
  id: 25,
  title: 'Open Space Technology',
  description: 'Liberate inherent action and leadership in large groups',
  logo: openSpaceTechnologyLogo,
  categories: [1],
  time: 90,
  invitation: 'Invite participants to co-construct the agenda by posting sessions that they will convene on topics they are passionate about',
  people:
    '- Start together in one large circle (or as many concentric circles as needed)\n- Continue with groups of various sizes self-organized around agenda topics',
  spaceAndMaterials:
    '- Chairs in concentric circles in a large room\n- Large blank agenda posted on wall. It should include slots for enough concurrent sessions to accommodate what is likely to emerge given the challenge and the number of participants',
  steps: [
    {
      id: 1,
      description: 'Facilitator introduces the concept and mechanics of Open Space including the Law of Two Feet and its Four Principles',
      time: '5 min',
    },
    { id: 2, description: '"Marketplace" opens: participants propose topics plus a time and space for groups to meet', time: '15 min' },
    {
      id: 3,
      description: 'Conveners facilitate sessions. Groups develop recommendations and action plans. Notes are taken and published or posted',
      time: '2x30 min',
    },
    { id: 4, description: 'Debrief, proceedings distributed and closing', time: '10 min' },
  ],
  stringWith: 'Before: Celebrity Interview, Appreciative Interviews, TRIZ\nAfter: 25/10 Crowd Sourcing',
};

export default openSpaceTechnology;
