import { GraphQLClient } from 'graphql-request';

interface Feature {
  id: string;
  name: string;
}

interface Project {
  id: string; // Corrected the type from 'striing' to 'string'
  name: string;
  description: string;
  features: Feature[];
}

export async function getProjects(): Promise<Project[]> { // Added Promise<Project[]> return type
  const hygraph: GraphQLClient = new GraphQLClient('https://api-us-west-2.hygraph.com/v2/cltr0i2b8014b08w0ntocxyh7/master');

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
