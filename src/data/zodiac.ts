// ── Zodiac Sign Interface ──────────────────────────────────────────────
export interface ZodiacSign {
  name: string;
  slug: string;
  symbol: string;
  dates: string;
  element: string;
  quality: string;
  ruler: string;
  traits: string[];
  description: string;
}

// ── Fortune Result Interface ───────────────────────────────────────────
export interface DailyFortune {
  overall: number;       // 3-5 stars
  love: number;          // 40-100
  career: number;        // 40-100
  health: number;        // 50-100
  finance: number;       // 30-100
  luckyColor: { name: string; hex: string };
  luckyNumber: number;
  luckyDirection: string;
  loveText: string;
  careerText: string;
  healthText: string;
  financeText: string;
  overallText: string;
}

// ── 12 Zodiac Signs ────────────────────────────────────────────────────
export const zodiacSigns: ZodiacSign[] = [
  {
    name: "Aries",
    slug: "aries",
    symbol: "♈",
    dates: "Mar 21 – Apr 19",
    element: "Fire",
    quality: "Cardinal",
    ruler: "Mars",
    traits: ["Courageous", "Energetic", "Pioneering"],
    description: "The Ram charges forward with fearless determination and boundless enthusiasm.",
  },
  {
    name: "Taurus",
    slug: "taurus",
    symbol: "♉",
    dates: "Apr 20 – May 20",
    element: "Earth",
    quality: "Fixed",
    ruler: "Venus",
    traits: ["Reliable", "Patient", "Sensual"],
    description: "The Bull stands grounded in beauty, loyalty, and steadfast devotion.",
  },
  {
    name: "Gemini",
    slug: "gemini",
    symbol: "♊",
    dates: "May 21 – Jun 20",
    element: "Air",
    quality: "Mutable",
    ruler: "Mercury",
    traits: ["Curious", "Witty", "Adaptable"],
    description: "The Twins dance between ideas with quicksilver brilliance and charm.",
  },
  {
    name: "Cancer",
    slug: "cancer",
    symbol: "♋",
    dates: "Jun 21 – Jul 22",
    element: "Water",
    quality: "Cardinal",
    ruler: "Moon",
    traits: ["Intuitive", "Nurturing", "Protective"],
    description: "The Crab carries a shell of strength guarding a deeply feeling heart.",
  },
  {
    name: "Leo",
    slug: "leo",
    symbol: "♌",
    dates: "Jul 23 – Aug 22",
    element: "Fire",
    quality: "Fixed",
    ruler: "Sun",
    traits: ["Bold", "Generous", "Charismatic"],
    description: "The Lion radiates warmth, creativity, and a magnetic presence.",
  },
  {
    name: "Virgo",
    slug: "virgo",
    symbol: "♍",
    dates: "Aug 23 – Sep 22",
    element: "Earth",
    quality: "Mutable",
    ruler: "Mercury",
    traits: ["Analytical", "Practical", "Diligent"],
    description: "The Maiden refines the world through careful attention and devoted service.",
  },
  {
    name: "Libra",
    slug: "libra",
    symbol: "♎",
    dates: "Sep 23 – Oct 22",
    element: "Air",
    quality: "Cardinal",
    ruler: "Venus",
    traits: ["Harmonious", "Diplomatic", "Fair"],
    description: "The Scales seek balance, beauty, and justice in all things.",
  },
  {
    name: "Scorpio",
    slug: "scorpio",
    symbol: "♏",
    dates: "Oct 23 – Nov 21",
    element: "Water",
    quality: "Fixed",
    ruler: "Pluto",
    traits: ["Intense", "Passionate", "Resourceful"],
    description: "The Scorpion transforms through depth, power, and unwavering focus.",
  },
  {
    name: "Sagittarius",
    slug: "sagittarius",
    symbol: "♐",
    dates: "Nov 22 – Dec 21",
    element: "Fire",
    quality: "Mutable",
    ruler: "Jupiter",
    traits: ["Adventurous", "Optimistic", "Philosophical"],
    description: "The Archer aims high, driven by wonder and the quest for truth.",
  },
  {
    name: "Capricorn",
    slug: "capricorn",
    symbol: "♑",
    dates: "Dec 22 – Jan 19",
    element: "Earth",
    quality: "Cardinal",
    ruler: "Saturn",
    traits: ["Ambitious", "Disciplined", "Strategic"],
    description: "The Sea-Goat climbs steadily toward mastery with patience and resolve.",
  },
  {
    name: "Aquarius",
    slug: "aquarius",
    symbol: "♒",
    dates: "Jan 20 – Feb 18",
    element: "Air",
    quality: "Fixed",
    ruler: "Uranus",
    traits: ["Innovative", "Humanitarian", "Independent"],
    description: "The Water Bearer pours forth vision, originality, and humanitarian spirit.",
  },
  {
    name: "Pisces",
    slug: "pisces",
    symbol: "♓",
    dates: "Feb 19 – Mar 20",
    element: "Water",
    quality: "Mutable",
    ruler: "Neptune",
    traits: ["Empathic", "Imaginative", "Mystical"],
    description: "The Fish swim in the deep currents of intuition, art, and cosmic love.",
  },
];

