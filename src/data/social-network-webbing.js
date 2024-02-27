import socialNetworkWebbingLogo from './logos/social-network-webbing.svg';

const socialNetworkWebbing = {
  id: 23,
  title: 'Social Network Webbing',
  description: 'Map informal connections and decide how to strengthen the network to achieve a purpose',
  logo: socialNetworkWebbingLogo,
  categories: [
    { title: 'Share', color: 'bg-blue-500' },
    { title: 'Help', color: 'bg-amber-700' },
  ],
  time: 60,
  invitation:
    'Invite members of a core working group with a shared purpose to create a map of their network and decide how to expand and strengthen it',
  people: '- 1-2-4-All to generate names of key groups\n- Whole group to generate names of people in the network and construct the map',
  spaceAndMaterials: '- Open wall with tapestry paper or multiple flip-chart pages\n- Post-it notes in at least 8 colors\n- Bold-tip black pens',
  steps: [
    {
      id: 1,
      description: 'Create a legend of all the key groups in the network and assign a Post-it color or symbol for each (1-2-4-All)',
      time: '5 min',
    },
    { id: 2, description: 'Each member writes their name on a Post-it and puts it in the wall', time: '5 min' },
    {
      id: 3,
      description:
        '"What people do you know that are active in this work?"\n"Who else would you like to include in this work?"\nCreate a spider-web-like map',
      time: '20 min',
    },
    { id: 4, description: 'Draw connecting lines to illustrate influencing patterns', time: '15 min' },
    { id: 5, description: 'Devise strategies to strengthen the network', time: '10 min' },
  ],
  stringWith: '15% Solutions, Design StoryBoards, 1-2-4-All',
};

export default socialNetworkWebbing;
