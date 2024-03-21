import Link from "next/link";
import Image from "next/image";
import { Collaborator } from "@/api/getProjects";

const Collaborators = ({ collaborators }: { collaborators: Collaborator[] }) => <ul className="flex flex-wrap gap-2 justify-start">
     <h4 className="text-xs w-full">Collaborators:</h4>
    {collaborators.map((collaborator: Collaborator) => (<li key={collaborator.name} className="space-btn w-1/4">
      <Link href={collaborator.link} title={collaborator.name} target="_blank" className="flex justify-center">
        <Image width="0" height="0" className="h-auto w-full" src={collaborator.logo.url} alt={collaborator.name} />
      </Link>
    </li>
    ))}
  </ul>

export default Collaborators;
