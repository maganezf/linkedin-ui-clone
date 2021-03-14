import React from 'react';

import Panel from '../../Panel';
import LoadingEffect from '../../LoadingEffect';

import { Container } from './styles';

const LoadingProfilePanel: React.FC = () => {
  return (
    <Container>
      <Panel className="no-shadow">
        <LoadingEffect className="background-loading-effect" />

        <span>
          <LoadingEffect className="avatar-loading-effect" />
          <LoadingEffect className="row-loading-effect" />
          <LoadingEffect className="row-loading-effect" />
        </span>
      </Panel>
    </Container>
  );
};

export default LoadingProfilePanel;
