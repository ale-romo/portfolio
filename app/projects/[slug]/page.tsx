import { getProjects } from "@/api/getProjects";
import Project from "@/components/Project";

export const generateStaticParams = async () =>  {
  const projects = await getProjects();

  return projects.map(project => {
    return {
      slug: project.slug,
    }
  });
}

interface Props {
  params: {
    slug: string;
  };
}

const ProjectPage = ({ params }: Props) => {
  if (!params || !params.slug) {
    return <div>No slug provided</div>;
  }

  const {  slug } = params;

  return (<Project slug={slug} />

  );
};

export default ProjectPage;
