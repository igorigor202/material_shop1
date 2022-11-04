import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={100}
    height={485}
    viewBox="0 0 1280 485"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="3" y="51" rx="0" ry="0" width="1280" height="314" />
    <circle cx="16" cy="16" r="16" />
    <rect x="42" y="6" rx="9" ry="9" width="485" height="20" />
  </ContentLoader>
);

export default Skeleton;
