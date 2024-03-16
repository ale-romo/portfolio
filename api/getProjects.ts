import { GraphQLClient } from 'graphql-request';

interface Feature {
  id: string;
  name: string;
}
interface Image {
  id: string;
  title: string;
  image: {
    url: string;
  }
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  features: Feature[];
  images: Image[];
}

const hygraph: GraphQLClient = new GraphQLClient('https://api-us-west-2.hygraph.com/v2/cltr0i2b8014b08w0ntocxyh7/master');

export async function getProjects(): Promise<Project[]> { // Added Promise<Project[]> return type


  const { projects }: { projects: Project[] }  = await hygraph.request( // Corrected the type of projects
    `query GetProjects {
      projects {
        id
        slug
        name
        description
        features {
          id
          name
        }
        images {
          id
          title
          image {
            url
          }
        }
      }
    }`
  )
  return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project[] | null> {
  const { projects }: { projects: Project[] | null } = await hygraph.request(
    `query getProjects($slug: String!) {
      projects(where: { slug: $slug }) {
        id
        slug
        name
        description
        features {
          id
          name
        }
        images {
          id
          title
          image {
            url
          }
        }
      }
    }`,
    { slug }
  );

  return projects;
}
