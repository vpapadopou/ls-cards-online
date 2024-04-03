import twentyfiveTenCrowdsourcingLogo from './logos/twentyfive-ten-crowdsourcing.svg';

const twentyfiveTenCrowdsourcing = {
  id: 12,
  title: '25/10 Crowd Sourcing',
  description: "Rapidly generate & sift a group's most powerful actionable ideas",
  logo: twentyfiveTenCrowdsourcingLogo,
  categories: [1],
  time: 30,
  invitation: 'Ask:\n"If you were ten times bolder, what big idea would you recommend? What first step would you take to get started?"',
  people: 'Start alone, mill around, then in pairs',
  spaceAndMaterials: '- Open space without chairs or tables\n- Index cards (one for each participant)',
  steps: [
    { id: 1, description: 'Explain the process and demonstrate', time: '5 min' },
    { id: 2, description: 'Every participant writes their bold idea on an index card', time: '5 min' },
    {
      id: 3,
      description:
        'People mill around and cards are passed from person to person (mill and pass only - no reading). When the bell rings, people stop passing cards and pair up to exchange thoughts on the cards in their hands. Participants individually rate the idea on their card with a score of 1 to 5 and write it on the back of the card',
      time: '3 min',
    },
    { id: 4, description: 'Conduct four more rounds', time: '12 min' },
    { id: 5, description: 'Find the top ten best-scoring ideas', time: '5 min' },
    { id: 6, description: 'Ask: "What caught your attention?"', time: '2 min' },
  ],
  stringWith: 'Open Space, Agreement-Certainty Matrix, Ecocycle Planning',
};

export default twentyfiveTenCrowdsourcing;
