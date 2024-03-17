'use client'
import {useState, useEffect } from 'react';
import Image from 'next/image';
import DOMPurify from 'dompurify';
import { getProjectBySlug, Project as ProjectType } from '@/api/getProjects';
import LeftColumn from '@/components/LeftColumn';
import RightColumn from '@/components/RightColumn';
import Description from '../Description';
import Link from 'next/link';

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
        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.description.html) }}/>
        <ul>
          {project.collaborators.map((collaborator) => (
            <li key={collaborator.name}>
              <Link href={collaborator.link} title={collaborator.name} target="_blank">
                <Image width="0" height="0" className="w-2/3 h-auto" src={collaborator.logo.url} alt={collaborator.name} />
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {project.features.map((feature) => (
            <li key={feature.id}>{feature.name}</li>
          ))}
        </ul>
      </LeftColumn>
      <RightColumn>
        {project.images.map((image) => (
          <article key={image.title}>
            <Image src={image.image.url} width="0" height="0" alt={image.title} className="w-full h-auto rounded border border-b-4 border-black" />
            {image?.description?.html && <Description>
              <span className="flex flex-col gap-5" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(image.description.html) }} />
            </Description>}
          </article>
        ))}
      </RightColumn>
      </>}
  </>
}

export default Project;
