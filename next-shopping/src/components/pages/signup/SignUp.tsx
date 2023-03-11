import Link from 'next/link';

import { Header } from '@/components/ui/parts/header/Header';
import { Title } from '@/components/ui/parts/title/Title';
import { BaseForm } from '@/components/ui/parts/form/Form';
import { SubmitButton } from '@/components/ui/parts/button/SubmitButton';
import { ErrorMessage } from '@/components/ui/parts/error/errorMessage';
import { Form, FormInput, FormButton, FormMessage, FormMessageLink } from '@/components/ui/parts/form/FormCss';
import { SignUpHooks } from '@/features/signup/hooks/SignUpHooks';

export const SignUp = () => {
  const { signUpFunction, unknownError, setName, setEmail, emailError, setPassword, passwordError, isButtonDisabled } =
    SignUpHooks();

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
