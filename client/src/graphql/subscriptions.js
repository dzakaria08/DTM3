/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProjects = /* GraphQL */ `
  subscription OnCreateProjects(
    $guests: [AWSEmail]
    $iFrameURL: AWSURL
    $ownerId: String
    $projectId: String
    $projectTitle: String
  ) {
    onCreateProjects(
      guests: $guests
      iFrameURL: $iFrameURL
      ownerId: $ownerId
      projectId: $projectId
      projectTitle: $projectTitle
    ) {
      guests
      iFrameURL
      ownerId
      projectId
      projectTitle
    }
  }
`;
export const onDeleteProjects = /* GraphQL */ `
  subscription OnDeleteProjects(
    $guests: [AWSEmail]
    $iFrameURL: AWSURL
    $ownerId: String
    $projectId: String
    $projectTitle: String
  ) {
    onDeleteProjects(
      guests: $guests
      iFrameURL: $iFrameURL
      ownerId: $ownerId
      projectId: $projectId
      projectTitle: $projectTitle
    ) {
      guests
      iFrameURL
      ownerId
      projectId
      projectTitle
    }
  }
`;
export const onUpdateProjects = /* GraphQL */ `
  subscription OnUpdateProjects(
    $guests: [AWSEmail]
    $iFrameURL: AWSURL
    $ownerId: String
    $projectId: String
    $projectTitle: String
  ) {
    onUpdateProjects(
      guests: $guests
      iFrameURL: $iFrameURL
      ownerId: $ownerId
      projectId: $projectId
      projectTitle: $projectTitle
    ) {
      guests
      iFrameURL
      ownerId
      projectId
      projectTitle
    }
  }
`;
