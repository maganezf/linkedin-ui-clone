import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://github.com/maganezf.png"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Maganez Filho</h1>
        <h2>System Developer, with focusing in Front-end</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Who see your profile</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">See your posts</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
