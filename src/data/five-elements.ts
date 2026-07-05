export interface Element {
  name: string;
  nameCn: string;
  emoji: string;
  color: string;
  season: string;
  direction: string;
  traits: string[];
  description: string;
  strengths: string[];
  challenges: string[];
  generates: string;
  controls: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    element: string;
  }[];
}

export const ELEMENTS: Record<string, Element> = {
  Wood: {
    name: "Wood",
    nameCn: "木",
    emoji: "🌳",
    color: "#10B981",
    season: "Spring",
    direction: "East",
    traits: ["Growth", "Creativity", "Vision", "Flexibility", "Renewal"],
    description:
      "You are the embodiment of growth and renewal. Like a mighty tree reaching toward the sky, you possess an innate drive to expand, create, and evolve. Your mind is a garden of ideas — always planting new seeds of innovation and nurturing them into reality. You thrive on change and see every challenge as fertile ground for personal development. Your creative spirit inspires those around you, and your ability to envision the bigger picture makes you a natural leader and pioneer. You are most alive when starting fresh projects, exploring uncharted territory, or helping others unlock their potential. Your flexibility allows you to bend without breaking, adapting to life's storms while staying rooted in your core values. In relationships, you are generous and encouraging, always pushing your loved ones to grow. However, your restless energy can sometimes make it hard to finish what you start, and your idealism may clash with practical realities.",
    strengths: [
      "Visionary thinking and strategic planning",
      "Natural leadership and pioneering spirit",
      "Creative problem-solving abilities",
      "Resilience and adaptability under pressure",
      "Generosity in nurturing others' growth",
    ],
    challenges: [
      "Tendency to start projects without finishing them",
      "Impatience with slow-moving processes",
      "Idealism that may overlook practical constraints",
      "Difficulty letting go of control",
    ],
    generates: "Fire",
    controls: "Earth",
  },
  Fire: {
    name: "Fire",
    nameCn: "火",
    emoji: "🔥",
    color: "#EF4444",
    season: "Summer",
    direction: "South",
    traits: ["Passion", "Charisma", "Enthusiasm", "Courage", "Warmth"],
    description:
      "You burn with an irresistible passion that lights up every room you enter. Like a blazing flame, you are warm, magnetic, and impossible to ignore. Your enthusiasm is contagious — people are naturally drawn to your energy and often find themselves inspired by your zest for life. You live for connection, celebration, and the joy of shared experiences. Your courage allows you to take bold risks that others shy away from, and your optimism can turn even the darkest situations into opportunities for hope. You are a storyteller, a performer, a spark that ignites action in others. Your emotional intelligence runs deep, and you have a remarkable ability to make others feel seen and valued. At your best, you are a beacon of joy and inspiration. Yet your intensity can sometimes overwhelm, and your desire for excitement may lead to burnout if you forget to rest and reflect.",
    strengths: [
      "Magnetic charisma and social presence",
      "Boundless enthusiasm and optimism",
      "Courage to take bold action",
      "Emotional warmth and deep empathy",
      "Ability to inspire and motivate others",
    ],
    challenges: [
      "Prone to burnout from overexertion",
      "Impulsive decision-making",
      "Difficulty with routine and mundane tasks",
      "Tendency to seek external validation",
    ],
    generates: "Earth",
    controls: "Metal",
  },
  Earth: {
    name: "Earth",
    nameCn: "土",
    emoji: "🌍",
    color: "#EAB308",
    season: "Late Summer",
    direction: "Center",
    traits: ["Stability", "Nurturing", "Patience", "Reliability", "Harmony"],
    description:
      "You are the steady ground upon which others build their lives. Like the earth itself, you provide stability, nourishment, and unwavering support to everyone around you. Your presence is a comforting force — people trust you implicitly because you are consistent, dependable, and genuinely caring. You have a rare gift for creating harmony in any environment, mediating conflicts with wisdom and compassion. Your patience is your superpower; you understand that the best things in life take time, and you are willing to invest that time in building meaningful relationships and lasting achievements. You find deep satisfaction in nurturing others, whether through cooking a meal, offering advice, or simply being present during difficult moments. Your practical wisdom and grounded perspective make you an invaluable advisor. However, your selflessness can sometimes lead to neglecting your own needs, and your cautious nature may prevent you from taking the risks that could lead to extraordinary growth.",
    strengths: [
      "Exceptional reliability and trustworthiness",
      "Natural mediator and peacemaker",
      "Deep capacity for nurturing and caregiving",
      "Practical wisdom and grounded judgment",
      "Ability to create harmonious environments",
    ],
    challenges: [
      "Tendency to neglect personal needs for others",
      "Resistance to change and new experiences",
      "Over-cautiousness that limits growth",
      "Difficulty setting boundaries",
    ],
    generates: "Metal",
    controls: "Water",
  },
  Metal: {
    name: "Metal",
    nameCn: "金",
    emoji: "⚔️",
    color: "#94A3B8",
    season: "Autumn",
    direction: "West",
    traits: ["Precision", "Discipline", "Wisdom", "Integrity", "Refinement"],
    description:
      "You are forged from the finest steel — sharp, refined, and unyielding in your pursuit of excellence. Like a master craftsman's blade, you combine precision with purpose, approaching every aspect of life with careful analysis and unwavering standards. Your mind is your greatest weapon; you cut through confusion with clarity, organizing chaos into elegant systems. You value knowledge, competence, and integrity above all else, holding yourself and others to high standards that drive continuous improvement. Your disciplined nature means you rarely leave things to chance — you plan, prepare, and execute with remarkable efficiency. Others admire your composure under pressure and your ability to make sound decisions based on logic rather than emotion. You find beauty in order and meaning in mastery. Yet your perfectionism can sometimes create distance in relationships, and your analytical mind may struggle to embrace the beautiful imperfections that make life truly rich.",
    strengths: [
      "Exceptional analytical and critical thinking",
      "Strong discipline and self-mastery",
      "High standards and pursuit of excellence",
      "Composure and clarity under pressure",
      "Ability to create order from chaos",
    ],
    challenges: [
      "Perfectionism that hinders progress",
      "Emotional reserve that limits intimacy",
      "Rigidity in thinking and expectations",
      "Difficulty accepting imperfection in others",
    ],
    generates: "Water",
    controls: "Wood",
  },
  Water: {
    name: "Water",
    nameCn: "水",
    emoji: "💧",
    color: "#3B82F6",
    season: "Winter",
    direction: "North",
    traits: ["Wisdom", "Adaptability", "Intuition", "Depth", "Mystery"],
    description:
      "You flow through life with the quiet power of a deep river — calm on the surface yet possessing extraordinary depths beneath. Like water itself, you are endlessly adaptable, finding your way around any obstacle with grace and persistence. Your intuition is remarkably developed; you sense what others feel and think long before they express it, giving you an almost mystical ability to navigate complex social dynamics. You are a natural philosopher, drawn to life's deeper questions and unafraid to explore the unknown territories of the mind and spirit. Your quiet strength lies not in force but in persistence — like water wearing away stone, you achieve your goals through patience and steady determination. You are a deep thinker, a dreamer, and a keeper of secrets. Others are drawn to your mysterious presence and find peace in your calming influence. However, your tendency to retreat into solitude can sometimes isolate you, and your adaptability may lead you to lose your sense of self when you shape yourself too much to fit your surroundings.",
    strengths: [
      "Profound intuition and emotional depth",
      "Remarkable adaptability in any situation",
      "Philosophical thinking and love of wisdom",
      "Quiet persistence that overcomes obstacles",
      "Calming presence that soothes others",
    ],
    challenges: [
      "Tendency toward isolation and withdrawal",
      "Difficulty asserting personal boundaries",
      "Overthinking that leads to indecision",
      "Losing identity by adapting too much to others",
    ],
    generates: "Wood",
    controls: "Fire",
  },
};

