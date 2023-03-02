import Link from 'next/link';

import { Header } from 'components/ui/parts/header/Header';
import { Title } from 'components/ui/parts/title/Title';
import { BaseForm } from 'components/ui/parts/form/Form';
import { SubmitButton } from 'components/ui/parts/button/SubmitButton';
import { Form, FormInput, FormButton, FormMessage, FormMessageLink } from 'components/ui/parts/form/FormCss';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export const SignUp = () => {
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

  return (
    <>
      <Header />
      <Title>Sign Up</Title>
      <BaseForm setCss={Form} onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='name' css={FormInput} {...register('name', { required: true })} />
        {errors.name && <span>name is required</span>}
        <input type='text' placeholder='email address' css={FormInput} />
        {errors.email && <span>email is required</span>}
        <input type='password' placeholder='password' css={FormInput} />
        {errors.password && <span>password is required</span>}
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
