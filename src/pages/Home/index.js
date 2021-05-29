import React from 'react'

import { ChallengeBox } from '../../components/ChallengeBox';
import { CompletedChallenges } from '../../components/CompletedChallenges';
import { CountDown } from '../../components/CountDown';
import { ExperienceBar } from '../../components/ExperienceBar';
import { Profile } from '../../components/Profile';
import { CountdownProvider } from '../../contexts/CountdownContext';

import '../../styles/pages/Home.css';
import { ChallengesProvider } from '../../contexts/ChallengesContext';

export default function Home() {
  return (
    <ChallengesProvider
      // level={level}
      // currentExperience={currentExperience}
      // challengesCompleted={challengesCompleted}
    >
      <div className='container'>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}
