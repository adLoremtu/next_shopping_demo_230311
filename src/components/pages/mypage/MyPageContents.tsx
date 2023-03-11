import { Header } from '@/components/ui/parts/header/Header';
import { Title } from '@/components/ui/parts/title/Title';
import { GetUserInfoHooks } from '@/features/getUserInfo/hooks/GetUserInfoHooks';
import { MyPageForm, MyPageFormItem, MyPageFormLabel, MyPageFormInput } from './MyPageContentsCss';

export const MyPageContents = () => {
  const {name, email} = GetUserInfoHooks()

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
