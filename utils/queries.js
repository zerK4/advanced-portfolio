export const allProjectsQuery = () => {
  const query = `*[_type == 'project'] | order(_createdAt desc) {
          _id,
        projectName,
        projectImage{
          asset->{
            _id,
            url,
          },
        },
        projectCode,
        projectLive,
        projectFramework,
        projectDescription,
      }`;
  return query;
};
export const allCertsQuery = () => {
  const query = `*[_type == 'certs'] | order(_createdAt desc) {
          _id,
        name,
        link,
        provider,
        certId,
        date,
      }`;
  return query;
};
