import { Header } from '@/components/ui/parts/header/Header';
import { Title } from '@/components/ui/parts/title/Title';
import { MyPageForm, MyPageFormItem, MyPageFormLabel, MyPageFormInput } from './MyPageContentsCss';
import { useContext, useEffect, useState } from 'react';
import { LoginStatusContext } from '@/features/checkLoginStatus/hooks/CheckLoginStatus';
import { doc, getDoc } from 'firebase/firestore';
import { fireStore } from '@/libs/firebase';

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

export const MyPageContents = () => {
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

  return (
    <>
      <Header />
      <section>
        <Title>My Profile</Title>
        <form css={MyPageForm}>
          <div css={MyPageFormItem}>
            <label htmlFor='name' css={MyPageFormLabel}>
              お名前
            </label>
            <input
              type='text'
              placeholder='例）山田太郎'
              id='name'
              name='name'
              disabled
              css={MyPageFormInput}
              value={name}
            />
          </div>
          <div css={MyPageFormItem}>
            <label htmlFor='email' css={MyPageFormLabel}>
              メールアドレス
            </label>
            <input
              type='text'
              placeholder='aaa@gmail.com'
              id='email'
              name='email'
              disabled
              css={MyPageFormInput}
              value={email}
            />
          </div>
        </form>
      </section>
    </>
  );
};
