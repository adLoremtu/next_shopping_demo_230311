import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fireAuth } from '@/libs/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const LoginHooks = () => {
  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const router = useRouter();

  // ログイン処理
  const loginFunction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    setError('');

    signInWithEmailAndPassword(fireAuth, email, password)
      .then(async (userCredential) => {
        console.log("login.tsx", userCredential);
        router.push('/');
      })
      .catch(() => {
        setError('ログインできませんでした。入力情報を再度確認してみてください。');
        setIsButtonDisabled(false);
      });
  };

  // ログインボタン活性状態切り替え
  useEffect(() => {
    const isEmailDisabled = email === '';
    const isPasswordDisabled = password === '';
    setIsButtonDisabled(isEmailDisabled || isPasswordDisabled);
  }, [email, password]);

  return { email, setEmail, password, setPassword, error, isButtonDisabled, loginFunction, router }
}