import { MyPageForm, MyPageFormItem, MyPageFormLabel, MyPageFormInput, MyPageButtonCenter } from './MyPageContentsCss';
import { Title } from 'components/ui/parts/title/Title';
import { Button } from 'components/ui/parts/button/Button';

export const MyPageContents = () => {
  return (
    <>
      <Title>My Profile</Title>
      <form css={MyPageForm}>
        <div css={MyPageFormItem}>
          <label htmlFor='name' css={MyPageFormLabel}>
            お名前
          </label>
          <input type='text' placeholder='例）山田太郎' id='name' name='name' css={MyPageFormInput} />
        </div>
        <div css={MyPageFormItem}>
          <label htmlFor='email' css={MyPageFormLabel}>
            メールアドレス
          </label>
          <input type='text' placeholder='aaa@gmail.com' id='email' name='email' css={MyPageFormInput} />
        </div>
      </form>
      <Button setCss={MyPageButtonCenter}>更新する</Button>
    </>
  );
};
