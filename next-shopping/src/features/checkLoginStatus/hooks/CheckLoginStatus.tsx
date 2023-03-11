import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { fireAuth } from '@/libs/firebase';

type Props = {
  children: React.ReactNode
}

type LoginStatusType = {
  isLoggedIn: boolean;
  uid?: string
}

export const LoginStatusContext = createContext<LoginStatusType>({
  isLoggedIn: false
});

export const CheckLoginStatus = (props: Props) => {
  const { children } = props;
  const [isLoginStatus, setIsLoginStatus] = useState<LoginStatusType>({
    isLoggedIn: false
  })

  useEffect(() => {
    onAuthStateChanged(fireAuth, (user) => {
      if (user) {
        const {uid} = user
        console.log("authcheck = login", user);
        setIsLoginStatus({ isLoggedIn: true, uid })
      } else {
        console.log("authcheck = logout")
        setIsLoginStatus({ isLoggedIn: false })
      }
    })
  }, [])

  return (
    <LoginStatusContext.Provider value={ isLoginStatus } >
      { children }
    </LoginStatusContext.Provider>
  );
}
