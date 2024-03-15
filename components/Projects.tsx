import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-us-west-2.hygraph.com/v2/bb57d57c7eff48469204904998448bec/master',
  cache: new InMemoryCache(),
});


const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      name
      description
      features {
        id
        name
      }
    }
  }
`;

export async function getProjects() {
  const { data } = await client.query({
    query: GET_PROJECTS,
  });
  return data.projects;
}

export default Projects;
