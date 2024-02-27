import drawingTogetherLogo from './logos/drawing-together.svg';

const drawingTogether = {
  id: 20,
  title: 'Drawing Together',
  description: 'Reveal insights and paths forward through non-verbal expression',
  logo: drawingTogetherLogo,
  categories: [{ title: 'Reveal', color: 'bg-green-500' }],
  time: 40,
  invitation: 'Invite participants to tell a story about a challenge they face or a common challenge, using only five symbols and no words',
  people: 'Start alone, then in groups of 1-4 people, then the whole group',
  spaceAndMaterials: '- Open wall with tapestry paper or flip charts\n- Water-based markers',
  symbols: 'Circle: wholeness, Rectangle: support,\nTriangle: goal, Spiral: change,\nStar Person: relationship',
  steps: [
    { id: 1, description: 'Introduce the concept and symbols', time: '5 min' },
    { id: 2, description: 'Practice drawing the symbols', time: '5 min' },
    {
      id: 3,
      description:
        'Working individually, combine the symbols to create the first draft of a story about "the journey" of working on a challenge or an innovation',
      time: '10 min',
    },
    { id: 4, description: 'Create a second draft. Refine the story by dramatizing the size, placement and color of the symbols', time: '10 min' },
    {
      id: 5,
      description: 'Invite another individual or the small group to interpret your drawings. The person who has done the drawing does not speak',
      time: '5 min',
    },
    { id: 6, description: 'Ask the whole group: "Together, what do the drawings reveal?"', time: '5 min' },
  ],
};

export default drawingTogether;
