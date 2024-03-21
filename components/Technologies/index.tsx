import Link from "next/link";
import Image from "next/image";
import { Technology } from "@/api/getProjects";

const Technologies = ({ technologies }: { technologies: Technology[] }) => <ul className="flex flex-wrap justify-left gap-1 gap-y-2 p-3 bg-slate-100 hover:bg-slate-200/70 rounded w-full">
    {technologies.map((technology: Technology) => (
      <li key={technology.name}>
        <Link href={technology.link} title="technology.name" target="_blank" className="flex y-1 hover:bg-white p-1 rounded-full">
          <Image src={technology.logo.url} width="0" height="0" className="w-6 h-auto" alt={technology.name} />
        </Link>
      </li>
    ))}
  </ul>

export default Technologies;
