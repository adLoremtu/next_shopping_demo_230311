import { useState, useEffect } from 'react';
import Link from 'next/link';
import { fireAuth, fireStore } from '@/libs/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { Header } from '@/components/ui/parts/header/Header';
import { Title } from '@/components/ui/parts/title/Title';
import { BaseForm } from '@/components/ui/parts/form/Form';
import { SubmitButton } from '@/components/ui/parts/button/SubmitButton';
import { ErrorMessage } from '@/components/ui/parts/error/errorMessage';
import { Form, FormInput, FormButton, FormMessage, FormMessageLink } from '@/components/ui/parts/form/FormCss';
import { Timestamp, doc, setDoc } from 'firebase/firestore';

export const SignUp = () => {
  // state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [unknownError, setUnknownError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // データ登録処理
  const signUpFunction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUnknownError('');
    setEmailError('');
    setPasswordError('');

    // firestoreにデータを登録
    createUserWithEmailAndPassword(fireAuth, email, password)
      .then(async (res) => {
        try {
          const docRef = doc(fireStore, 'users', res.user.uid);
          await setDoc(docRef, {
            name,
            email,
            password,
            create_time: Timestamp.now(),
          });

          // ログイン処理を実施
          signInWithEmailAndPassword(fireAuth, email, password)
            .then(async (userCredential) => {
              console.log('login complete', userCredential);
              location.href = '/';
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
            });
        } catch (err) {
          console.log('= error =', err);
        }
      })
      .catch((err) => {
        const { code } = err;
        if (code === 'auth/invalid-email') {
          setEmailError('メールアドレスの入力形式が不正です。');
        } else if (code === 'auth/email-already-in-use') {
          setEmailError('このメールアドレスは既に使用されています。');
        } else if (code === 'auth/weak-password') {
          setPasswordError('パスワードが短いので、6文字以上入力してください。');
        } else {
          setUnknownError('エラーにより登録ができませんでした。恐れ入りますが再度お試しください。');
        }
      });
  };

  // ログインボタン活性状態切り替え
  useEffect(() => {
    const isNameDisabled = name === '';
    const isEmailDisabled = email === '';
    const isPasswordDisabled = password === '';
    setIsButtonDisabled(isNameDisabled || isEmailDisabled || isPasswordDisabled);
  }, [name, email, password]);

  return (
    <>
      <Header />
      <Title>Sign Up</Title>
      <BaseForm setCss={Form} onSubmit={(e) => signUpFunction(e)}>
        {unknownError !== '' && <ErrorMessage>{unknownError}</ErrorMessage>}
        <input type='text' placeholder='name' css={FormInput} onChange={(e) => setName(e.target.value)} />
        <input type='text' placeholder='email address' css={FormInput} onChange={(e) => setEmail(e.target.value)} />
        {emailError !== '' && <ErrorMessage>{emailError}</ErrorMessage>}
        <input type='password' placeholder='password' css={FormInput} onChange={(e) => setPassword(e.target.value)} />
        {passwordError !== '' && <ErrorMessage>{passwordError}</ErrorMessage>}
        <SubmitButton setCss={FormButton} value='create' disabled={isButtonDisabled} />
        <p className='message' css={FormMessage}>
          Already registered?{' '}
          <Link href='/login' css={FormMessageLink}>
            Sign In
          </Link>
        </p>
      </BaseForm>
    </>
  );
};
