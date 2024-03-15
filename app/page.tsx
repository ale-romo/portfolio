'use client'
import Link from 'next/link';
import { getProjects } from './api/getProjects';
import { useState, useEffect } from 'react';
import Logo from '../components/Logo';
const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadData() {
      const fetchedProducts = await getProjects();
      setProjects(fetchedProducts);
    }

    loadData();
  }, []);

  return (
    <main className="grid grid-cols-1  md:grid-cols-3 h-full">
        <section className="col-span-1 md:col-span-2">
          <Link href='/about'>
            About
          </Link>
        </section>
        <section>
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </section>
    </main>
  );
}

export default Home;
