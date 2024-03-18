'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import { getProjects, Project } from '../api/getProjects';
import Link from 'next/link';
import SpaceInvader from '@/components/SpaceInvader';
import LeftColumn from '@/components/LeftColumn';
import RightColumn from '@/components/RightColumn';
import Description from '@/components/Description';

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function loadData() {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
    }

    loadData();
  }, []);


  return (
    <main className="flex flex-col md:flex-row h-screen">
      <LeftColumn>
        xxx
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
