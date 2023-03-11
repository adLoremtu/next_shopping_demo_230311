import { useContext, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';

import { fireStore } from '@/libs/firebase';
import { LoginStatusContext } from '@/features/checkLoginStatus/hooks/CheckLoginStatusHooks';

const getUserDoc = async (uid: string) => {
  const docRef = doc(fireStore, 'users', uid);
  const docSnap = await getDoc(docRef);

  let name = '';
  let email = '';
  if (docSnap.exists()) {
    console.log('data exist = ', docSnap.data());
    const data = docSnap.data();
    name = data.name;
    email = data.email;
  } else {
    console.log('data not found');
  }

  return { name, email };
};

export const GetUserInfoHooks = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { isLoggedIn, uid } = useContext(LoginStatusContext);

  useEffect(() => {
    // ログイン状態の時、fireStoreからユーザ情報を取得
    const fetchUserData = async () => {
      if (isLoggedIn && typeof uid !== 'undefined') {
        const { name, email } = await getUserDoc(uid);
        setName(name);
        setEmail(email);
      }
    };

    fetchUserData();
  }, [isLoggedIn, uid]);

  return { name, email }
}
