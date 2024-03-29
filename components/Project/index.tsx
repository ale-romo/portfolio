'use client'
import {useState, useEffect } from 'react';
import Image from 'next/image';
import DOMPurify from 'dompurify';
import { getProjectBySlug, getProjects, Project as ProjectType } from '@/api/getProjects';
import LeftColumn from '@/components/LeftColumn';
import RightColumn from '@/components/RightColumn';
import Description from '../Description';
import Link from 'next/link';
import SpaceInvader from '../SpaceInvader';
import Technologies from '../Technologies';
import Nav from '../Nav';

interface  Props {
  slug: string;
}

const Project = ({ slug }: Props) => {
  const [project, setProject] = useState<ProjectType | null>(null);
  const [projects, setProjects] = useState<ProjectType[]>([]);


  useEffect(() => {
    async function loadData() {
      try {
        const fetchedProjects = await getProjects();
        const fetchedProject = await getProjectBySlug(slug);
        if (fetchedProject) {
          setProjects(fetchedProjects);
        }
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

  const getProjectNavItems = (projects: ProjectType[]) => projects.map(project => {return { name: project.name, slug:project.slug, active: project.active }});

  return <>
    {project && <>
      <LeftColumn>
        <Nav items={getProjectNavItems(projects)} />
        <article className="flex flex-col gap-8 border border-r-0 border-b-2 border-black rounded bg-white p-4 rounded-r-none">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h2 className="text-3xl flex gap-2 items-center"><SpaceInvader slug={project.slug} size={3} />{project.name}</h2>
              {project.link && <Link href={project.link} title={project.name} target="_blank" className="space-btn">Ver sitio</Link>}
            </div>
          </div>
          <ul className="flex gap-4 justify-start">
            {project.features.map((feature) => (
              <li key={feature.id} className="px-2 py-1 bg-slate-300/50 rounded text-sm flex items-center">{feature.name}</li>
            ))}
            <Technologies technologies={project.technologies} />
          </ul>
          <p className="text-lg" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.description.html) }}/>
          <div className="flex items-center gap-4">
            <h3 className="text-sm text-center">Colaboración:</h3>
            <ul className="flex gap-4 items-stretch">
              {project.collaborators.map((collaborator) => (
                <li key={collaborator.name} className="space-btn">
                  <Link href={collaborator.link} title={collaborator.name} target="_blank" className="flex justify-center">
                    <Image width="0" height="0" className="w-2/3 h-auto" src={collaborator.logo.url} alt={collaborator.name} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </LeftColumn>
      <RightColumn>
        {project.images.map((image) => (
          <article key={image.title}>
            <Image src={image.image.url} width="0" height="0" alt={image.title} className="w-full h-auto rounded-r border border-l-0 border-b-4 border-black" />
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
