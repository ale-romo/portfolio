import Link from 'next/link';
import { ReactNode } from 'react';
import Logo from '@/components/Logo';
import SpaceInvader from '../SpaceInvader';

interface Props {
  children: ReactNode;
}

const LeftColumn = ({ children }: Props) => {
  return (
    <section className="flex flex-col justify-between w-full md:w-2/5 items-start bg-slate-200 p-5 border-r border-black">
      <header className="flex flex-col gap-2 w-full">
        <div className="flex gap-3 items-center border-b border-gray-400 w-full pb-5">
          <span className="bg-black rounded-md p-2"><Logo size={4} /></span>
          <div>
            <h1 className="text-2xl">Alex Romo</h1>
            <p className="text-sky-600">Your Friendly Neighborhood Web-Slinger</p>
          </div>
        </div>
        <nav className="mb-6 flex items-start gap-3">
          <Link href="/" className="flex text-xs font-heading justify-center grow gap-2 items-center bg-slate-100/60 hover:bg-slate-100 border border-gray-400 border-b-2 px-2 py-1"><SpaceInvader slug="breakfast-of-champions" size={2} />Home</Link>
          <button className="flex gap-2 text-xs font-heading justify-center grow items-center bg-slate-100/60 hover:bg-slate-100 border border-gray-400 px-2 border-b-2 py-1"><SpaceInvader slug="the-sandman" size={2} />Projects</button>
        </nav>
      </header>
      <article>
        {children}
      </article>
      <footer className="flex gap-4">
        <a href="mailto:alejandro@mintitmedia.com" target="_blank" className="flex gap-2 items-center bg-slate-300/60 hover:bg-slate-100 border rounded-md px-3 py-2">Email me</a>
        <a href="/Alejandro-Romo-CV-2024.pdf" target="_blank" className="flex gap-2 items-center bg-slate-300/60 hover:bg-slate-100 border rounded-md px-3 py-2">Download my CV</a>
      </footer>
    </section>
  );
};

export default LeftColumn;