// ── Lookup helper ──────────────────────────────────────────────────────
export function getZodiacBySlug(slug: string): ZodiacSign | undefined {
  return zodiacSigns.find((s) => s.slug === slug);
}

// ── Deterministic Hash Function ────────────────────────────────────────
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

// ── Lucky Colors Pool ──────────────────────────────────────────────────
const luckyColors = [
  { name: "Ruby Red", hex: "#E11D48" },
  { name: "Amber Gold", hex: "#F59E0B" },
  { name: "Emerald Green", hex: "#10B981" },
  { name: "Sapphire Blue", hex: "#3B82F6" },
  { name: "Amethyst Purple", hex: "#8B5CF6" },
  { name: "Rose Pink", hex: "#EC4899" },
  { name: "Coral Orange", hex: "#F97316" },
  { name: "Ivory White", hex: "#F5F5F4" },
  { name: "Obsidian Black", hex: "#1E293B" },
  { name: "Teal", hex: "#14B8A6" },
  { name: "Bronze", hex: "#CD7F32" },
  { name: "Silver", hex: "#94A3B8" },
];

// ── Lucky Directions Pool ──────────────────────────────────────────────
const luckyDirections = ["N", "S", "E", "W", "NE", "NW", "SE", "SW"];

// ── Fortune Text Templates ─────────────────────────────────────────────
const loveTexts = [
  "The stars align to bring warmth and tenderness into your romantic life. If you are in a relationship, expect a deepening of your bond through heartfelt conversation. Singles may catch the eye of someone intriguing during the afternoon hours. Let your authentic self shine — vulnerability is your greatest strength today. Trust that the universe is orchestrating connections that serve your highest good.",
  "A gentle cosmic breeze carries the scent of new beginnings in love. Existing partnerships benefit from shared laughter and spontaneous gestures. For the unattached, a chance encounter could spark something unexpectedly beautiful. Open your heart without conditions and let the universe surprise you. Remember that self-love is the foundation upon which all other loves are built.",
  "Today brings a reflective energy to matters of the heart. You may find yourself revisiting old feelings or reconsidering what you truly need from a partner. This introspection is healthy and necessary. Communication flows easily — use this to express feelings you have been holding back. The stars reward honesty with deeper intimacy and understanding.",
  "Venus whispers sweet melodies into your love life today. Romance takes on a fairy-tale quality, making even ordinary moments feel magical. Couples should plan something special together, even if it is a simple walk under the evening sky. Singles radiate an irresistible charm that draws admirers closer. Embrace the joy that comes from genuine emotional connection.",
  "The cosmos encourages you to break free from routine in your love life. Surprise your partner with something unexpected, or take a bold step toward someone you have been eyeing. Adventure and spontaneity are your allies today. Trust your instincts — they will guide you toward the connections that truly matter. Let passion lead the way.",
  "A powerful day for emotional healing and renewal in love. Past wounds begin to dissolve under the gentle light of the stars. You are ready to embrace a healthier, more balanced approach to relationships. Set boundaries with compassion and watch trust grow. The universe supports your journey toward a love that is both passionate and peaceful.",
  "Today the stars illuminate the path to deeper emotional intimacy. Share your dreams and fears with someone who truly listens. Single signs may reconnect with someone from the past in a meaningful way. Let go of perfectionism in love and embrace the beautifully imperfect reality of human connection. The cosmos rewards courage in matters of the heart.",
];

