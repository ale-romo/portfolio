import Image from "next/image";
import { getProjects } from '../api/getProjects';

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3">
      <section className="col-span-1 md:col-span-1">
        <h1>Alex Romo</h1>
        <h2>Your Friendly Neighborhood Web-Slinger</h2>
      </section>
      <section className="col-span-1 md:col-span-2">
        {getProjects.map((project) => (
          <article>
            <h2>{project.name}</h2>
          </article>
        ))}
      </section>
    </main>
  );
}
