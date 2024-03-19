import Link from "next/link";
import Image from "next/image";
import { Collaborator } from "@/api/getProjects";

const Collaborators = ({ collaborators }: { collaborators: Collaborator[] }) => <ul className="flex gap-4 justify-start">
    {collaborators.map((collaborator: Collaborator) => (
      <li key={collaborator.name} className="space-btn">
      <Link href={collaborator.link} title={collaborator.name} target="_blank" className="flex justify-center">
        <Image width="0" height="0" className="w-2/3 h-auto" src={collaborator.logo.url} alt={collaborator.name} />
      </Link>
    </li>
    ))}
  </ul>

export default Collaborators;
