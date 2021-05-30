import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CountdownContext } from '../contexts/CountdownContext'

import '../styles/components/ConfigBar.css'
import userSvg from '../../assets/icons/user.svg'
import timerSvg from '../../assets/icons/timer.svg'

export const ConfigBar = () => {

  return (
    <div className="configBar">
      <Link to="/">
      <img src={timerSvg} alt="cronômetro"/>
      </Link>
      <Link to="/user">
      <img src={userSvg} alt="usuários"/>
      </Link>
    </div>
  )
}


