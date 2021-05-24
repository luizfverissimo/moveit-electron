import React, { useEffect, useState } from 'react'
import Cookie from 'js-cookie'

import { ChallengeBox } from '../../components/ChallengeBox';
import { CompletedChallenges } from '../../components/CompletedChallenges';
import { CountDown } from '../../components/CountDown';
import { ExperienceBar } from '../../components/ExperienceBar';
import { Profile } from '../../components/Profile';
import { CountdownProvider } from '../../contexts/CountdownContext';

import '../../styles/pages/Home.css';
import { ChallengesProvider } from '../../contexts/ChallengesContext';

export default function Home() {
  const [level, setLevel] = useState(0)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)

  useEffect(() => {
    // const { level, currentExperience, challengesCompleted } = Cookie.get()

    const level = localStorage.getItem('level')
    const currentExperience = localStorage.getItem('currentExperience')
    const challengesCompleted = localStorage.getItem('challengesCompleted')

    setLevel(Number(level))
    setCurrentExperience(Number(currentExperience))
    setChallengesCompleted(Number(challengesCompleted))
  }, [])

  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
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
