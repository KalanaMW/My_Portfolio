export interface Project {
  id?: number;
  title: string;
  description?: string;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies?: string;
  startDate?: string;
  endDate?: string;
  active?: boolean;
}
