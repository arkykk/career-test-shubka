import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { motion } from 'framer-motion';

const riasec = [
  { key: 'R', name: 'Realistic', score: 18.0, percent: 51.4, fill: '#64748b' },
  { key: 'I', name: 'Investigative', score: 12.01, percent: 34.3, fill: '#0ea5e9' },
  { key: 'A', name: 'Artistic', score: 24.05, percent: 68.7, fill: '#a855f7' },
  { key: 'S', name: 'Social', score: 24.07, percent: 68.8, fill: '#22c55e' },
  { key: 'E', name: 'Enterprising', score: 24.1, percent: 68.9, fill: '#f59e0b' },
  { key: 'C', name: 'Conventional', score: 12.06, percent: 34.5, fill: '#ef4444' },
];

const motivators = [
  { name: 'Freedom & Independence', score: 23, fill: '#7c3aed' },
  { name: 'Influence & Leadership', score: 17, fill: '#f59e0b' },
  { name: 'Money & Stability', score: 14, fill: '#0ea5e9' },
  { name: 'Helping Others & Impact', score: 14, fill: '#22c55e' },
  { name: 'Creativity & Self-expression', score: 8, fill: '#ec4899' },
  { name: 'Mastery & Growth', score: 6, fill: '#94a3b8' },
];

const environments = [
  { name: 'Remote', score: 13, fill: '#7c3aed' },
  { name: 'Calm', score: 12, fill: '#22c55e' },
  { name: 'Mobile', score: 6, fill: '#0ea5e9' },
  { name: 'Office', score: 3, fill: '#94a3b8' },
  { name: 'Dynamic', score: 3, fill: '#f59e0b' },
  { name: 'Research', score: 3, fill: '#ef4444' },
];

const workTasks = [
  { name: 'Influencer', score: 7, fill: '#f59e0b' },
  { name: 'Organizer', score: 6, fill: '#0ea5e9' },
  { name: 'Creator', score: 6, fill: '#a855f7' },
  { name: 'Thinker', score: 2, fill: '#22c55e' },
  { name: 'Builder', score: 2, fill: '#64748b' },
  { name: 'Helper', score: 1, fill: '#ef4444' },
];

const topCode = 'E–S–A';

function InsightCard({ title, children }) {
  return (
    <Card className="rounded-2xl shadow-sm border-slate-200 h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-6 text-slate-700">{children}</CardContent>
    </Card>
  );
}

