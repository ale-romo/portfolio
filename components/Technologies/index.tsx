import Link from "next/link";
import Image from "next/image";
import { Technology } from "@/api/getProjects";

const Technologies = ({ technologies }: { technologies: Technology[] }) => <ul className="flex justify-left gap-1 gap-y-2 p-3 bg-slate-300/60 hover:bg-slate-100/50 rounded w-full overflow-x-scroll snap-x snap-mandatory">
    {technologies.map((technology: Technology) => (
      <li key={technology.name} className="flex-shrink-0">
        <Link href={technology.link} title="technology.name" target="_blank" className="flex hover:bg-white p-1 rounded-full">
          <Image src={technology.logo.url} width="0" height="0" className="w-6 h-auto" alt={technology.name} />
        </Link>
      </li>
    ))}
  </ul>

export default Technologies;
