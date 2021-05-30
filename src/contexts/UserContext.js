import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

function UserProvider({ children }) {
  const [userName, setUserName] = useState('Edite seu usuário');
  const [userUrlImage, setUserUrlImage] = useState(
    'https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1'
  );

  useEffect(() => {
    const userNameStorage = localStorage.getItem('userName');
    const userUrlImageStorage = localStorage.getItem('userUrlImage');

    if (!userNameStorage || !userUrlImageStorage) {
      localStorage.setItem('userName', userName);
      localStorage.setItem('userUrlImage', userUrlImage);
      return;
    }

    setUserName(userNameStorage);
    setUserUrlImage(userUrlImageStorage);
  }, []);

  function saveUser() {
    alert('Usuário salvo com sucesso!')
    localStorage.setItem('userName', userName);
    localStorage.setItem('userUrlImage', userUrlImage);
  }

  return (
    <UserContext.Provider
      value={{ userUrlImage, userName, setUserName, setUserUrlImage, saveUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
