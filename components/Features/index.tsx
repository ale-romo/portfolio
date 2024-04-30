import { Feature } from "@/api/getProjects";

const Features = ({ features }: { features: Feature[] }) => <ul className="flex flex-wrap gap-4 justify-start">
    {features.map((feature: Feature) => (
      <li key={feature.id} className="px-2 py-1 bg-slate-300/50 rounded text-sm flex items-center">{feature.name}</li>
    ))}
  </ul>;

export default Features;
