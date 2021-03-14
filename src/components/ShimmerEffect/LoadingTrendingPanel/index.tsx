import React from 'react';

import LoadingEffect from '../../LoadingEffect';

import { Container } from './styles';

const LoadingTrendingPanel: React.FC = () => {
  const Row = () => (
    <>
      <div className="row">
        <LoadingEffect className="square-loading-effect white" />

        <div className="column">
          <LoadingEffect className="row-loading-effect white" />
          <LoadingEffect className="row-loading-effect white" />
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <Row />
      <Row />
      <Row />
    </Container>
  );
};

export default LoadingTrendingPanel;
