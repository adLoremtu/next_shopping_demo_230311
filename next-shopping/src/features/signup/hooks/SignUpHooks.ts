import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Timestamp, doc, setDoc } from 'firebase/firestore';

import { fireAuth, fireStore } from '@/libs/firebase';

export const SignUpHooks = () => {
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
    setIsButtonDisabled(true)

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
          setUnknownError('エラーにより登録ができませんでした。恐れ入りますが再度お試しください。');
          console.log('= error =', err);
          setIsButtonDisabled(false);
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
        setIsButtonDisabled(false);
      });
  };

  // ログインボタン活性状態切り替え
  useEffect(() => {
    const isNameDisabled = name === '';
    const isEmailDisabled = email === '';
    const isPasswordDisabled = password === '';
    setIsButtonDisabled(isNameDisabled || isEmailDisabled || isPasswordDisabled);
  }, [name, email, password]);

  return {
    signUpFunction,
    unknownError,
    setName,
    setEmail,
    emailError,
    setPassword,
    passwordError,
    isButtonDisabled
  }
}