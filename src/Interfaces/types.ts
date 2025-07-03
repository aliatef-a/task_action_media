export interface Milestone {
  value: string;
  unit: string;
  caption: string;
  offset?: boolean;
}

export interface SectionAboutProps {
  milestones: Milestone[];
}
