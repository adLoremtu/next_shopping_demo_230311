import Link from 'next/link';

import { LoginHooks } from '@/features/login/hooks/LoginHooks';
import { Header } from '@/components/ui/parts/header/Header';
import { Title } from '@/components/ui/parts/title/Title';
import { BaseForm } from '@/components/ui/parts/form/Form';
import { SubmitButton } from '@/components/ui/parts/button/SubmitButton';
import { ErrorMessage } from '@/components/ui/parts/error/errorMessage';
import { Form, FormInput, FormButton, FormMessage, FormMessageLink } from '@/components/ui/parts/form/FormCss';

export const Login = () => {
  const { loginFunction, error, setEmail, setPassword, isButtonDisabled } = LoginHooks();

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
