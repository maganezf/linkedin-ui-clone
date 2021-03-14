import React from 'react';

import Panel from '../../Panel';
import LoadingEffect from '../../LoadingEffect';

import { Container } from './styles';

const LoadingFeedPost: React.FC = () => {
  return (
    <Container>
      <Panel className="no-shadow">
        <header>
          <LoadingEffect className="avatar-loading-effect" />
          <div className="column">
            <LoadingEffect className="row-loading-effect" />
            <LoadingEffect className="row-loading-effect" />
          </div>
        </header>

        <span>
          <LoadingEffect className="row-loading-effect" />
          <LoadingEffect className="row-loading-effect" />
        </span>
      </Panel>
    </Container>
  );
};

export default LoadingFeedPost;
