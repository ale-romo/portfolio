'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import { getProjects } from '../api/getProjects';

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadData() {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
      console.log(fetchedProjects)
    }

    loadData();
  }, []);


  return (
    <main className="grid grid-cols-1 md:grid-cols-3 h-screen">
      <section className="col-span-1 md:col-span-1">
        <h1>Alex Romo</h1>
        <h2>Your Friendly Neighborhood Web-Slinger</h2>
      </section>
      <section className="col-span-1 md:col-span-2 scrollable overflow-y-scroll h-full">
        {projects.map((project) => (
          <article key={project.id}>
            <Image src={project.images[0].image.url} width="0" height="0" alt={project.images[0].title} className="w-full h-auto" />
            <h2>{project.name}</h2>
          </article>
        ))}
      </section>
    </main>
  );
}
