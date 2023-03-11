import Link from 'next/link';
import { fireAuth } from '@/libs/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { Header } from '@/components/ui/parts/header/Header';
import { Title } from '@/components/ui/parts/title/Title';
import { BaseForm } from '@/components/ui/parts/form/Form';
import { SubmitButton } from '@/components/ui/parts/button/SubmitButton';
import { ErrorMessage } from '@/components/ui/parts/error/errorMessage';
import { Form, FormInput, FormButton, FormMessage, FormMessageLink } from '@/components/ui/parts/form/FormCss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const Login = () => {
  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const router = useRouter();

  // ログイン処理
  const loginFunction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');

    signInWithEmailAndPassword(fireAuth, email, password)
      .then(async (userCredential) => {
        console.log("login.tsx", userCredential);
        router.push('/');
      })
      .catch(() => {
        setError('ログインできませんでした。入力情報を再度確認してみてください。');
      });
  };

  // ログインボタン活性状態切り替え
  useEffect(() => {
    const isEmailDisabled = email === '';
    const isPasswordDisabled = password === '';
    setIsButtonDisabled(isEmailDisabled || isPasswordDisabled);
  }, [email, password]);

  return (
    <>
      <Header />
      <Title>Login</Title>
      <BaseForm setCss={Form} onSubmit={(e) => loginFunction(e)}>
        {error !== '' && <ErrorMessage>{error}</ErrorMessage>}
        <input type='text' placeholder='email' css={FormInput} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='password' css={FormInput} onChange={(e) => setPassword(e.target.value)} />
        <SubmitButton setCss={FormButton} value='login' disabled={isButtonDisabled} />
        <p className='message' css={FormMessage}>
          Not registered?{' '}
          <Link href='/signup' css={FormMessageLink}>
            Create an account
          </Link>
        </p>
      </BaseForm>
    </>
  );
};
