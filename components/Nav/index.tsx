import Link from "next/link"
import { useState } from "react";
import SpaceInvader from "../SpaceInvader";

export interface Item {
  name: string;
  slug: string;
  active: boolean;
}

const Nav = ({items}:{ items: Item[] }) => {
const [showProjectMenu, setShowProjectMenu] = useState(false);

  return <header className="flex flex-col gap-2 w-full pr-5">
    <nav className="mb-6 flex items-start gap-3 relative">
      <Link href="/" className="flex text-xs font-heading justify-center grow gap-2 items-center bg-slate-100/60 hover:bg-slate-100 border border-gray-400 border-b-2 px-2 py-1"><SpaceInvader slug="breakfast-of-champions" size={2} />Home</Link>
      <button onClick={() => setShowProjectMenu(!showProjectMenu)} className="flex gap-2 text-xs font-heading justify-center grow items-center bg-slate-100/60 hover:bg-slate-100 border border-gray-400 px-2 border-b-2 py-1"><SpaceInvader slug="the-sandman" size={2} />Projects</button>
      {showProjectMenu && <ul className="absolute w-full top-full left-0 flex bg-white border border-gray-400 border-b-2 gap-y-4 p-4 flex-wrap mt-2 shadow-xl pt-10">
          <button onClick={() => setShowProjectMenu(!showProjectMenu)} className="absolute top-0 right-2 p-2 hover:text-red-400 text-xl">&times;</button>
          {items.map((project: Props) => <li key={`submenu-${project.slug}`} className="flex w-1/2 relative hover:text-red-400">

            <Link
              href={`/projects/${project.slug}`}
              title={project.name}
              className={`flex gap-2 items-center font-heading ${project.active ? 'text-black': 'text-gray-400 pointer-events-none'}`}
              aria-disabled={!project.active}
              tabIndex={project.active ? 0 : -1}
            >
              <SpaceInvader size={2} slug={project.slug} color={project.active ? '#000000' : 'rgb(229, 231, 235)'} />
              {project.name}
            </Link>
          </li>)}
        </ul>}
    </nav>
  </header>
}
export default Nav;
