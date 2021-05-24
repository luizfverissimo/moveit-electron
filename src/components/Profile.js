import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import levelImg from '../../assets/icons/level.svg'
import '../styles/components/Profile.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className="profileContainer">
      <img src='https://github.com/luizfverissimo.png' alt='Luiz Fernando' />
      <div>
        <strong>Luiz Fernando Verissimo</strong>
        <p>
          <img src={levelImg} alt='Level icon' />
          Level {level}
        </p>
      </div>
    </div>
  );
}
