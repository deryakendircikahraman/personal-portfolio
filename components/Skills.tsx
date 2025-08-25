import { SkillChip } from './SkillChip'

export function Skills() {
  const skillGroups = [
    {
      title: 'Core (daily)',
      skills: [
        { label: 'React', level: 'Expert' as const },
        { label: 'TypeScript', level: 'Expert' as const },
        { label: 'Next.js', level: 'Advanced' as const },
        { label: 'C#/.NET', level: 'Expert' as const },
        { label: 'Python', level: 'Advanced' as const },
        { label: 'Git/GitHub', level: 'Advanced' as const },
      ]
    },
    {
      title: 'Backend & Ops',
      skills: [
        { label: 'FastAPI', level: 'Proficient' as const },
        { label: 'Docker', level: 'Proficient' as const },
        { label: 'Azure', level: 'Advanced' as const },
        { label: 'Oracle', level: 'Advanced' as const },
        { label: 'SQL', level: 'Advanced' as const },
      ]
    },
    {
      title: 'AI & Learning',
      skills: [
        { label: 'OpenAI API', level: 'Proficient' as const },
        { label: 'LangChain', level: 'Proficient' as const },
        { label: 'DSA', level: 'Learning' as const },
        { label: 'System Design', level: 'Learning' as const },
        { label: 'LeetCode', level: 'Active' as const },
      ]
    }
  ]

  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-gradient animate-fade-in-up">
          Skills
        </h2>
        <div className="divider"></div>
        <p className="text-base lg:text-lg text-slate-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Technologies I work with daily and continue to master
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skillGroups.map((group, index) => (
          <div key={index} className="space-y-4 animate-fade-in-up" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
            <h3 className="text-lg font-semibold text-slate-900">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, skillIndex) => (
                <SkillChip
                  key={skillIndex}
                  label={skill.label}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 