const careerTexts = [
  "Your professional instincts are razor-sharp today. A bold idea could impress colleagues or superiors — do not hold back. Collaborative projects gain momentum as Mercury's influence sharpens communication. Financial opportunities may surface through unexpected channels. Stay focused on your long-term goals while remaining flexible enough to seize the moment. Your dedication is about to pay off in tangible ways.",
  "The stars illuminate your path to professional growth today. Creative solutions to old problems emerge with surprising clarity. Your reputation as a reliable and innovative thinker strengthens. A mentor or senior figure may offer valuable guidance — listen carefully to their wisdom. Strategic networking opens doors you did not know existed. Trust the process and keep building.",
  "A surge of productive energy fills your workday with purpose. Tasks that once seemed daunting now feel manageable and even enjoyable. Your organizational skills shine, earning recognition from those who matter. Consider taking on a leadership role in a group project. Financial gains are possible through careful decision-making and timely action. The cosmos supports your ambition today.",
  "Today favors strategic planning and behind-the-scenes work. Not every victory needs to be public — use this quiet energy to prepare for bigger moves ahead. Research, study, and skill-building are especially favored. A colleague may become an unexpected ally in your professional journey. Patience and preparation are the foundations of lasting success. Let your work speak for itself.",
  "The cosmic energy today amplifies your leadership qualities. Others naturally look to you for direction and inspiration. Take charge with confidence and grace. A new project or opportunity aligns perfectly with your skills and aspirations. Financial negotiations favor your side — speak up for what you deserve. The stars support bold moves made with integrity and vision.",
  "An important day for professional relationships and teamwork. Your ability to mediate and find common ground sets you apart from the crowd. A creative collaboration could yield impressive results. Financial stability improves through disciplined choices and wise counsel. Remember that every professional interaction is an opportunity to build your legacy. Stay authentic and watch doors open.",
];

const healthTexts = [
  "Your vitality runs strong today, making it an ideal time for physical activity. Outdoor exercise brings extra benefits as fresh air and sunlight recharge your spirit. Pay attention to nutrition — whole foods and hydration are your best allies. Mental clarity improves through mindfulness or journaling. Balance is the key: work hard but allow yourself moments of pure rest and joy.",
  "Today the stars encourage you to nurture your body with extra care. A restorative practice like yoga, stretching, or a long walk in nature works wonders. Emotional well-being is closely tied to physical health today, so address stress before it builds. Nourishing meals prepared with love feed both body and soul. Listen to what your body whispers — it knows exactly what it needs.",
  "A powerful day for breaking unhealthy habits and starting fresh. Your willpower is stronger than usual — channel it toward positive lifestyle changes. Mental health benefits from creative expression, whether through writing, art, or music. Social connections play a vital role in your overall wellness today. Reach out to loved ones and let their energy uplift your spirit.",
  "The cosmic energy supports deep healing and rejuvenation today. Prioritize sleep and rest — your body is doing important repair work beneath the surface. Herbal teas and warm baths enhance this restorative process. Emotional release may come through conversation or quiet contemplation. Trust that taking things slowly today builds the energy reserves you will need tomorrow.",
  "Today brings a surge of vibrant energy that makes healthy choices feel effortless. Try a new workout or explore a form of movement you have never attempted. Your body responds beautifully to variety and play. Mental sharpness peaks in the afternoon — use this time for important decisions. Hydration and balanced meals keep your energy steady throughout the day.",
  "The stars highlight the connection between mind and body today. Meditation or deep breathing exercises unlock profound healing potential. Physical stamina is high, making it a good day for challenging workouts or long hikes. Pay attention to your posture and ergonomics — small adjustments bring significant relief. Your health journey is a marathon, not a sprint.",
];

