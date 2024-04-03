import simpleEthnographyLogo from './logos/simple-ethnography.svg';

const simpleEthnography = {
  id: 28,
  title: 'Simple Ethnography',
  description: 'Observe and record actual behaviors of users in the field',
  logo: simpleEthnographyLogo,
  categories: [3],
  time: 75,
  invitation:
    'Invite participants to silently observe people with experience relevant to the challenge at hand and then follow up with interviews for more insight',
  people: 'In 1s or 2s distributed among sites being observed, whole group for debrief',
  spaceAndMaterials:
    '- Local setting (workplace, client organization, neighborhood) with a convenient space for sharing findings, photos, and videos\n- Notebook, camera, video (optional)',
  steps: [
    { id: 1, description: 'Explain the problem and situation', time: '5 min' },
    { id: 2, description: 'Identify sites to observe and people to shadow', time: '5 min' },
    {
      id: 3,
      description: 'Visit sites and observe interactions and activities without speaking. Record details & internal reflections',
      time: '10-180 min',
    },
    { id: 4, description: 'Select behaviors that address the challenge and interview individuals', time: '20-180 min' },
    { id: 5, description: 'Regroup and use 1-2-4-All to compare notes and find patterns', time: '15 min' },
    { id: 6, description: 'Write up observations', time: '10-20 min' },
    { id: 7, description: 'Feed insights into brainstorming and prototyping efforts\n(Repeat process as needed)', time: '10 min' },
  ],
};

export default simpleEthnography;