export const ELEMENT_NAMES = ["Wood", "Fire", "Earth", "Metal", "Water"] as const;

export const QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "When facing a challenge, you tend to...",
    options: [
      { text: "Plan strategically and adapt", element: "Wood" },
      { text: "Dive in with passion and energy", element: "Fire" },
      { text: "Seek balance and support from others", element: "Earth" },
      { text: "Analyze carefully before acting", element: "Metal" },
      { text: "Stay calm and flow around obstacles", element: "Water" },
    ],
  },
  {
    id: 2,
    question: "Your ideal weekend looks like...",
    options: [
      { text: "Starting a new project or adventure", element: "Wood" },
      { text: "Socializing and celebrating with friends", element: "Fire" },
      { text: "Cooking for family and enjoying home", element: "Earth" },
      { text: "Organizing, learning, or perfecting a skill", element: "Metal" },
      { text: "Quiet reflection, reading, or being near water", element: "Water" },
    ],
  },
  {
    id: 3,
    question: "When making an important decision, you rely most on...",
    options: [
      { text: "Your vision for the future and gut instinct", element: "Wood" },
      { text: "Your heart and emotional excitement", element: "Fire" },
      { text: "The opinions of people you trust", element: "Earth" },
      { text: "Data, logic, and careful research", element: "Metal" },
      { text: "Your deep intuition and inner feelings", element: "Water" },
    ],
  },
  {
    id: 4,
    question: "At a social gathering, you are the one who...",
    options: [
      { text: "Proposes bold new ideas and plans", element: "Wood" },
      { text: "Becomes the life of the party", element: "Fire" },
      { text: "Makes sure everyone feels welcome and comfortable", element: "Earth" },
      { text: "Observes quietly and engages in deep conversations", element: "Metal" },
      { text: "Finds a quiet corner or stays on the edges", element: "Water" },
    ],
  },
  {
    id: 5,
    question: "When under pressure or stress, you typically...",
    options: [
      { text: "Channel frustration into productive action", element: "Wood" },
      { text: "Express your feelings openly and seek support", element: "Fire" },
      { text: "Try to restore calm and find a middle ground", element: "Earth" },
      { text: "Withdraw to analyze the situation logically", element: "Metal" },
      { text: "Retreat inward and wait for the storm to pass", element: "Water" },
    ],
  },
  {
    id: 6,
    question: "Your creative expression comes through...",
    options: [
      { text: "Building and designing new things", element: "Wood" },
      { text: "Performance, music, or dramatic storytelling", element: "Fire" },
      { text: "Crafting, gardening, or creating cozy spaces", element: "Earth" },
      { text: "Precision arts, writing, or technical craftsmanship", element: "Metal" },
      { text: "Poetry, painting, or abstract exploration", element: "Water" },
    ],
  },
  {
    id: 7,
    question: "As a leader, your style is best described as...",
    options: [
      { text: "Visionary — setting direction and inspiring growth", element: "Wood" },
      { text: "Charismatic — energizing and rallying the team", element: "Fire" },
      { text: "Servant — supporting and developing each person", element: "Earth" },
      { text: "Strategic — setting high standards and clear systems", element: "Metal" },
      { text: "Quiet — leading by example and trusting the process", element: "Water" },
    ],
  },
  {
    id: 8,
    question: "You learn best by...",
    options: [
      { text: "Experimenting and trying things hands-on", element: "Wood" },
      { text: "Discussing and debating with others", element: "Fire" },
      { text: "Following structured lessons with a supportive group", element: "Earth" },
      { text: "Studying independently with thorough research", element: "Metal" },
      { text: "Observing, reflecting, and absorbing at your own pace", element: "Water" },
    ],
  },
  {
    id: 9,
    question: "During a conflict with someone close, you tend to...",
    options: [
      { text: "Address it directly and push for a resolution", element: "Wood" },
      { text: "Express your emotions passionately", element: "Fire" },
      { text: "Compromise and prioritize the relationship", element: "Earth" },
      { text: "Present logical arguments and seek fairness", element: "Metal" },
      { text: "Step back, process your feelings, then respond gently", element: "Water" },
    ],
  },
  {
    id: 10,
    question: "When setting goals, you focus on...",
    options: [
      { text: "Ambitious, long-term visions that drive growth", element: "Wood" },
      { text: "Exciting milestones that fuel your passion", element: "Fire" },
      { text: "Realistic, steady goals that benefit everyone", element: "Earth" },
      { text: "Measurable targets with clear benchmarks", element: "Metal" },
      { text: "Fluid intentions that evolve with your understanding", element: "Water" },
    ],
  },
  {
    id: 11,
    question: "Your ideal way to relax is...",
    options: [
      { text: "Hiking, exploring nature, or trying something new", element: "Wood" },
      { text: "Dancing, games, or a lively night out", element: "Fire" },
      { text: "A home-cooked meal with loved ones", element: "Earth" },
      { text: "Reading, puzzles, or organizing your space", element: "Metal" },
      { text: "Meditation, baths, or watching the ocean", element: "Water" },
    ],
  },
  {
    id: 12,
    question: "Which season resonates most with your soul?",
    options: [
      { text: "Spring — fresh starts and blooming possibilities", element: "Wood" },
      { text: "Summer — warmth, energy, and vibrant days", element: "Fire" },
      { text: "Late Summer — golden harvest and gratitude", element: "Earth" },
      { text: "Autumn — crisp air, change, and quiet beauty", element: "Metal" },
      { text: "Winter — stillness, depth, and inner reflection", element: "Water" },
    ],
  },
  {
    id: 13,
    question: "Your life philosophy is closest to...",
    options: [
      { text: "Keep growing — life is about constant evolution", element: "Wood" },
      { text: "Live fully — embrace every moment with intensity", element: "Fire" },
      { text: "Stay grounded — cherish relationships and balance", element: "Earth" },
      { text: "Seek truth — pursue knowledge and excellence", element: "Metal" },
      { text: "Flow with it — trust the journey and go within", element: "Water" },
    ],
  },
  {
    id: 14,
    question: "If you were an animal, you would be...",
    options: [
      { text: "A deer — graceful, alert, and always moving forward", element: "Wood" },
      { text: "A phoenix — radiant, reborn from ashes, full of life", element: "Fire" },
      { text: "An ox — strong, dependable, and deeply loyal", element: "Earth" },
      { text: "A crane — elegant, precise, and wise", element: "Metal" },
      { text: "A koi fish — adaptable, persistent, and mysterious", element: "Water" },
    ],
  },
  {
    id: 15,
    question: "In your dream scenario, you are...",
    options: [
      { text: "Exploring a vast forest, discovering hidden paths", element: "Wood" },
      { text: "Performing on a grand stage to a cheering crowd", element: "Fire" },
      { text: "Hosting a joyful gathering in a beautiful garden", element: "Earth" },
      { text: "Solving a great mystery in an ancient library", element: "Metal" },
      { text: "Floating peacefully on a moonlit lake", element: "Water" },
    ],
  },
];

export function calculateScores(answers: Record<number, string>): Record<string, number> {
  const scores: Record<string, number> = {
    Wood: 0,
    Fire: 0,
    Earth: 0,
    Metal: 0,
    Water: 0,
  };
  for (const element of Object.values(answers)) {
    if (element in scores) {
      scores[element]++;
    }
  }
  return scores;
}

export function getDominantElement(scores: Record<string, number>): string {
  let max = 0;
  let dominant = "Wood";
  for (const [element, score] of Object.entries(scores)) {
    if (score > max) {
      max = score;
      dominant = element;
    }
  }
  return dominant;
}
