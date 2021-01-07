/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProjects = /* GraphQL */ `
  query GetProjects($ownerId: String!, $projectId: String!) {
    getProjects(ownerId: $ownerId, projectId: $projectId) {
      guests
      iFrameURL
      ownerId
      projectId
      projectTitle
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: TableProjectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        guests
        iFrameURL
        ownerId
        projectId
        projectTitle
      }
      nextToken
    }
  }
`;
