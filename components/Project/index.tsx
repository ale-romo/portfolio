'use client'
import {useState, useEffect } from 'react';
import Image from 'next/image';
import DOMPurify from 'dompurify';
import { getProjectBySlug, Project as ProjectType } from '@/api/getProjects';
import LeftColumn from '@/components/LeftColumn';
import RightColumn from '@/components/RightColumn';
import Description from '../Description';
import Link from 'next/link';
import SpaceInvader from '../SpaceInvader';

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

  console.log(project)
  return <>
    {project && <>
      <LeftColumn>
        <article className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h2 className="text-3xl flex gap-2 items-center"><SpaceInvader slug={project.slug} size={3} />{project.name}</h2>
              {project.link && <Link href={project.link} title={project.name} target="_blank" className="space-btn">Ver sitio</Link>}
            </div>
            <ul className="flex gap-4 justify-start">
              {project.features.map((feature) => (
                <li key={feature.id} className="px-2 py-1 bg-slate-300/50 rounded text-sm">{feature.name}</li>
              ))}
              <ul className="px-2 py-1 bg-slate-300/50 rounded">
                {project.technologies.map((technology) => (
                  <li key={technology.name} className=""><Image src={technology.logo.url} width="0" height="0" className="w-5 h-auto" alt={technology.name} /></li>
                ))}
              </ul>
            </ul>
          </div>
          <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.description.html) }}/>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-center border-b border-gray-400">Colaboradores</h3>
            <ul className="flex space-around gap-4 items-stretch">
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
