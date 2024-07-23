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
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedProjects = await getProjects();
        const fetchedTechnologies = await getTechnologies();
        const fetchedCollaborators = await getCollaborators();
        const fetchedFeatures = await getFeatures();
        if (fetchedProjects) {
          setProjects(fetchedProjects);
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

  const getProjectNavItems = (projects: Project[]) => projects.map(project => {return { name: project.name, slug:project.slug, active: project.active }});
  console.log(projects)
  return (<>
    <main className="flex flex-col md:flex-row h-screen md:max-h-full md:overflow-hidden">
      <LeftColumn>
        <Nav items={getProjectNavItems(projects)} />
        <article className="flex flex-1 overflow-hidden flex-col gap-8 border md:border-r-0 border-b-2 border-black rounded bg-white p-4 md:rounded-r-none">
          <Description>
              <div className="flex gap-3 items-center border-b border-[#b5179e] w-full">
                <span className=""><Logo size={6} /></span>
                <div>
                  <h1 className="text-xl">Alex Romo&apos;s Dev Shop</h1>
                  <p className="text-sky-600">Your Friendly Neighborhood Web-Slinger</p>
                </div>
              </div>
              <Features features={features} />
              <div className="flex flex-col flex-1 gap-5 md:pr-3 scrollable md:overflow-y-scroll">
                <p>
                  Front-End Engineer with a proven track record in both large-scale corporate enterprises and fast-paced marketing environments. Skilled in navigating the complexities of diverse business landscapes, I thrive in delivering innovative solutions that exceed expectations.
                </p>
              </div>
          </Description>
        </article>
        <div className="flex flex-col gap-2 md:pr-5">
          <h4 className="text-xs text-gray-500 w-full">Tech & Software:</h4>
          <Technologies technologies={technologies} />
        </div>
        <div className="flex flex-col gap-2 md:pr-5">
          <h4 className="text-xs text-gray-500 w-full">Partners:</h4>
          <Collaborators collaborators={collaborators} />
        </div>
      </LeftColumn>
      <RightColumn>
        <h2 className="w-full text-center text-xl flex gap-4 justify-center items-center"><SpaceInvader size={3} slug="the-sandman" />Study Cases</h2>
        {projects.map((project) => (
          <article key={project.id} className={`flex gap-4 flex-col ${!project.active ? 'opacity-40' : 'opacity-100'}`}>
            <Image src={project.images[0].image.url} width="0" height="0" alt={project.images[0].title} className="w-full h-auto rounded md:rounded-l-none border md:border-l-0 border-b-4 border-black" />
            <Description>
              <div className="flex justify-between items-center w-full pl-5">
                <h3 className="text-xl">{project.name}</h3>
                {project.active ?
                  <Link href={`/projects/${project.slug}`} className="space-btn"><SpaceInvader size={2} color="black" slug={project.slug} />Explore</Link> :
                  <h3>Coming soon</h3>
                }
              </div>
            </Description>
          </article>
        ))}
      </RightColumn>
      {showBanner && <div className="fixed -top-5 -right-28 text-black  font-heading" style={{ width: '500px', height: '300px' }}>
        <h2 className="absolute flex top-1/2 left-1/2 -translate-x-1/2 rotate-45 -translate-y-1/2 gap-4 items-center justify-center w-full py-3 text-center bg-yellow-400 shadow-2xl border-dashed border-4 border-black">
          Under continuous construction<button className=" border-2 border-b-4 border-black px-2 hover:bg-yellow-300/70" onClick={() => setShowBanner(false)}>Ok</button>
        </h2>
      </div>}
    </main>
  </>);
}
