import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';
import notificationAudio from '../../assets/notification.mp3';
import favicon from '../../assets/favicon.png';

export const ChallengesContext = createContext();

export function ChallengesProvider({ children }) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();

    const level = localStorage.getItem('level');
    const currentExperience = localStorage.getItem('currentExperience');
    const challengesCompleted = localStorage.getItem('challengesCompleted');

    console.log(level, currentExperience, challengesCompleted);

    if (level && currentExperience && challengesCompleted) {
      setLevel(Number(level));
      setCurrentExperience(Number(currentExperience));
      setChallengesCompleted(Number(challengesCompleted));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('level', String(level));
    localStorage.setItem('currentExperience', String(currentExperience));
    localStorage.setItem('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

    new Audio(notificationAudio).play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount} xp!`,
        icon: favicon,
        silent: true
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;
    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  function resetStats() {
    if (confirm('Você deseja resetar seus Stats?')) {
      localStorage.setItem('level', String(1));
      localStorage.setItem('currentExperience', String(0));
      localStorage.setItem('challengesCompleted', String(0));

      setLevel(1);
      setCurrentExperience(0);
      setChallengesCompleted(0);
    }
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        challengesCompleted,
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal,
        resetStats
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}
