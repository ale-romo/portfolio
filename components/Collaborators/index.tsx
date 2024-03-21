import Link from "next/link";
import Image from "next/image";
import { Collaborator } from "@/api/getProjects";

const Collaborators = ({ collaborators }: { collaborators: Collaborator[] }) => <ul className="flex flex-wrap justify-start gap-y-2">
     <h4 className="flex text-xs w-full text-gray-500">Collaboradores:</h4>
    {collaborators.map((collaborator: Collaborator) => (<li key={collaborator.name} className="flex items-strech w-1/4">
      <Link href={collaborator.link} title={collaborator.name} target="_blank" className="flex justify-center mx-1 space-btn">
        <Image width="0" height="0" className="h-auto w-full" src={collaborator.logo.url} alt={collaborator.name} />
      </Link>
    </li>
    ))}
  </ul>

export default Collaborators;
