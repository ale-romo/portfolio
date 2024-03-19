'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import { getProjects, Project, getFeatures, Feature, getTechnologies, Technology, getCollaborators, Collaborator } from '../api/getProjects';
import Link from 'next/link';
import SpaceInvader from '@/components/SpaceInvader';
import LeftColumn from '@/components/LeftColumn';
import RightColumn from '@/components/RightColumn';
import Description from '@/components/Description';
import Technologies from '@/components/Technologies';
import Collaborators from '@/components/Collaborators';
import Features from '@/components/Features';
import Logo from '@/components/Logo';
import Nav from '@/components/Nav';

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedProject = await getProjects();
        const fetchedTechnologies = await getTechnologies();
        const fetchedCollaborators = await getCollaborators();
        const fetchedFeatures = await getFeatures();
        if (fetchedProject) {
          setProjects(fetchedProject);
        }
        if (fetchedTechnologies) {
          setTechnologies(fetchedTechnologies);
        }
        if (fetchedCollaborators) {
          setCollaborators(fetchedCollaborators);
        }
        if (fetchedFeatures) {
          setFeatures(fetchedFeatures);
        }

      } catch (error) {
        console.error('Error fetching project:', error);
      }
    }

    loadData();
  }, []);

  const getProjectNavItems = (projects: Project[]) => projects.map(project => {return { name: project.name, slug:project.slug }});

  return (
    <main className="flex flex-col md:flex-row h-screen">
      <LeftColumn>
        <Nav items={getProjectNavItems(projects)} />
        <article className="flex flex-col gap-8 border border-r-0 border-b-2 border-black rounded bg-white p-4 rounded-r-none">
          <Description>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center border-b border-gray-400 w-full pb-5">
                <span className="bg-black rounded-md p-2"><Logo size={4} /></span>
                <div>
                  <h1 className="text-xl">Alex Romo</h1>
                  <p className="text-sky-600">Your Friendly Neighborhood Web-Slinger</p>
                </div>
              </div>
              <Features features={features} />
              <p>
                Un apasionado desarrollador web con una sólida formación en diseño y una amplia experiencia en el desarrollo de proyectos digitales. Con una carrera que abarca desde la enseñanza hasta el emprendimiento, Alex se destaca por su capacidad para combinar habilidades técnicas con una visión creativa.
              </p>
              <p>
                Enfocado en crear experiencias digitales únicas que cautivan a los usuarios y generan impacto. A través de su dominio de los últimos frameworks y tecnologías, Alex construye sitios web de alto rendimiento que reflejan la visión y los objetivos de sus clientes.
              </p>
              <h4>Technologías:</h4><Technologies technologies={technologies} />
              <h4>Colaboraciones:</h4><Collaborators collaborators={collaborators} />
            </div>
          </Description>
        </article>
      </LeftColumn>
      <RightColumn>
        {projects.map((project) => (
          <article key={project.id} className="flex flex-col">
            <Image src={project.images[0].image.url} width="0" height="0" alt={project.images[0].title} className="w-full h-auto rounded-r border border-l-0 border-b-4 border-black" />
            <Description>
              <h3 className="text-xl">{project.name}</h3>
              <Link href={`/projects/${project.slug}`} className="space-btn"><SpaceInvader size={2} color="black" slug={project.slug} />Explore</Link>
            </Description>
          </article>
        ))}
      </RightColumn>
    </main>
  );
}
