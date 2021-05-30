import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { UserContext } from '../contexts/UserContext';

import levelImg from '../../assets/icons/level.svg'
import '../styles/components/Profile.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const {userName, userUrlImage} = useContext(UserContext)

  return (
    <div className="profileContainer">
      <img src={userUrlImage} alt={userName} />
      <div>
        <strong>{userName}</strong>
        <p>
          <img src={levelImg} alt='Level icon' />
          Level {level}
        </p>
      </div>
    </div>
  );
}
