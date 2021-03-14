import React from 'react';

import Panel from '../../Panel';
import LoadingEffect from '../../LoadingEffect';

import { Container } from './styles';

const LoadingFeedShare: React.FC = () => {
  return (
    <Container>
      <Panel className="no-shadow">
        <LoadingEffect className="row-loading-effect" />
        <LoadingEffect className="row-loading-effect" />
      </Panel>
    </Container>
  );
};

export default LoadingFeedShare;
