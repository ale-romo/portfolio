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
import sortProjects from '@/utils/sortProjects';
import Collaborators from '../Collaborators';

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
          setProjects(sortProjects(fetchedProjects));
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
          </ul>
          <p className="text-lg" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.description.html) }}/>
        </article>
        <div className="flex flex-col gap-2 md:pr-5">
          <h4 className="text-xs text-gray-500 w-full">Tech:</h4>
          <Technologies technologies={project.technologies} />
        </div>
        {!!project.collaborators.length &&
        <div className="flex flex-col gap-2 md:pr-5">
          <h4 className="text-xs text-gray-500 w-full">Collaborators:</h4>
          <Collaborators collaborators={project.collaborators} />
        </div>}
      </LeftColumn>
      <RightColumn>
        {project.images.map((image, i) => (
          <article key={image.title} className="">
            <Image src={image.image.url} width="0" height="0" alt={image.title} className={`w-full h-auto rounded-r border border-b-4 border-black`} />
            {image?.description?.html && <Description>
              <span className="flex flex-col gap-5 smart-text px-5 pt-5" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(image.description.html) }} />
            </Description>}
          </article>
        ))}
      </RightColumn>
      </>}
  </>
}

export default Project;
