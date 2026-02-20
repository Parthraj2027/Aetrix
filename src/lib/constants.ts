// ─── All AETRIX data in one place ──────────────────────────────────────────

export const CAL_EVENTS: Record<string, { short: string; title: string; desc: string; hackathon: boolean }> = {
  '2026-02-20': { short: 'Reg. Open',     title: 'Registrations Open',       hackathon: false, desc: 'Portal goes live. Problem statements & rulebook released. Spread the word across colleges.' },
  '2026-03-15': { short: 'Reg. Close',    title: 'Registrations Close',      hackathon: false, desc: 'Last day to register. Portal closes after 250 registrations or on this date.' },
  '2026-03-16': { short: 'Aptitude Test', title: 'Aptitude Elimination Test',hackathon: false, desc: 'Online aptitude, logical reasoning & tech-awareness test. ~150 shortlisted from 250+.' },
  '2026-03-18': { short: 'Results',       title: 'Results Announced',        hackathon: false, desc: 'Shortlisted participant list released. Final team formation & mentor orientation session.' },
  '2026-03-21': { short: 'AETRIX Day 1',  title: 'AETRIX Begins — Day 1',   hackathon: true,  desc: 'Inauguration, expert talk, problem selection. Hacking officially begins at 14:45.' },
  '2026-03-22': { short: 'AETRIX Day 2',  title: 'AETRIX — Day 2 & Awards', hackathon: true,  desc: 'Code freeze 14:30. Evaluation rounds, final presentations, valedictory & award ceremony 18:00.' },
}

export const TIMELINE_ITEMS = [
  { num: '01', date: '20 February 2026', title: 'Registrations Open',       desc: 'Portal goes live. Problem statements & rulebook released. Spread the word.' },
  { num: '02', date: '15 March 2026',    title: 'Registrations Close',      desc: 'Last day to register. Portal closes after 250 registrations or on this date.' },
  { num: '03', date: '16 March 2026',    title: 'Aptitude Elimination Test', desc: 'Online aptitude, logical reasoning & tech-awareness test. ~150 shortlisted from 250+.' },
  { num: '04', date: '18 March 2026',    title: 'Results Announced',        desc: 'Shortlisted participants announced. Final team formation & mentor orientation.' },
  { num: '05', date: '21 – 22 March 2026', title: 'AETRIX Hackathon',      desc: '36 hours of non-stop building, mentoring, evaluating and winning. PDEU, Gandhinagar.' },
]

export const DOMAINS = [
  {
    num: '01', color: 'cyan' as const,
    tag: 'Healthcare / MedTech',
    title: 'Building tech that heals.',
    desc: 'Engineer AI-powered diagnostic tools, patient monitoring systems, and next-generation medical technology solutions that save lives at scale.',
    tags: ['AI Diagnostics', 'Wearables', 'Telemedicine', 'Remote Care'],
  },
  {
    num: '02', color: 'purple' as const,
    tag: 'Smart Transportation',
    title: 'Redefining how cities move.',
    desc: 'Build intelligent mobility systems — from autonomous vehicles to smart traffic management — that reshape urban infrastructure for tomorrow.',
    tags: ['Autonomous Systems', 'Fleet Management', 'Smart Infra', 'EV Networks'],
  },
  {
    num: '03', color: 'green' as const,
    tag: 'Sustainability / Environment',
    title: 'Engineering a greener future.',
    desc: 'Create tech-driven solutions for climate change, renewable energy, waste management, and sustainable ecosystems that outlast the hackathon.',
    tags: ['Clean Energy', 'Carbon Tracking', 'Eco-Systems', 'Smart Grids'],
  },
]

export const PRIZES = [
  { domain: 'Healthcare / MedTech',    domainNum: 'Domain 01', color: 'cyan'   as const },
  { domain: 'Smart Transportation',    domainNum: 'Domain 02', color: 'purple' as const },
  { domain: 'Sustainability',          domainNum: 'Domain 03', color: 'green'  as const },
]

export const DAY1_SCHEDULE = [
  { time: '09:00 – 11:00', title: 'Registration & Check-in',           desc: 'Participant verification, kit & ID badge distribution. Breakfast served alongside.' },
  { time: '11:00 – 12:00', title: 'Inaugural Ceremony & Expert Talk',  desc: 'Formal inauguration followed by an expert talk on innovation & industry practices.' },
  { time: '12:00 – 12:30', title: 'Rules & Guidelines Briefing',       desc: 'Evaluation criteria, mentorship structure, submission process explained.' },
  { time: '12:30 – 13:00', title: 'Problem Statement Briefing',        desc: 'Domain-wise explanation of all problem statements.' },
  { time: '13:00 – 14:00', title: 'Lunch Break',                       desc: 'Fuel up before the 36-hour sprint begins.' },
  { time: '14:00 – 14:30', title: 'Problem Statement Selection',       desc: 'Teams finalize and lock their chosen problem statement.' },
  { time: '14:45',          title: 'HACKATHON BEGINS',                  desc: 'Official commencement of the hacking phase. Let the building begin.', highlight: true },
  { time: '14:45 – 18:30', title: 'Build Session 1',                   desc: 'Ideation, requirement analysis, system design, and initial implementation.' },
  { time: '18:30 – 19:00', title: 'Evening Tea Break',                 desc: 'Refreshments to power through the evening.' },
  { time: '19:00 – 21:30', title: 'Build Session 2',                   desc: 'Focused development with continued implementation and early testing.' },
  { time: '21:30 – 22:30', title: 'Dinner Break',                      desc: 'Night fuel — recharge for the overnight sprint.' },
  { time: '22:30 – 02:00', title: 'Night Build Session',               desc: 'Core overnight development phase. Deep work hours.' },
]

