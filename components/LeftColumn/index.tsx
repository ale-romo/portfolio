import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const LeftColumn = ({ children }: Props) => {
  return (
    <section className="flex flex-col justify-between w-full md:w-2/5 items-start">
      <header>
        <nav className="mb-6 flex flex-col items-start">
          <Link href="/" className="flex gap-2 items-center bg-slate-100/60 hover:bg-slate-100 border rounded-md px-3 py-2">Home</Link>
        </nav>
        <h1 className="text-xl font-black">Alex Romo</h1>
        <h2>Your Friendly Neighborhood Web-Slinger</h2>
        <article>
          {children}
        </article>
      </header>
      <footer className="flex gap-4">
        <a href="mailto:alejandro@mintitmedia.com" target="_blank" className="flex gap-2 items-center bg-slate-100/60 hover:bg-slate-100 border rounded-md px-3 py-2">Email me</a>
        <a href="/Alejandro-Romo-CV-2024.pdf" target="_blank" className="flex gap-2 items-center bg-slate-100/60 hover:bg-slate-100 border rounded-md px-3 py-2">My CV</a>
      </footer>
    </section>
  );
};

export default LeftColumn;