const financeTexts = [
  "Financial opportunities shimmer on the horizon today. Your intuition about money matters is especially strong — trust those gut feelings about investments or purchases. A side hustle or creative project could generate unexpected income. Avoid impulsive spending; instead, channel your resources toward things that truly align with your values. Long-term financial planning brings peace of mind and a clear path forward.",
  "The stars favor disciplined financial management today. Review your budget and look for areas where small adjustments yield significant savings. A conversation with a financially savvy friend could reveal new strategies. Avoid lending money today — protect your own resources first. Steady, consistent growth outperforms risky speculation. Your patience with money builds a foundation of lasting security.",
  "A day of financial clarity and strategic thinking. Your analytical mind spots patterns and opportunities that others miss. Consider diversifying your income streams or investing in education that boosts your earning potential. An unexpected expense may arise, but your emergency fund handles it gracefully. The cosmos rewards those who plan wisely and act decisively with money.",
  "Today brings a generous cosmic energy to your financial sector. Gifts, bonuses, or favorable deals may come your way. Share your abundance with others — generosity creates a positive cycle that returns to you multiplied. Avoid getting caught up in comparison or materialism. True wealth includes health, relationships, and inner peace. The stars remind you that the richest life is a balanced one.",
  "The planetary alignment today sharpens your business acumen and financial instincts. Negotiations and contracts are favored — your terms are likely to be accepted. Creative monetization of your skills brings surprising returns. Stay organized with paperwork and deadlines. A small investment in self-improvement today yields exponential returns in the future. The cosmos supports your journey toward financial freedom.",
  "A reflective day for examining your relationship with money. Old beliefs about wealth and scarcity may surface — acknowledge them, then choose new, empowering narratives. Passive income streams deserve attention and nurturing. A financial advisor or mentor could offer transformative advice. Remember that abundance flows to those who maintain a positive, grateful mindset. Your financial future is bright.",
];

const overallTexts = [
  "Today is a day of powerful cosmic alignment that touches every area of your life. The stars encourage you to embrace change with open arms and an open heart. Trust that the universe is guiding you toward your highest path. Small actions taken today can create ripple effects that transform your tomorrow. Stay present, stay curious, and let the magic unfold naturally.",
  "The celestial energies today bring a sense of clarity and purpose that has been missing. You begin to see the bigger picture and understand how every experience has shaped you. Embrace both the light and shadow within — integration brings true power. Relationships deepen, ambitions sharpen, and your spirit soars. This is a day to remember and act upon.",
  "A harmonious day where mind, body, and spirit align beautifully. Your intuition is heightened, making it easier to navigate complex decisions. Creative inspiration flows freely — capture it in whatever form speaks to you. The universe rewards authenticity and courage today. Let go of what no longer serves you and make space for miracles to enter your life.",
  "Today carries a transformative energy that invites you to release old patterns and embrace new possibilities. Every challenge you face is a stepping stone toward greater wisdom. Your resilience inspires those around you. Focus on progress, not perfection. The cosmos celebrates every step you take toward your dreams, no matter how small it may seem.",
  "The stars weave a tapestry of opportunity and growth across your day. Connections with others bring unexpected joy and valuable insights. Your creative energy peaks during the late morning hours — use this time for your most important work. Evening hours favor relaxation and intimate conversations. Balance ambition with gratitude, and you will find that today exceeds your expectations.",
];

// ── Generate Daily Fortune ─────────────────────────────────────────────
export function generateDailyFortune(sign: string, date: Date): DailyFortune {
  const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  const seed = `${dateStr}-${sign}`;
  const hash = simpleHash(seed);

  const overall = (hash % 3) + 3; // 3-5 stars
  const love = 40 + (hash * 7) % 60;
  const career = 40 + (hash * 13) % 60;
  const health = 50 + (hash * 11) % 50;
  const finance = 30 + (hash * 17) % 70;

  const luckyColor = luckyColors[hash % luckyColors.length];
  const luckyNumber = (hash % 9) + 1;
  const luckyDirection = luckyDirections[hash % luckyDirections.length];

  const loveText = loveTexts[hash % loveTexts.length];
  const careerText = careerTexts[(hash * 3) % careerTexts.length];
  const healthText = healthTexts[(hash * 5) % healthTexts.length];
  const financeText = financeTexts[(hash * 7) % financeTexts.length];
  const overallText = overallTexts[(hash * 11) % overallTexts.length];

  return {
    overall,
    love,
    career,
    health,
    finance,
    luckyColor,
    luckyNumber,
    luckyDirection,
    loveText,
    careerText,
    healthText,
    financeText,
    overallText,
  };
}
