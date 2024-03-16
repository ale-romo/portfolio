'use client'
import {useState, useEffect } from 'react';
import Image from 'next/image';
import { getProjectBySlug, Project as ProjectType } from '@/api/getProjects';
import LeftColumn from '@/components/LeftColumn';
import RightColumn from '@/components/RightColumn';

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

  return <>
    {project && <>
      <LeftColumn>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <ul>
          {project.features.map((feature) => (
            <li key={feature.id}>{feature.name}</li>
          ))}
        </ul>
      </LeftColumn>
      <RightColumn>

        <div>
          {project.images.map((image) => (
            <div key={image.title}>
              <Image src={image.image.url} width="0" height="0" alt={image.title} className="w-full h-auto rounded border border-b-4 border-black" />
              <p>{image.description}</p>
            </div>
          ))}
        </div>
      </RightColumn>
      </>}
  </>
}

export default Project;
