interface SkillChipProps {
  label: string
  level: 'Expert' | 'Advanced' | 'Proficient' | 'Learning' | 'Active'
}

export function SkillChip({ label, level }: SkillChipProps) {
  const levelClasses = {
    Expert: 'skill-chip expert',
    Advanced: 'skill-chip advanced',
    Proficient: 'skill-chip proficient',
    Learning: 'skill-chip learning',
    Active: 'skill-chip active'
  }

  return (
    <span className={levelClasses[level]}>
      {label}
    </span>
  )
} 