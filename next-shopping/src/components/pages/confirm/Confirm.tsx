import Link from 'next/link';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { Header } from '@/components/ui/parts/header/Header';
import { Title } from '@/components/ui/parts/title/Title';
import { StrapiForm } from '@/components/ui/layouts/confirm/StrapiForm';
import {
  ConfirmTableArea,
  ConfirmTableWrapper,
  ConfirmTable,
  ConfirmTr,
  ConfirmTh,
} from './ConfirmCss';

export const Confirm = () => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLICKEY!);

  return (
    <>
      <Header />
      <Title>Buy</Title>
      <Elements stripe={stripePromise}>
        <StrapiForm />
      </Elements>
      <div css={ConfirmTableArea}>
        <h3>テストカード</h3>
        <p>
          詳しく知りたい方は<Link href='https://stripe.com/docs/testing?locale=ja-JP'>こちら</Link>
        </p>
        <div css={ConfirmTableWrapper}>
          <table css={ConfirmTable}>
            <thead>
              <tr css={ConfirmTr}>
                <th css={ConfirmTh}>ブランド</th>
                <th css={ConfirmTh}>番号</th>
                <th css={ConfirmTh}>日付</th>
                <th css={ConfirmTh}>セキュリティコード</th>
              </tr>
            </thead>
            <tbody>
              <tr css={ConfirmTr}>
                <td>Visa</td>
                <td>4242424242424242</td>
                <td>任意の 3 桁の数字</td>
                <td>任意の将来の日付</td>
              </tr>
              <tr css={ConfirmTr}>
                <td>Mastercard</td>
                <td>5555555555554444</td>
                <td>任意の 3 桁の数字</td>
                <td>任意の将来の日付</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
