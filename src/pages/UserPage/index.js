import React, { useContext } from 'react';

import { ConfigBar } from '../../components/ConfigBar';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { UserContext } from '../../contexts/UserContext';

import '../../styles/pages/UserPage.css';

function UserPage() {
  const { userUrlImage, userName, setUserName, setUserUrlImage, saveUser } =
    useContext(UserContext);

  const { resetStats } = useContext(ChallengesContext);

  return (
    <div className='container'>
      <ConfigBar />
      <h1>Configuração de Usuário</h1>
      <div className='userInput'>
        <img className='profileImg' src={userUrlImage} alt='image de perfil' />
        <div>
          <label htmlFor='url'>URL da imagem do perfil</label>
          <input
            type='text'
            id='url'
            value={userUrlImage}
            onChange={(e) => setUserUrlImage(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='name'>Nome</label>
          <input
            type='text'
            id='name'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className='buttonContainer'>
        <button type='button' className='redButton' onClick={resetStats}>
          Resetar Progresso
        </button>
        <button type='button' className='blueButton' onClick={saveUser}>
          Salvar
        </button>
      </div>
    </div>
  );
}

export default UserPage;
