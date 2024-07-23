import { GraphQLClient } from 'graphql-request';

export interface Feature {
  id: string;
  name: string;
}
export interface Image {
  id: string;
  title: string;
  description: {
    html: string;
  };
  image: {
    url: string;
  }
}

export interface Collaborator {
  name: string;
  link: string;
  logo: {
    url: string;
  }
}

export interface Technology {
  name: string;
  link: string;
  logo: {
    url: string
  }
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  active: boolean;
  launchDate: string;
  collaborators: Collaborator[];
  technologies: Technology[];
  link: string;
  description: {
    html: string;
  };
  features: Feature[];
  images: Image[];
}

if (!process.env.NEXT_PUBLIC_HYGRAPH_URL) {
  throw new Error('NEXT_PUBLIC_HYGRAPH_URL environment variable is not defined');
}

const hygraph: GraphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL);

export async function getProjects(): Promise<Project[]> { // Added Promise<Project[]> return type


  const { projects }: { projects: Project[] }  = await hygraph.request( // Corrected the type of projects
    `query GetProjects {
      projects(orderBy: launchDate_DESC) {
        id
        slug
        name
        launchDate
        active
        description {
          html
        }
        features {
          id
          name
        }
        technologies {
          name
          link
          logo {
            url
          }
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
        link
        description {
          html
        }
        collaborators {
          name
          link
          logo {
            url
          }
        }
        features {
          id
          name
        }
        technologies {
          name
          link
          logo {
            url
          }
        }
        images {
          id
          title
          description {
            html
          }
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

export async function getFeatures(): Promise<Feature[]> {
  const { features }: { features: Feature[] }  = await hygraph.request( // Corrected the type of projects
    `query GetFeatures {
      features {
        id
        name
      }
    }`
  )
  return features;
}

export async function getTechnologies(): Promise<Technology[]> {
  const { technologies }: { technologies: Technology[] }  = await hygraph.request( // Corrected the type of projects
    `query GetTechnologies {
      technologies (first: 50) {
        name
        link
        logo {
          url
        }
      }
    }`
  )
  return technologies;
}

export async function getCollaborators(): Promise<Collaborator[]> {
  const { collaborators }: { collaborators: Collaborator[] }  = await hygraph.request( // Corrected the type of projects
    `query GetCollaborators {
      collaborators {
        name
        link
        logo {
          url
        }
      }
    }`
  )
  return collaborators;
}
