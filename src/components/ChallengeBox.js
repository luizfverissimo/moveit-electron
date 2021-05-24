import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import '../styles/components/ChallengeBox.css';

import bodyImg from '../../assets/icons/body.svg'
import eyeImg from '../../assets/icons/eye.svg'
import levelUpImg from '../../assets/icons/level-up.svg'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  const { resetCountDown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountDown()
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountDown();
  }

  return (
    <div className="challengeBoxContainer">
      {activeChallenge ? (
        <div className="challengeActive">
          <header>Ganhe {activeChallenge.amount}xp</header>
          <main>
            <img
              src={
                activeChallenge.type === 'body'
                  ? bodyImg
                  : eyeImg
              }
              alt={
                activeChallenge.type === 'body'
                  ? 'Exercício para o corpo'
                  : 'Exercício para os olhos'
              }
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type='button'
              className="challengeFailedButton"
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type='button'
              className="challengeCompletedButton"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className="challengeNotActive">
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src={levelUpImg} alt='Level up' />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
