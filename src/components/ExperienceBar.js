import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import '../styles/components/ExperienceBar.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className="experienceBar">
      <span>0xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className="currentExperience"
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