export default function CareerReportDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Career Guidance Report · Part 1</p>
              <h1 className="text-4xl font-semibold text-slate-900 mt-2">RIASEC & Career Profile Dashboard</h1>
              <p className="text-slate-600 mt-3 max-w-3xl leading-7">
                This first section translates the test scores into an easy-to-read career direction snapshot. The overall pattern points toward someone who wants freedom, influence, and meaningful autonomy, while preferring calm, remote-friendly settings over rigid or highly supervised environments.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="rounded-full px-4 py-1 bg-amber-100 text-amber-900 hover:bg-amber-100">Top RIASEC: {topCode}</Badge>
              <Badge className="rounded-full px-4 py-1 bg-violet-100 text-violet-900 hover:bg-violet-100">Top Motivator: Freedom</Badge>
              <Badge className="rounded-full px-4 py-1 bg-emerald-100 text-emerald-900 hover:bg-emerald-100">Best Environment: Remote + Calm</Badge>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <Card className="rounded-3xl shadow-md border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl">RIASEC Spider Chart</CardTitle>
            </CardHeader>
            <CardContent className="h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={riasec} outerRadius="72%">
                  <PolarGrid stroke="#cbd5e1" />
                  <PolarAngleAxis dataKey="key" tick={{ fill: '#334155', fontSize: 14 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 35]} tickCount={6} tick={{ fill: '#64748b', fontSize: 11 }} />
                  <Radar name="Score" dataKey="score" stroke="#7c3aed" fill="#8b5cf6" fillOpacity={0.28} strokeWidth={3} />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-md border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl">RIASEC Scores by Type</CardTitle>
            </CardHeader>
            <CardContent className="h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={riasec}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="key" tick={{ fill: '#334155' }} />
                  <YAxis domain={[0, 35]} tick={{ fill: '#64748b' }} />
                  <Tooltip formatter={(v) => [`${v}`, 'Score']} />
                  <Bar dataKey="score" radius={[10, 10, 0, 0]}>
                    {riasec.map((entry, index) => <Cell key={index} fill={entry.fill} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InsightCard title="Overall RIASEC pattern">
            The strongest cluster is Enterprising, Social, and Artistic, with all three landing very close together at roughly 69%. That matters because it shows this profile is not one-dimensional. It combines persuasion, people-reading, and creative expression. Rather than being purely business-focused or purely artistic, this is the kind of pattern often seen in people who want to shape ideas, influence direction, and connect with others through communication.
          </InsightCard>
          <InsightCard title="What stands out most">
            Freedom and independence are the clearest motivational drivers in the full assessment. That means fit will depend not only on what the work is, but also on how much room there is to decide, lead, and operate with autonomy. Roles with heavy supervision, repetitive procedures, or rigid hierarchy are likely to feel draining even when the topic itself sounds interesting.
          </InsightCard>
          <InsightCard title="Best-fit work setting">
            Remote and calm environments score far above office, dynamic, or research-heavy settings. This does not mean the person dislikes challenge. It means they are likely to do their best thinking and best work when there is breathing room, flexibility, and low unnecessary noise. In practice, that often points toward modern digital roles, project-based work, or leadership paths that offer trust rather than constant oversight.
          </InsightCard>
        </div>

        <Card className="rounded-3xl shadow-md border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl">Detailed RIASEC Interpretation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 text-slate-700 leading-7">
            <div>
              <h3 className="font-semibold text-slate-900">Final code: E–S–A</h3>
              <p>
                The final code is best read as Enterprising first, Social second, and Artistic third. Because the top three scores are nearly tied, this profile should be treated as a blended pattern rather than a rigid ranking. The strongest message is that this person is energized by influence, human interaction, and creative expression. They are likely to feel engaged when they can communicate ideas, guide others, shape outcomes, and bring originality into the process.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">Enterprising — 24.10 / 35 (68.9%)</h3>
              <p>
                Enterprising is the dominant direction, even if only by a small margin. This usually points to someone who likes momentum, initiative, and having an impact on results. They often prefer moving ideas forward instead of sitting in the background. In a teenager or young adult, this can show up as wanting a voice in decisions, enjoying leadership in group settings, or feeling motivated by outcomes that are visible and measurable. The career implication is strong: roles with persuasion, ownership, leadership, or business-building potential are likely to feel more alive than roles built around repetition or silent support.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">Social — 24.07 / 35 (68.8%)</h3>
              <p>
                Social is almost identical to Enterprising, which changes the meaning of the profile in an important way. This is not influence for its own sake. It suggests a person who works best when people are part of the picture. They may enjoy guiding, motivating, connecting, presenting, or helping others move toward a goal. However, because the separate work-task score for Helper is low, the Social side here likely expresses itself more through communication, mentorship, collaboration, or audience engagement than through traditional caregiving roles.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">Artistic — 24.05 / 35 (68.7%)</h3>
              <p>
                Artistic is also effectively tied for first, which adds originality and imagination to the whole profile. This suggests the person does not want to influence people through dry logic alone. They are more likely to enjoy shaping messages, experiences, visuals, concepts, or creative solutions. This is a very useful signal because it opens the door to careers where communication and creativity meet, such as branding, media, content, design, entrepreneurship, community building, or innovation-led business roles.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">Realistic — 18.00 / 35 (51.4%)</h3>
              <p>
                Realistic sits in the middle rather than low, which means this person is not disconnected from practical action. They may still appreciate concrete results, execution, and getting things done, especially when those actions support a bigger idea. This matters because it makes the profile more grounded. The person may not want a purely manual or hands-on job, but they are also unlikely to enjoy careers that stay purely theoretical forever.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">Conventional — 12.06 / 35 (34.5%) and Investigative — 12.01 / 35 (34.3%)</h3>
              <p>
                Conventional and Investigative are the lowest areas. Lower Conventional usually means routine, repetitive procedure, and tightly rule-bound work may feel restrictive. Lower Investigative suggests that deep technical analysis or long stretches of solitary research are unlikely to be the main source of energy. Together, these lower scores help define the no-go zone: highly bureaucratic, heavily administrative, or deeply research-intensive pathways may feel harder to sustain unless they also include communication, leadership, or creativity.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <Card className="rounded-3xl shadow-md border-slate-200 xl:col-span-1">
            <CardHeader>
              <CardTitle>Career Motivators</CardTitle>
            </CardHeader>
            <CardContent className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={motivators} layout="vertical" margin={{ left: 22, right: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis type="number" domain={[0, 25]} tick={{ fill: '#64748b' }} />
                  <YAxis type="category" dataKey="name" width={130} tick={{ fill: '#334155', fontSize: 12 }} />
                  <Tooltip formatter={(v) => [`${v}`, 'Score']} />
                  <Bar dataKey="score" radius={[0, 10, 10, 0]}>
                    {motivators.map((entry, index) => <Cell key={index} fill={entry.fill} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-md border-slate-200 xl:col-span-1">
            <CardHeader>
              <CardTitle>Ideal Work Environment</CardTitle>
            </CardHeader>
            <CardContent className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={environments}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" tick={{ fill: '#334155', fontSize: 12 }} interval={0} angle={-18} textAnchor="end" height={70} />
                  <YAxis domain={[0, 15]} tick={{ fill: '#64748b' }} />
                  <Tooltip formatter={(v) => [`${v}`, 'Score']} />
                  <Bar dataKey="score" radius={[10, 10, 0, 0]}>
                    {environments.map((entry, index) => <Cell key={index} fill={entry.fill} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-md border-slate-200 xl:col-span-1">
            <CardHeader>
              <CardTitle>Preferred Work Tasks</CardTitle>
            </CardHeader>
            <CardContent className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={workTasks}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" tick={{ fill: '#334155', fontSize: 12 }} interval={0} angle={-18} textAnchor="end" height={70} />
                  <YAxis domain={[0, 10]} tick={{ fill: '#64748b' }} />
                  <Tooltip formatter={(v) => [`${v}`, 'Score']} />
                  <Bar dataKey="score" radius={[10, 10, 0, 0]}>
                    {workTasks.map((entry, index) => <Cell key={index} fill={entry.fill} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="rounded-3xl shadow-md border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl">Integrated Snapshot Across All 4 Tests</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700 leading-7">
            <div>
              <p>
                When the four assessments are read together, the profile becomes much clearer. The RIASEC pattern says this person wants to communicate, influence, and create. The motivator results add that autonomy matters even more than status or mastery. The work-environment scores then confirm that they are likely to perform best in settings that are flexible, quiet enough to think, and not overly controlled. Finally, the work-task pattern shows that communication, coordination, and creative contribution are all more natural than deep analysis, hands-on building, or direct support work.
              </p>
            </div>
            <div>
              <p>
                Taken together, this looks less like a classic specialist profile and more like a modern project-based profile. In other words, the strongest future fit is likely to be found in roles where ideas meet people and where there is room to lead, shape, organize, present, or build a personal way of working. Strong career directions will probably sit in the space between communication, leadership, brand thinking, audience engagement, digital work, and independent responsibility.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl shadow-md border-slate-200 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-sky-50 via-white to-emerald-50 border-b border-slate-200">
            <CardTitle className="text-2xl">Part 2 · Career Motivators, Work Environment, and Work-Task Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 p-6 md:p-8 text-slate-700 leading-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="rounded-2xl border-sky-200 bg-sky-50/50 shadow-sm">
                <CardHeader className="pb-2"><CardTitle className="text-lg text-slate-900">What this section answers</CardTitle></CardHeader>
                <CardContent className="text-sm leading-6">Part 2 explains not just what kind of careers may fit, but what conditions will make those careers actually feel satisfying. It translates the scores into daily work reality: motivation, preferred setting, and natural contribution style.</CardContent>
              </Card>
              <Card className="rounded-2xl border-emerald-200 bg-emerald-50/50 shadow-sm">
                <CardHeader className="pb-2"><CardTitle className="text-lg text-slate-900">Main pattern</CardTitle></CardHeader>
                <CardContent className="text-sm leading-6">The strongest pattern is clear: this person wants autonomy, visible impact, and a calm environment where they can shape work through communication, coordination, and ideas rather than routine or technical depth.</CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden xl:col-span-1">
                <CardHeader className="bg-slate-50 border-b border-slate-200">
                  <CardTitle className="text-xl">Career motivators</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <Card className="rounded-2xl border-violet-200 bg-violet-50/40 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Top driver</CardTitle></CardHeader><CardContent className="text-sm leading-6">Freedom and Independence is the clearest driver. Autonomy is not a bonus here; it is central to long-term fit. This person is likely to feel most energized when trusted to manage their own time and shape their own approach.</CardContent></Card>
                  <Card className="rounded-2xl border-amber-200 bg-amber-50/40 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Second driver</CardTitle></CardHeader><CardContent className="text-sm leading-6">Influence and Leadership strengthens the Enterprising side of the profile. Independence alone is not enough; they also want their ideas to matter and their contribution to be visible.</CardContent></Card>
                  <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Middle motivators</CardTitle></CardHeader><CardContent className="text-sm leading-6">Money & Stability and Helping Others & Social Impact sit in the middle. They matter, but more as filters than as the main engine. The work should feel worthwhile and not financially shaky, but freedom still leads.</CardContent></Card>
                  <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Lower motivators</CardTitle></CardHeader><CardContent className="text-sm leading-6">Creativity & Self-expression and Mastery & Growth are lower. That suggests creativity may be used as a tool for influence rather than as an end in itself, and that narrow specialist depth may feel less motivating than visible real-world progress.</CardContent></Card>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden xl:col-span-1">
                <CardHeader className="bg-slate-50 border-b border-slate-200">
                  <CardTitle className="text-xl">Ideal work environment</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <Card className="rounded-2xl border-violet-200 bg-violet-50/40 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Best setting</CardTitle></CardHeader><CardContent className="text-sm leading-6">Remote and Calm are clearly dominant. The ideal setup is flexible, mentally spacious, and low in unnecessary interruption. This person is likely to perform best when trusted rather than watched.</CardContent></Card>
                  <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">What helps performance</CardTitle></CardHeader><CardContent className="text-sm leading-6">Digital collaboration, flexible schedules, thoughtful leadership, and project structures with breathing room are likely to produce better work than noisy offices or high-chaos cultures.</CardContent></Card>
                  <Card className="rounded-2xl border-sky-200 bg-sky-50/40 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Moderate flexibility</CardTitle></CardHeader><CardContent className="text-sm leading-6">Mobile work sits in the middle. Occasional movement, workshops, or client meetings may feel stimulating, but constant travel or constant on-the-go pressure would likely become draining.</CardContent></Card>
                  <Card className="rounded-2xl border-rose-200 bg-rose-50/40 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Likely friction points</CardTitle></CardHeader><CardContent className="text-sm leading-6">Traditional office routines, overly formal structures, high-chaos startup pace, and research-heavy deep-focus environments are all much less likely to feel natural or sustainable.</CardContent></Card>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden xl:col-span-1">
                <CardHeader className="bg-slate-50 border-b border-slate-200">
                  <CardTitle className="text-xl">Work-task profile</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <Card className="rounded-2xl border-amber-200 bg-amber-50/40 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Natural strengths</CardTitle></CardHeader><CardContent className="text-sm leading-6">Influencer is strongest, with Organizer and Creator close behind. This points to someone who naturally communicates, builds momentum, contributes ideas, and helps turn those ideas into real projects.</CardContent></Card>
                  <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">How they show up</CardTitle></CardHeader><CardContent className="text-sm leading-6">They are likely to be the person who speaks up, shapes tone, organizes direction, and helps move work forward. This is more visible and concept-driven than technical or behind-the-scenes.</CardContent></Card>
                  <Card className="rounded-2xl border-rose-200 bg-rose-50/40 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Less natural tasks</CardTitle></CardHeader><CardContent className="text-sm leading-6">Deep analysis, hands-on building, and one-to-one helping roles appear much less natural as everyday contribution styles. That does not mean inability; it means lower energy and weaker long-term pull.</CardContent></Card>
                  <Card className="rounded-2xl border-emerald-200 bg-emerald-50/40 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Best combo profile</CardTitle></CardHeader><CardContent className="text-sm leading-6">The strongest blended style is closest to Influencer + Organizer with a Creator layer on top. In practical terms, this looks like a Creative Organizer or Vision-Driven Communicator.</CardContent></Card>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="rounded-2xl border-slate-200 shadow-sm">
                <CardHeader className="pb-2"><CardTitle className="text-lg text-slate-900">What this means for career fit</CardTitle></CardHeader>
                <CardContent className="text-sm leading-6">Altogether, Part 2 points toward careers where there is room to take initiative, shape outcomes, and work with a high level of ownership. Communication-driven, brand-facing, digital, project-led, and entrepreneurial pathways make much more sense than rigid, heavily supervised, or deeply technical routes.</CardContent>
              </Card>
              <Card className="rounded-2xl border-slate-200 shadow-sm">
                <CardHeader className="pb-2"><CardTitle className="text-lg text-slate-900">AI-aware interpretation</CardTitle></CardHeader>
                <CardContent className="text-sm leading-6">In an AI-shaped job market, this profile becomes even more interesting. Routine tasks are easier to automate, so the highest value now sits in judgment, taste, positioning, persuasion, organization, and audience awareness. Those are exactly the areas this profile leans toward.</CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl shadow-md border-slate-200 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-amber-50 via-white to-violet-50 border-b border-slate-200">
            <CardTitle className="text-2xl">Part 3 · Best-Fit Career Sectors and Job Pathways</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 p-6 md:p-8 text-slate-700 leading-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="rounded-2xl border-amber-200 bg-amber-50/50 shadow-sm">
                <CardHeader className="pb-2"><CardTitle className="text-lg text-slate-900">How this section works</CardTitle></CardHeader>
                <CardContent className="text-sm leading-6">Part 3 does not try to lock the client into one single job too early. Instead, it identifies the sectors where their strengths are most likely to grow rather than fight the environment.</CardContent>
              </Card>
              <Card className="rounded-2xl border-violet-200 bg-violet-50/50 shadow-sm">
                <CardHeader className="pb-2"><CardTitle className="text-lg text-slate-900">Main direction</CardTitle></CardHeader>
                <CardContent className="text-sm leading-6">The strongest options sit between communication, leadership, content, digital work, audience-building, and independent responsibility. These are modern sectors where ideas, people, and execution meet.</CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Best-fit sectors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <Card className="rounded-2xl border-slate-200 shadow-sm">
                  <CardHeader className="pb-2"><CardTitle className="text-lg">1. Marketing, Branding, and Digital Communications</CardTitle></CardHeader>
                  <CardContent className="text-sm leading-6">One of the strongest overall fits because it combines persuasion, creativity, people-awareness, and strategic messaging. Best-fit roles are audience-facing and message-shaping rather than overly analytical or repetitive.</CardContent>
                </Card>
                <Card className="rounded-2xl border-slate-200 shadow-sm">
                  <CardHeader className="pb-2"><CardTitle className="text-lg">2. Entrepreneurship and Independent Business</CardTitle></CardHeader>
                  <CardContent className="text-sm leading-6">A very strong match because it satisfies the biggest driver in the profile: freedom and independence. The best version is likely to be thoughtful and self-directed rather than chaotic startup overload.</CardContent>
                </Card>
                <Card className="rounded-2xl border-slate-200 shadow-sm">
                  <CardHeader className="pb-2"><CardTitle className="text-lg">3. Creative Media and Audience-Facing Production</CardTitle></CardHeader>
                  <CardContent className="text-sm leading-6">A strong fit because creativity here is practical and connected to people, platforms, and communication. It allows expression with visible outcomes.</CardContent>
                </Card>
                <Card className="rounded-2xl border-slate-200 shadow-sm">
                  <CardHeader className="pb-2"><CardTitle className="text-lg">4. Project Coordination and Creative Operations</CardTitle></CardHeader>
                  <CardContent className="text-sm leading-6">This sector suits the Organizer side of the profile. It is ideal for someone who does not just generate ideas, but also wants to help those ideas become real through structure and coordination.</CardContent>
                </Card>
                <Card className="rounded-2xl border-slate-200 shadow-sm md:col-span-2 xl:col-span-2">
                  <CardHeader className="pb-2"><CardTitle className="text-lg">5. Community, Education, and Social-Impact Communication</CardTitle></CardHeader>
                  <CardContent className="text-sm leading-6">A meaningful fifth sector because the profile still shows a real Social dimension. The best fit is communication-led impact work, not classic caregiving: outreach, engagement, advocacy, youth-facing content, and community-building.</CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Top 12 job pathways</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">1. Brand Strategist</CardTitle></CardHeader><CardContent className="text-sm leading-6">Shapes how ideas, products, or organizations are perceived through messaging, audience insight, and strategic direction.</CardContent></Card>
                <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">2. Content Strategist</CardTitle></CardHeader><CardContent className="text-sm leading-6">Builds organized messaging systems across platforms and helps brands communicate consistently and effectively.</CardContent></Card>
                <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">3. Social Media Manager</CardTitle></CardHeader><CardContent className="text-sm leading-6">Combines communication, trend awareness, campaign planning, and creative execution in a digital-first format.</CardContent></Card>
                <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">4. Community Manager</CardTitle></CardHeader><CardContent className="text-sm leading-6">Builds engagement, tone, belonging, and audience connection around a brand, platform, or mission.</CardContent></Card>
                <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">5. Creative Producer</CardTitle></CardHeader><CardContent className="text-sm leading-6">Guides campaigns, content, or experiences from concept to delivery, blending creativity with coordination.</CardContent></Card>
                <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">6. Project Coordinator</CardTitle></CardHeader><CardContent className="text-sm leading-6">A strong operations fit for creative, digital, educational, or client-facing projects that need structure without heavy bureaucracy.</CardContent></Card>
                <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">7. Account Executive / Client Success</CardTitle></CardHeader><CardContent className="text-sm leading-6">Combines communication, relationship management, and forward momentum without requiring direct support-role identity.</CardContent></Card>
                <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">8. Copywriter / Messaging Specialist</CardTitle></CardHeader><CardContent className="text-sm leading-6">Uses language to persuade, clarify, and inspire action, especially in campaigns, brands, or mission-led work.</CardContent></Card>
                <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">9. Digital Entrepreneur</CardTitle></CardHeader><CardContent className="text-sm leading-6">Builds a small online business, service offer, brand, or digital product with a high degree of autonomy.</CardContent></Card>
                <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">10. Partnership / Outreach Coordinator</CardTitle></CardHeader><CardContent className="text-sm leading-6">Represents ideas, builds relationships, and creates momentum between organizations, communities, or audiences.</CardContent></Card>
                <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">11. Education or Youth Content Producer</CardTitle></CardHeader><CardContent className="text-sm leading-6">A strong path for meaningful work through communication and creative engagement rather than direct caregiving.</CardContent></Card>
                <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">12. Personal Brand / Creator Business Manager</CardTitle></CardHeader><CardContent className="text-sm leading-6">A modern hybrid role that blends communication, organization, scheduling, campaigns, and audience awareness.</CardContent></Card>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="rounded-2xl border-violet-200 bg-violet-50/50 shadow-sm">
                <CardHeader className="pb-2"><CardTitle className="text-lg text-slate-900">Strongest pathways right now</CardTitle></CardHeader>
                <CardContent className="text-sm leading-6">The strongest current matches are Brand Strategist, Content Strategist, Creative Producer, Community Manager, Digital Entrepreneur, and Personal Brand or Creator Business Manager. These consistently satisfy the same needs: influence, communication, visible outcomes, and room for independence.</CardContent>
              </Card>
              <Card className="rounded-2xl border-sky-200 bg-sky-50/50 shadow-sm">
                <CardHeader className="pb-2"><CardTitle className="text-lg text-slate-900">AI-aware sector shift</CardTitle></CardHeader>
                <CardContent className="text-sm leading-6">Many of these pathways are becoming more valuable, not less, because AI handles more routine drafting. The advantage now comes from strategy, taste, selection, audience judgment, coordination, and trust-building.</CardContent>
              </Card>
            </div>

            <Card className="rounded-2xl border-slate-200 shadow-sm">
              <CardHeader className="pb-2"><CardTitle className="text-lg text-slate-900">Part 3 conclusion</CardTitle></CardHeader>
              <CardContent className="text-sm leading-6">The main message of Part 3 is that this client appears most suited to careers where communication, leadership potential, creativity, and personal ownership intersect. The strongest-fit sectors are not random; they all involve shaping ideas, guiding people, coordinating action, or building something with audience relevance and practical momentum. This creates a strong bridge into the deep-dive profiles that follow.</CardContent>
            </Card>
          </CardContent>
        </Card>
        <Card className="rounded-3xl shadow-md border-slate-200 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-violet-50 via-white to-amber-50 border-b border-slate-200">
            <CardTitle className="text-2xl">Part 4 · Deep-Dive Career Profiles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 p-6 md:p-8 text-slate-700 leading-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="rounded-2xl border-violet-200 bg-violet-50/50 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-slate-900">What changed in this section</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-slate-700">
                  This version focuses much more strongly on Europe-based study options and also includes faster alternatives for students who may not want a full university route. Each profile now also explains how AI is changing the job so the pathway feels realistic for today’s market, not outdated.
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-amber-200 bg-amber-50/50 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-slate-900">How to read Part 4</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-slate-700">
                  The best pathway is not simply the one with the highest pay or the fanciest title. It is the one where the client can imagine enjoying the real work. That is why each profile now includes concrete try-at-home tasks that imitate the kinds of responsibilities people in these jobs actually handle.
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden">
                <CardHeader className="bg-slate-50 border-b border-slate-200">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl">1. Brand Strategist</CardTitle>
                      <p className="text-sm text-slate-600 mt-2">Builds how a brand is understood, remembered, and trusted.</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="rounded-full bg-amber-100 text-amber-900 hover:bg-amber-100">High fit</Badge>
                      <Badge className="rounded-full bg-violet-100 text-violet-900 hover:bg-violet-100">Strategy + creativity</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">What the job is</CardTitle></CardHeader><CardContent className="text-sm leading-6">Shapes how a company, product, cause, or public figure is positioned in people’s minds. The work blends audience insight, storytelling, messaging, tone of voice, and campaign direction.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Why it fits</CardTitle></CardHeader><CardContent className="text-sm leading-6">It matches the client’s strongest combination of influence, communication, originality, and structured thinking. It is strategic, expressive, and audience-facing without being overly technical.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Best environment</CardTitle></CardHeader><CardContent className="text-sm leading-6">Remote-friendly or hybrid marketing teams, calm agencies, boutique consultancies, and thoughtful startups where there is room for ownership and idea leadership.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Typical responsibilities</CardTitle></CardHeader><CardContent className="text-sm leading-6">Audience research, brand positioning, messaging frameworks, tone of voice, campaign direction, market comparison, and briefing designers or writers.</CardContent></Card>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Europe-first university routes</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">UAL · BA Graphic Branding and Identity</CardTitle></CardHeader><CardContent className="text-sm leading-6"><p><span className="font-medium">Location:</span> London</p><p><span className="font-medium">Tuition:</span> £9,790/year home fee for 2026/27</p><p className="mt-2">Excellent for combining branding, design communication, and strategic thinking.</p></CardContent></Card>
                      <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">UIC Barcelona · Advertising and PR</CardTitle></CardHeader><CardContent className="text-sm leading-6"><p><span className="font-medium">Location:</span> Barcelona</p><p><span className="font-medium">Tuition:</span> €10,440 for first year 2026/27</p><p className="mt-2">Strong branding and campaign focus with digital communication and AI applications built into the degree.</p></CardContent></Card>
                      <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">IFM Paris · Fashion & Creative Industries</CardTitle></CardHeader><CardContent className="text-sm leading-6"><p><span className="font-medium">Location:</span> Paris</p><p><span className="font-medium">Tuition:</span> €15,600 first year for EU/EEA students in 2026/27</p><p className="mt-2">Excellent if the client is drawn to branding in fashion, luxury, or creative-business sectors.</p></CardContent></Card>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Alternative route without a full university degree</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="rounded-2xl border-sky-200 bg-sky-50/50 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Google Digital Marketing & E-commerce</CardTitle></CardHeader><CardContent className="text-sm leading-6">Career certificate with AI-enhanced digital marketing content. Good for building practical entry-level marketing skills fast.</CardContent></Card>
                      <Card className="rounded-2xl border-sky-200 bg-sky-50/50 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">HubSpot Content Marketing</CardTitle></CardHeader><CardContent className="text-sm leading-6">Useful for learning brand storytelling, content frameworks, and conversion-focused communication.</CardContent></Card>
                      <Card className="rounded-2xl border-sky-200 bg-sky-50/50 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">HubSpot AI Prompting for Marketers</CardTitle></CardHeader><CardContent className="text-sm leading-6">A practical add-on for learning how to use AI to brainstorm, draft, and improve messaging rather than replacing human judgment.</CardContent></Card>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">AI is changing this role</CardTitle></CardHeader><CardContent className="text-sm leading-6">AI can now speed up competitor scans, audience summaries, slogan drafts, tone-of-voice variations, and campaign brainstorming. That means human strategists are becoming more valuable when they can judge quality, shape the final direction, and connect brand decisions to emotion and business goals.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Related job titles</CardTitle></CardHeader><CardContent className="text-sm leading-6">Junior Brand Strategist, Brand Assistant, Marketing Coordinator, Communications Coordinator, Brand Planner, Brand Manager.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Salary path</CardTitle></CardHeader><CardContent className="text-sm leading-6">Entry: €28k–€40k in many EU markets<br />Mid: €40k–€65k<br />Senior: €70k+ and much higher in large markets or consulting</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Employers</CardTitle></CardHeader><CardContent className="text-sm leading-6">Agencies, startups, consumer brands, creative consultancies, fashion and lifestyle brands, education companies, and tech firms.</CardContent></Card>
                  </div>

                  <Card className="rounded-2xl border-emerald-200 bg-emerald-50/50 shadow-sm">
                    <CardHeader className="pb-2"><CardTitle className="text-base">Try-at-home tasks</CardTitle></CardHeader>
                    <CardContent className="text-sm leading-6">Pick one brand you like and one brand you find boring. For each, write a short audience profile, three brand values, one tone-of-voice description, and one campaign message. Then ask an AI tool for alternative slogans and compare them critically: which ones actually sound human, believable, and right for the brand? This is very close to the real work of brand positioning.</CardContent>
                  </Card>

                  <Card className="rounded-2xl border-emerald-200 bg-emerald-50/50 shadow-sm">
                    <CardHeader className="pb-2"><CardTitle className="text-base">Long-term path</CardTitle></CardHeader>
                    <CardContent className="text-sm leading-6">This route can grow into Head of Brand, Strategy Director, creative consultancy, or independent brand advising for founders and small businesses.</CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden">
                <CardHeader className="bg-slate-50 border-b border-slate-200">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl">2. Content Strategist</CardTitle>
                      <p className="text-sm text-slate-600 mt-2">Plans what a brand says, where it says it, and why it matters.</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="rounded-full bg-amber-100 text-amber-900 hover:bg-amber-100">High fit</Badge>
                      <Badge className="rounded-full bg-sky-100 text-sky-900 hover:bg-sky-100">Organized communication</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">What the job is</CardTitle></CardHeader><CardContent className="text-sm leading-6">Designs a content system for brands or organizations across platforms, campaigns, audience journeys, and digital channels.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Why it fits</CardTitle></CardHeader><CardContent className="text-sm leading-6">It combines communication, planning, audience thinking, and creativity in a calm, structured, often remote-friendly format that suits the client’s preferences very well.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Best environment</CardTitle></CardHeader><CardContent className="text-sm leading-6">Digital-first teams, education brands, media companies, nonprofits, and creator-led businesses with thoughtful workflows and room for independent work.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Typical responsibilities</CardTitle></CardHeader><CardContent className="text-sm leading-6">Editorial planning, content calendars, message architecture, platform strategy, search-informed topic planning, campaign support, and audience analysis.</CardContent></Card>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Europe-first university routes</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">UAO CEU · Communication & Digital Content Creation</CardTitle></CardHeader><CardContent className="text-sm leading-6"><p><span className="font-medium">Location:</span> Barcelona</p><p><span className="font-medium">Strength:</span> Big Data, UX/UI, SEO, SEM, graphic design, and digital marketing built into the degree</p><p className="mt-2">A strong modern option for content-driven careers.</p></CardContent></Card>
                      <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">UAL · BA Media Communications</CardTitle></CardHeader><CardContent className="text-sm leading-6"><p><span className="font-medium">Location:</span> London</p><p><span className="font-medium">Tuition:</span> £9,790/year home fee for 2026/27</p><p className="mt-2">Strong for media literacy, communication industries, and content-thinking in a changing digital landscape.</p></CardContent></Card>
                      <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">University of Greenwich · Digital Marketing & Advertising</CardTitle></CardHeader><CardContent className="text-sm leading-6"><p><span className="font-medium">Location:</span> London</p><p><span className="font-medium">Strength:</span> Real-world briefs and modules in digital marketing, brand management, and social media</p><p className="mt-2">Good for students who want a more marketing-facing content route.</p></CardContent></Card>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Alternative route without a full university degree</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="rounded-2xl border-sky-200 bg-sky-50/50 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Adobe Content Creator Certificate</CardTitle></CardHeader><CardContent className="text-sm leading-6">Builds content production skills, social media fundamentals, and responsible generative-AI use in a portfolio-friendly format.</CardContent></Card>
                      <Card className="rounded-2xl border-sky-200 bg-sky-50/50 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Google Digital Marketing & E-commerce</CardTitle></CardHeader><CardContent className="text-sm leading-6">Good for understanding digital channels, analytics basics, ecommerce, and AI-enhanced marketing workflows.</CardContent></Card>
                      <Card className="rounded-2xl border-sky-200 bg-sky-50/50 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">HubSpot Content + Social Media Certifications</CardTitle></CardHeader><CardContent className="text-sm leading-6">Strong low-cost way to build content planning, publishing, and audience strategy skills quickly.</CardContent></Card>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">AI is changing this role</CardTitle></CardHeader><CardContent className="text-sm leading-6">This role is now deeply tied to AI. AI can draft outlines, generate variants, summarize research, suggest keywords, repurpose content across platforms, and speed up ideation. That means strong content strategists now need editorial judgment, taste, audience sensitivity, fact-checking habits, and the ability to shape a coherent content system instead of just producing volume.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Related job titles</CardTitle></CardHeader><CardContent className="text-sm leading-6">Content Coordinator, Editorial Assistant, Junior Content Strategist, Content Marketing Associate, SEO Content Planner, Head of Content.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Salary path</CardTitle></CardHeader><CardContent className="text-sm leading-6">Entry: €26k–€38k in many EU markets<br />Mid: €38k–€60k<br />Senior: €65k+ and often higher in tech, SaaS, or agency leadership</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Employers</CardTitle></CardHeader><CardContent className="text-sm leading-6">Media companies, SaaS firms, education platforms, agencies, creator businesses, nonprofits, ecommerce brands, and startups.</CardContent></Card>
                  </div>

                  <Card className="rounded-2xl border-emerald-200 bg-emerald-50/50 shadow-sm">
                    <CardHeader className="pb-2"><CardTitle className="text-base">Try-at-home tasks</CardTitle></CardHeader>
                    <CardContent className="text-sm leading-6">Create a 2-week content plan for a topic the client cares about, such as sport, gaming, music, fitness, or a social cause. Use AI to suggest 15 possible post ideas, then choose only the 6 strongest. Explain why each idea fits the audience, what platform it belongs on, and what tone should be used. This helps test whether the client enjoys planning, selecting, editing, and shaping content rather than simply posting randomly.</CardContent>
                  </Card>

                  <Card className="rounded-2xl border-emerald-200 bg-emerald-50/50 shadow-sm">
                    <CardHeader className="pb-2"><CardTitle className="text-base">Long-term path</CardTitle></CardHeader>
                    <CardContent className="text-sm leading-6">This path can grow into Head of Content, Communications Director, Brand Strategy, Creative Direction, or independent consulting for brands and creators.</CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden">
                <CardHeader className="bg-slate-50 border-b border-slate-200">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl">3. Creative Producer</CardTitle>
                      <p className="text-sm text-slate-600 mt-2">Turns ideas into finished media, content, or experiences.</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="rounded-full bg-fuchsia-100 text-fuchsia-900 hover:bg-fuchsia-100">Very strong fit</Badge>
                      <Badge className="rounded-full bg-slate-100 text-slate-900 hover:bg-slate-100">Creator + organizer</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">What the job is</CardTitle></CardHeader><CardContent className="text-sm leading-6">Guides creative work from concept to delivery across videos, podcasts, campaigns, digital content, branded experiences, or small media productions.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Why it fits</CardTitle></CardHeader><CardContent className="text-sm leading-6">It reflects the client’s Influencer–Organizer–Creator blend almost perfectly: visible, collaborative, project-led, imaginative, and outcome-focused.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Best environment</CardTitle></CardHeader><CardContent className="text-sm leading-6">Small media studios, content teams, agencies, creator businesses, and cultural organizations that have structure but are not chaotic or over-controlling.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Typical responsibilities</CardTitle></CardHeader><CardContent className="text-sm leading-6">Briefing teams, planning production steps, coordinating timelines, reviewing creative work, solving delivery problems, and keeping the original vision clear.</CardContent></Card>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Europe-first university routes</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">University of Sunderland · Film Production</CardTitle></CardHeader><CardContent className="text-sm leading-6"><p><span className="font-medium">Location:</span> UK</p><p><span className="font-medium">Tuition:</span> £9,790 home / £17,500 international for 2026/27</p><p className="mt-2">A practical route into production, directing, and media project workflows.</p></CardContent></Card>
                      <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">University of Brighton · Media Production</CardTitle></CardHeader><CardContent className="text-sm leading-6"><p><span className="font-medium">Location:</span> UK</p><p><span className="font-medium">Tuition:</span> £9,790 home / £18,108 international for 2026/27</p><p className="mt-2">Good for broad digital and production skills across media formats.</p></CardContent></Card>
                      <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Edinburgh Napier · Film</CardTitle></CardHeader><CardContent className="text-sm leading-6"><p><span className="font-medium">Location:</span> Edinburgh</p><p><span className="font-medium">Tuition:</span> £9,790 for England/Wales/NI/ROI; £21,120 overseas for 2026/27</p><p className="mt-2">Strong for creative production skills and a contemporary filmmaking environment.</p></CardContent></Card>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Alternative route without a full university degree</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="rounded-2xl border-sky-200 bg-sky-50/50 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Google Project Management</CardTitle></CardHeader><CardContent className="text-sm leading-6">Useful because creative producing is partly a coordination role. This certificate now includes AI training for project workflows.</CardContent></Card>
                      <Card className="rounded-2xl border-sky-200 bg-sky-50/50 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Adobe Content Creator Certificate</CardTitle></CardHeader><CardContent className="text-sm leading-6">Helps with digital content production, creator tools, and portfolio-building for media projects.</CardContent></Card>
                      <Card className="rounded-2xl border-sky-200 bg-sky-50/50 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Short production bootcamps</CardTitle></CardHeader><CardContent className="text-sm leading-6">Short courses in editing, podcast production, content production, or digital storytelling can lead faster into assistant-level roles if paired with a solid portfolio.</CardContent></Card>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">AI is changing this role</CardTitle></CardHeader><CardContent className="text-sm leading-6">AI is helping producers with shot lists, script drafts, scheduling, budget estimates, rough storyboards, transcription, subtitle generation, and faster editing workflows. That means human producers are increasingly valuable when they can manage taste, pacing, team communication, and the overall creative vision that AI cannot truly own.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Related job titles</CardTitle></CardHeader><CardContent className="text-sm leading-6">Production Assistant, Content Producer, Junior Creative Producer, Multimedia Coordinator, Associate Producer, Executive Producer.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Salary path</CardTitle></CardHeader><CardContent className="text-sm leading-6">Entry: €26k–€38k in many EU markets<br />Mid: €38k–€60k<br />Senior: €65k+ and higher in agency, broadcast, or branded-content leadership</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Employers</CardTitle></CardHeader><CardContent className="text-sm leading-6">Production houses, agencies, creator companies, cultural institutions, podcast studios, event and experience teams, and in-house brand content teams.</CardContent></Card>
                  </div>

                  <Card className="rounded-2xl border-emerald-200 bg-emerald-50/50 shadow-sm">
                    <CardHeader className="pb-2"><CardTitle className="text-base">Try-at-home tasks</CardTitle></CardHeader>
                    <CardContent className="text-sm leading-6">Plan a mini production from start to finish. Example: a 60-second video, a short podcast episode, or a 3-post campaign. Write the concept, list what must be created, set a timeline, assign roles even if imaginary, and use AI to generate a first storyboard or script draft. Then revise it manually. This tests whether the client enjoys organizing creative work, not just coming up with the first idea.</CardContent>
                  </Card>

                  <Card className="rounded-2xl border-emerald-200 bg-emerald-50/50 shadow-sm">
                    <CardHeader className="pb-2"><CardTitle className="text-base">Long-term path</CardTitle></CardHeader>
                    <CardContent className="text-sm leading-6">This can grow into senior production leadership, creative direction, studio ownership, or agency leadership.</CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden">
                <CardHeader className="bg-slate-50 border-b border-slate-200">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl">4. Community Manager</CardTitle>
                      <p className="text-sm text-slate-600 mt-2">Builds trust, belonging, and engagement around a brand or platform.</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="rounded-full bg-emerald-100 text-emerald-900 hover:bg-emerald-100">Strong fit</Badge>
                      <Badge className="rounded-full bg-sky-100 text-sky-900 hover:bg-sky-100">People-facing</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">What the job is</CardTitle></CardHeader><CardContent className="text-sm leading-6">Builds and guides a community around a brand, cause, creator, product, or platform through tone, belonging, engagement, and relationship-building.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Why it fits</CardTitle></CardHeader><CardContent className="text-sm leading-6">It uses the client’s Social and Enterprising strengths in a visible way without pushing them into classic caregiving roles. It is relational, communicative, and modern.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Best environment</CardTitle></CardHeader><CardContent className="text-sm leading-6">Remote or hybrid education brands, creator businesses, gaming communities, membership platforms, nonprofits, and mission-driven startups.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Typical responsibilities</CardTitle></CardHeader><CardContent className="text-sm leading-6">Welcoming members, moderating tone, gathering audience feedback, planning engagement, supporting campaigns, handling community rituals, and spotting patterns in what the audience needs.</CardContent></Card>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Europe-first university routes</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">UIC Barcelona · Advertising and PR</CardTitle></CardHeader><CardContent className="text-sm leading-6"><p><span className="font-medium">Location:</span> Barcelona</p><p><span className="font-medium">Tuition:</span> €10,440 first year 2026/27</p><p className="mt-2">Very suitable for community-facing communication, reputation, campaigns, and digital engagement.</p></CardContent></Card>
                      <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Newcastle University · Media, Communication and Cultural Studies</CardTitle></CardHeader><CardContent className="text-sm leading-6"><p><span className="font-medium">Location:</span> UK</p><p><span className="font-medium">Tuition:</span> £24,500 international year 1 for 2026</p><p className="mt-2">Strong for understanding audiences, media culture, and communication in society.</p></CardContent></Card>
                      <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Edinburgh Napier · Media and Communication</CardTitle></CardHeader><CardContent className="text-sm leading-6"><p><span className="font-medium">Location:</span> Edinburgh</p><p><span className="font-medium">Strength:</span> Broad preparation for advertising, PR, journalism, marketing, media, and digital communication</p><p className="mt-2">A useful broad route into community and audience careers.</p></CardContent></Card>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Alternative route without a full university degree</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="rounded-2xl border-sky-200 bg-sky-50/50 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Meta Social Media Marketing Certificate</CardTitle></CardHeader><CardContent className="text-sm leading-6">A strong route for learning platform management, social campaigns, ads, and AI-enhanced social workflows.</CardContent></Card>
                      <Card className="rounded-2xl border-sky-200 bg-sky-50/50 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">HubSpot Social Media Certification</CardTitle></CardHeader><CardContent className="text-sm leading-6">Useful for strategy, content rhythm, engagement, and measuring community impact.</CardContent></Card>
                      <Card className="rounded-2xl border-sky-200 bg-sky-50/50 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Community-first portfolio building</CardTitle></CardHeader><CardContent className="text-sm leading-6">For this field, a strong small portfolio or real online community can matter almost as much as formal study at the beginning.</CardContent></Card>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">AI is changing this role</CardTitle></CardHeader><CardContent className="text-sm leading-6">AI can draft reply suggestions, summarize sentiment, cluster audience feedback, and help repurpose engagement content. But the human part of the job is becoming even more important: tone, trust, judgment, conflict handling, and genuine community feeling cannot be automated well.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Related job titles</CardTitle></CardHeader><CardContent className="text-sm leading-6">Community Assistant, Audience Engagement Assistant, Social & Community Coordinator, Member Experience Coordinator, Head of Community.</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Salary path</CardTitle></CardHeader><CardContent className="text-sm leading-6">Entry: €24k–€35k in many EU markets<br />Mid: €35k–€55k<br />Senior: €60k+ and higher when combined with strategy, partnerships, or growth</CardContent></Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm"><CardHeader className="pb-2"><CardTitle className="text-base">Employers</CardTitle></CardHeader><CardContent className="text-sm leading-6">Education platforms, creator-led brands, gaming companies, membership businesses, nonprofits, startup communities, and digital products.</CardContent></Card>
                  </div>

                  <Card className="rounded-2xl border-emerald-200 bg-emerald-50/50 shadow-sm">
                    <CardHeader className="pb-2"><CardTitle className="text-base">Try-at-home tasks</CardTitle></CardHeader>
                    <CardContent className="text-sm leading-6">Create a mini community around one topic the client genuinely cares about. This could be a Discord server, Instagram broadcast channel, WhatsApp interest group, or school club chat. Write welcome rules, plan three engagement prompts, respond to two imaginary member problems, and ask AI to suggest alternative replies. Then decide which replies feel warm, human, and trustworthy. This shows whether the client actually enjoys building belonging and handling real interaction.</CardContent>
                  </Card>

                  <Card className="rounded-2xl border-emerald-200 bg-emerald-50/50 shadow-sm">
                    <CardHeader className="pb-2"><CardTitle className="text-base">Long-term path</CardTitle></CardHeader>
                    <CardContent className="text-sm leading-6">This path can grow into Head of Community, partnerships leadership, brand community strategy, audience growth leadership, or founder roles in membership and creator businesses.</CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="rounded-2xl border-violet-200 bg-violet-50/50 shadow-sm">
                <CardHeader className="pb-2"><CardTitle className="text-lg text-slate-900">Strongest matches right now</CardTitle></CardHeader>
                <CardContent className="text-sm leading-6 text-slate-700">Brand Strategist and Content Strategist still appear to be the strongest overall matches because they combine autonomy, influence, creativity, structure, and long-term growth most consistently. Creative Producer remains highly attractive if the client lights up around making things happen in media or content projects.</CardContent>
              </Card>
              <Card className="rounded-2xl border-emerald-200 bg-emerald-50/50 shadow-sm">
                <CardHeader className="pb-2"><CardTitle className="text-lg text-slate-900">What AI changes across all 4 careers</CardTitle></CardHeader>
                <CardContent className="text-sm leading-6 text-slate-700">In all four pathways, AI is reducing routine drafting and speeding up first versions. The new advantage is no longer simply producing more words or ideas. The new advantage is making better decisions: taste, judgment, positioning, audience sensitivity, editing, trust, and strategic clarity.</CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl shadow-md border-slate-200 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-emerald-50 via-white to-sky-50 border-b border-slate-200">
            <CardTitle className="text-2xl">Part 5 · 3-Month Career Explorer Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 p-6 md:p-8 text-slate-700 leading-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="rounded-2xl border-emerald-200 bg-emerald-50/50 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-slate-900">What this plan is for</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-slate-700">
                  This final section turns the report into action. The aim is not to force an immediate life decision, but to help the client test real interests, build early confidence, and collect evidence about what actually feels energizing. By the end of 3 months, the client should have clearer direction, several small portfolio pieces, and a better sense of whether the strongest-fit roles still feel attractive in practice.
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-sky-200 bg-sky-50/50 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-slate-900">How to use AI during this plan</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-slate-700">
                  AI should be treated as a thinking partner, not as a shortcut that does the whole task. The goal is to use AI for brainstorming, first drafts, structure, and comparison — then practice the more valuable human skills of selecting, editing, judging quality, and making the work feel relevant and real.
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden">
                <CardHeader className="bg-slate-50 border-b border-slate-200">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl">Month 1 · Know your direction better</CardTitle>
                      <p className="text-sm text-slate-600 mt-2">Focus: clarify interests, notice patterns, and build a first career identity picture.</p>
                    </div>
                    <Badge className="rounded-full bg-emerald-100 text-emerald-900 hover:bg-emerald-100">Foundation month</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <Card className="rounded-2xl border-slate-200 shadow-sm">
                      <CardHeader className="pb-2"><CardTitle className="text-base">Task 1 · Career identity board</CardTitle></CardHeader>
                      <CardContent className="text-sm leading-6">Create a board in Canva, Pinterest, Milanote, or Notion with inspiring brands, creators, campaigns, workspaces, projects, and industries. The goal is to make visible what kind of work feels exciting rather than only writing about it.</CardContent>
                    </Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm">
                      <CardHeader className="pb-2"><CardTitle className="text-base">Task 2 · Work preference journal</CardTitle></CardHeader>
                      <CardContent className="text-sm leading-6">For 7 to 10 days, write short notes finishing prompts such as: “I feel motivated when…”, “I lose energy when…”, “I enjoy being the one who…”, and “I would hate a job where…”. This helps connect the test results to real life.</CardContent>
                    </Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm">
                      <CardHeader className="pb-2"><CardTitle className="text-base">Task 3 · Role comparison</CardTitle></CardHeader>
                      <CardContent className="text-sm leading-6">Choose 4 roles from Part 4 and write one short paragraph for each on what looks attractive, what looks uncertain, and what looks intimidating. This begins to separate curiosity from fantasy.</CardContent>
                    </Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm">
                      <CardHeader className="pb-2"><CardTitle className="text-base">Task 4 · AI-assisted reflection</CardTitle></CardHeader>
                      <CardContent className="text-sm leading-6">Ask an AI tool to summarize the common patterns in your notes and boards. Then rewrite the summary in your own words. The point is not to copy the AI summary, but to test whether it actually captures you accurately.</CardContent>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="rounded-2xl border-violet-200 bg-violet-50/50 shadow-sm">
                      <CardHeader className="pb-2"><CardTitle className="text-base">Suggested tools</CardTitle></CardHeader>
                      <CardContent className="text-sm leading-6">Canva, Pinterest, Milanote, Notion, Google Docs, ChatGPT or another AI assistant for summarizing patterns, and YouTube for “day in the life” videos.</CardContent>
                    </Card>
                    <Card className="rounded-2xl border-emerald-200 bg-emerald-50/50 shadow-sm">
                      <CardHeader className="pb-2"><CardTitle className="text-base">Outcome by the end of Month 1</CardTitle></CardHeader>
                      <CardContent className="text-sm leading-6">A visual career identity board, a short work-preference journal, and a clearer shortlist of 2 to 3 roles that feel genuinely worth testing further.</CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden">
                <CardHeader className="bg-slate-50 border-b border-slate-200">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl">Month 2 · Test real career tasks</CardTitle>
                      <p className="text-sm text-slate-600 mt-2">Focus: move from reading about careers to simulating the work in small, realistic experiments.</p>
                    </div>
                    <Badge className="rounded-full bg-sky-100 text-sky-900 hover:bg-sky-100">Experiment month</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Choose 3 pathways to test</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="rounded-2xl border-slate-200 shadow-sm">
                        <CardHeader className="pb-2"><CardTitle className="text-base">Pathway test A</CardTitle></CardHeader>
                        <CardContent className="text-sm leading-6">Choose one strategy-focused role, such as Brand Strategist or Content Strategist, and complete the try-at-home task from Part 4.</CardContent>
                      </Card>
                      <Card className="rounded-2xl border-slate-200 shadow-sm">
                        <CardHeader className="pb-2"><CardTitle className="text-base">Pathway test B</CardTitle></CardHeader>
                        <CardContent className="text-sm leading-6">Choose one production or coordination role, such as Creative Producer, and complete a mini project with a clear timeline and delivery plan.</CardContent>
                      </Card>
                      <Card className="rounded-2xl border-slate-200 shadow-sm">
                        <CardHeader className="pb-2"><CardTitle className="text-base">Pathway test C</CardTitle></CardHeader>
                        <CardContent className="text-sm leading-6">Choose one audience-facing role, such as Community Manager, and test how it feels to guide engagement, tone, and interaction.</CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <Card className="rounded-2xl border-slate-200 shadow-sm">
                      <CardHeader className="pb-2"><CardTitle className="text-base">Task 1 · Complete 3 mini-projects</CardTitle></CardHeader>
                      <CardContent className="text-sm leading-6">Finish one mini-project for each chosen role. Keep them small enough to finish, but real enough to reveal whether the work feels enjoyable or draining.</CardContent>
                    </Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm">
                      <CardHeader className="pb-2"><CardTitle className="text-base">Task 2 · Research the reality</CardTitle></CardHeader>
                      <CardContent className="text-sm leading-6">Watch or read at least two “day in the life” or role breakdown resources for each pathway. Compare the media version of the job with how the tasks actually felt when you tried them.</CardContent>
                    </Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm">
                      <CardHeader className="pb-2"><CardTitle className="text-base">Task 3 · Build a simple evidence sheet</CardTitle></CardHeader>
                      <CardContent className="text-sm leading-6">For each role, score it from 1 to 5 on enjoyment, curiosity, confidence, energy, and willingness to improve. This helps move the decision from vague preference to actual evidence.</CardContent>
                    </Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm">
                      <CardHeader className="pb-2"><CardTitle className="text-base">Task 4 · Use AI as a reviewer</CardTitle></CardHeader>
                      <CardContent className="text-sm leading-6">Show your mini-projects to an AI tool and ask for feedback on strengths, weak points, and what type of role the work seems to fit best. Then decide which feedback feels useful and which parts miss the point.</CardContent>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="rounded-2xl border-violet-200 bg-violet-50/50 shadow-sm">
                      <CardHeader className="pb-2"><CardTitle className="text-base">Suggested tools</CardTitle></CardHeader>
                      <CardContent className="text-sm leading-6">Canva, Figma, Notion, CapCut, Google Docs, Discord, Instagram, ChatGPT or another AI assistant, and LinkedIn or YouTube for role research.</CardContent>
                    </Card>
                    <Card className="rounded-2xl border-emerald-200 bg-emerald-50/50 shadow-sm">
                      <CardHeader className="pb-2"><CardTitle className="text-base">Outcome by the end of Month 2</CardTitle></CardHeader>
                      <CardContent className="text-sm leading-6">Three small completed experiments, one comparison sheet, and a clearer sense of which role feels strongest in real life rather than just on paper.</CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-slate-200 shadow-sm overflow-hidden">
                <CardHeader className="bg-slate-50 border-b border-slate-200">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl">Month 3 · Build early momentum</CardTitle>
                      <p className="text-sm text-slate-600 mt-2">Focus: choose one strongest direction and turn it into a small portfolio, learning plan, or next-step pathway.</p>
                    </div>
                    <Badge className="rounded-full bg-amber-100 text-amber-900 hover:bg-amber-100">Decision month</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <Card className="rounded-2xl border-slate-200 shadow-sm">
                      <CardHeader className="pb-2"><CardTitle className="text-base">Task 1 · Pick one priority direction</CardTitle></CardHeader>
                      <CardContent className="text-sm leading-6">Choose the pathway that felt strongest after Month 2. This is not a forever decision; it is the next direction to explore more seriously.</CardContent>
                    </Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm">
                      <CardHeader className="pb-2"><CardTitle className="text-base">Task 2 · Build a mini portfolio</CardTitle></CardHeader>
                      <CardContent className="text-sm leading-6">Collect your best work into one simple folder, slide deck, Notion page, or PDF. Include the project, what the goal was, what you created, what you learned, and what you would improve next time.</CardContent>
                    </Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm">
                      <CardHeader className="pb-2"><CardTitle className="text-base">Task 3 · Choose one study route</CardTitle></CardHeader>
                      <CardContent className="text-sm leading-6">Pick either one university pathway or one certificate-based route from Part 4 and compare the time, cost, flexibility, and entry opportunities. The goal is to make the next step feel concrete.</CardContent>
                    </Card>
                    <Card className="rounded-2xl border-slate-200 shadow-sm">
                      <CardHeader className="pb-2"><CardTitle className="text-base">Task 4 · Create a next-90-day plan</CardTitle></CardHeader>
                      <CardContent className="text-sm leading-6">Set one learning goal, one portfolio goal, and one networking or outreach goal for the next 3 months. This turns exploration into momentum instead of letting insight disappear.</CardContent>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="rounded-2xl border-violet-200 bg-violet-50/50 shadow-sm">
                      <CardHeader className="pb-2"><CardTitle className="text-base">Suggested tools</CardTitle></CardHeader>
                      <CardContent className="text-sm leading-6">Notion, Canva, Google Slides, LinkedIn, university websites, Coursera, HubSpot Academy, Adobe training resources, and AI tools for refining presentation quality.</CardContent>
                    </Card>
                    <Card className="rounded-2xl border-emerald-200 bg-emerald-50/50 shadow-sm">
                      <CardHeader className="pb-2"><CardTitle className="text-base">Outcome by the end of Month 3</CardTitle></CardHeader>
                      <CardContent className="text-sm leading-6">A first mini portfolio, one priority direction, one concrete learning path, and a realistic next-step plan that can continue after this report ends.</CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="rounded-2xl border-slate-200 shadow-sm">
                <CardHeader className="pb-2"><CardTitle className="text-lg text-slate-900">Best sign of progress</CardTitle></CardHeader>
                <CardContent className="text-sm leading-6">The best result is not “choosing the perfect job.” The best result is becoming more certain about what kind of work feels natural, motivating, and worth developing further.</CardContent>
              </Card>
              <Card className="rounded-2xl border-slate-200 shadow-sm">
                <CardHeader className="pb-2"><CardTitle className="text-lg text-slate-900">What to watch for</CardTitle></CardHeader>
                <CardContent className="text-sm leading-6">Pay attention to energy, not just success. A task can go well and still feel draining. Another task can feel difficult but exciting. That difference matters more than early perfection.</CardContent>
              </Card>
              <Card className="rounded-2xl border-slate-200 shadow-sm">
                <CardHeader className="pb-2"><CardTitle className="text-lg text-slate-900">Final message</CardTitle></CardHeader>
                <CardContent className="text-sm leading-6">This profile is strongest when it has room to communicate, influence, organize, and shape ideas in a flexible environment. The 3-month plan is designed to help the client move from interesting possibilities toward confident evidence.</CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
