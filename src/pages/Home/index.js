import React from 'react';

import { ChallengeBox } from '../../components/ChallengeBox';
import { CompletedChallenges } from '../../components/CompletedChallenges';
import { CountDown } from '../../components/CountDown';
import { ExperienceBar } from '../../components/ExperienceBar';
import { Profile } from '../../components/Profile';
import { ConfigBar } from '../../components/ConfigBar';

import { CountdownProvider } from '../../contexts/CountdownContext';
import { ChallengesProvider } from '../../contexts/ChallengesContext';

import '../../styles/pages/Home.css';

export default function Home() {
  return (
      <div className='container'>
        <ConfigBar />
        <ExperienceBar />
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
      </div>
  );
}
