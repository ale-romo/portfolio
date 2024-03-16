'use client'
import {useState, useEffect } from 'react';
import { getProjectBySlug, Project as ProjectType } from '@/api/getProjects';

interface  Props {
  slug: string;
}

const Project = ({ slug }: Props) => {
  const [project, setProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedProject = await getProjectBySlug(slug);
        if (fetchedProject) {
          setProject(fetchedProject[0]);
        } else {
          setProject(null);
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    }

    loadData();
  }, []);

  return <div>
    {project && <><h1>{project.name}</h1>
    <p>{project.description}</p>
    <ul>
      {project.features.map((feature) => (
        <li key={feature.id}>{feature.name}</li>
      ))}
    </ul>
    <div>
      {project.images.map((image) => (
        <img key={image.id} src={image.image.url} alt={image.title} />
      ))}
    </div></>}
  </div>
}

export default Project;
