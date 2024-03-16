'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import { getProjects, Project } from '../api/getProjects';
import Link from 'next/link';
import SpaceInvader from '@/components/SpaceInvader';
import LeftColumn from '@/components/LeftColumn';
import RightColumn from '@/components/RightColumn';

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
    <main className="flex flex-col md:flex-row h-screen p-5">
      <LeftColumn>
        Hello
      </LeftColumn>
      <RightColumn>
        {projects.map((project) => (
          <article key={project.id} className="flex flex-col">
            <Image src={project.images[0].image.url} width="0" height="0" alt={project.images[0].title} className="w-full h-auto rounded border border-b-4 border-black" />
            <div className="flex justify-between bg-slate-100 p-5 rounded-b">
              <h2>{project.name}</h2>
              <Link href={`/projects/${project.slug}`} className="flex gap-2 items-center bg-white/60 hover:bg-white border rounded-md px-3 py-2"><SpaceInvader size={4} color="#black" />View</Link>
            </div>
          </article>
        ))}
      </RightColumn>
    </main>
  );
}