export const DAY2_SCHEDULE = [
  { time: '02:00 – 02:45', title: 'Stargazing & Jamming Session',      desc: 'Wellness break — stargazing, music & informal interaction during late-night hours.' },
  { time: '02:45 – 06:30', title: 'Night Build (Continued)',            desc: 'Focused overnight development post wellness break.' },
  { time: '06:30 – 07:00', title: 'Yoga & Wellness Session',           desc: 'Guided stretching and relaxation. Because hacking is a sport.' },
  { time: '07:00 – 07:30', title: 'Breakfast',                         desc: 'Morning fuel. The final stretch awaits.' },
  { time: '07:30 – 11:00', title: 'Extended Build Session',            desc: 'Feature completion, integration, testing, and refinement.' },
  { time: '11:00 – 11:20', title: 'Progress Checkpoint',               desc: 'Quick mentor review to ensure teams are on track.' },
  { time: '11:20 – 12:20', title: 'Lunch Break',                       desc: 'Last meal before code freeze.' },
  { time: '12:20 – 14:30', title: 'Final Build & Demo Prep',           desc: 'Final debugging, documentation, pitch structuring, and demo preparation.' },
  { time: '14:30',          title: 'CODE FREEZE',                       desc: 'No further code changes permitted. Submit your final build.', highlight: true },
  { time: '14:30 – 15:15', title: 'Submission Window',                 desc: 'Final code, build, documentation & demo readiness submission.' },
  { time: '15:45 – 17:15', title: 'Evaluation & Demo Rounds',          desc: 'Domain-specific jury panels evaluate all project demonstrations.' },
  { time: '17:15 – 18:00', title: 'Final Presentations',               desc: 'Shortlisted teams present to the full jury panel.' },
  { time: '18:00 – 19:00', title: 'Valedictory & Award Ceremony',      desc: 'Winners announced, special awards, acknowledgements. Formal close of AETRIX 2026.', highlight: true },
]

export const EVAL_CRITERIA = [
  { num: '01', accent: 'cyan',   title: 'Innovation & Originality',    desc: 'How creatively does your solution approach the problem? Does it offer meaningful improvement over existing approaches?', weight: 'Weight — High',     pct: 90 },
  { num: '02', accent: 'purple', title: 'Technical Implementation',    desc: 'System design quality, correctness, and appropriate use of tools, technologies, and frameworks throughout the build.', weight: 'Weight — High',     pct: 85 },
  { num: '03', accent: 'cyan',   title: 'Feasibility & Scalability',   desc: 'Can your solution realistically be deployed beyond the hackathon and adapted for real-world use cases at scale?',     weight: 'Weight — Medium',   pct: 80 },
  { num: '04', accent: 'green',  title: 'Problem Relevance',           desc: 'Does your solution directly address the core problem and align with the defined objectives and domain constraints?',   weight: 'Weight — Critical', pct: 95 },
]

export const FAQS = [
  { q: 'Who can participate in AETRIX 2026?',          a: 'Any engineering student can participate. We welcome students from different colleges and years, both individually and in teams.' },
  { q: 'What is the team size?',                        a: 'Final teams consist of 4–5 members. You can register solo, as a duo, or as a larger team. Formation is finalized after the elimination round.' },
  { q: 'Is there a registration fee?',                  a: 'Registration details including any fees will be communicated when the portal opens on 20th February 2026. Stay tuned on our official channels.' },
  { q: 'What is the pre-hackathon screening process?',  a: 'An online aptitude, logical reasoning, and tech-awareness test on 16th March. ~150 participants shortlisted from 250+ registrations.' },
  { q: 'Is there a female participation requirement?',  a: 'Yes. Each team must include at least one female participant to encourage inclusive and balanced representation.' },
  { q: 'Will food and accommodation be provided?',      a: 'Yes. All meals (breakfast, lunch, dinner, tea breaks) throughout the 36-hour hackathon. Accommodation details communicated to shortlisted participants.' },
  { q: 'Can we bring our own hardware/tools?',          a: 'Yes, participants are encouraged to bring their own laptops and hardware. Hardware kits may be available through sponsor partnerships.' },
]
