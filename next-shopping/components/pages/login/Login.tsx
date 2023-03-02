import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Header } from 'components/ui/parts/header/Header';
import { Title } from 'components/ui/parts/title/Title';
import { BaseForm } from 'components/ui/parts/form/Form';
import { SubmitButton } from 'components/ui/parts/button/SubmitButton';
import { Form, FormInput, FormButton, FormMessage, FormMessageLink } from 'components/ui/parts/form/FormCss';

type Inputs = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  // ログインボタン押下時
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    isEmptyEmailVal;
  };

  // ログインボタン活性状態切り替え
  const isEmptyEmailVal = watch('email') === '';
  const isEmptyPasswordVal = watch('password') === '';
  const isButtonDisabled = isEmptyEmailVal || isEmptyPasswordVal;

  console.log('===', watch('email'), watch('password'));

  return (
    <>
      <Header />
      <Title>Login</Title>
      <BaseForm setCss={Form} onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='email' css={FormInput} {...register('email', { required: true })} />
        {errors.email && <span>email is required</span>}
        <input type='password' placeholder='password' css={FormInput} {...register('password', { required: true })} />
        {errors.password && <span>password is required</span>}
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
