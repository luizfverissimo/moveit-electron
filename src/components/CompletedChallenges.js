import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import '../styles/components/CompletedChallenges.css';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className="completedChallengesContainer">
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
