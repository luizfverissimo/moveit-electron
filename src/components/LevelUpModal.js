import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import closeImg from '../../assets/icons/close.svg'
import '../styles/components/LevelUpModal.css';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className="overlay">
      <div className="container-levelup">
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button type='button' onClick={closeLevelUpModal}>
          <img src={closeImg} alt='Fechar modal' />
        </button>
      </div>
    </div>
  );
}
