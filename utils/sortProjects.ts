import { Project } from "@/api/getProjects";

const sortProjects = (projects: Project[]): Project[] => {
  return projects.sort((a, b) => {
    if (a.active !== b.active) {
      return a.active ? -1 : 1; // Active projects first
    }
    if (a.active && b.active) {
      return (b.launchDate || '').localeCompare(a.launchDate || ''); // Sort by launch date descending
    }
    if (!a.launchDate && !b.launchDate) {
      return 0; // Inactive projects without launch date come last
    }
    if (!a.launchDate) {
      return 1; // Inactive projects without launch date come after projects with launch date
    }
    if (!b.launchDate) {
      return -1; // Inactive projects without launch date come after projects with launch date
    }
    return (b.launchDate || '').localeCompare(a.launchDate || ''); // Inactive projects with launch date sorted by launch date descending
  });
};

export default sortProjects;
