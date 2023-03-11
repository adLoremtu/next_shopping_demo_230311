import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { doc, collection, setDoc } from 'firebase/firestore';
import { fireStore } from '@/libs/firebase';
import { Stripe, StripeCardElement } from '@stripe/stripe-js';

import { BaseForm } from '@/components/ui/parts/form/Form';
import { SubmitButton } from '@/components/ui/parts/button/SubmitButton';
import { ErrorMessage } from '@/components/ui/parts/error/errorMessage';
import { Form, FormInput, FormButton } from '@/components/ui/parts/form/FormCss';
import { ConfirmWrapper } from '@/components/pages/confirm/ConfirmCss';
import { LoginStatusContext } from '@/features/checkLoginStatus/hooks/CheckLoginStatusHooks';
import { CartHooks } from '@/features/cart/hooks/Cart';

type ItemRecordFireStoreType = {
  name: string;
  price: number;
  quantity: number;
}[];

export const StrapiForm = () => {
  const [error, setError] = useState('');
  const [address, setAddress] = useState('');

  const { cart } = CartHooks();
  const { items, total } = cart;
  const { uid } = useContext(LoginStatusContext);

  const stripe = useStripe() as Stripe;
  const elements = useElements();

  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // 切り出し
  const createPayment = async (cardElement: StripeCardElement) => {
    const { client_secret } = await fetch('/api/create-payment-intent', {
      method: 'POST',
    })
      .then((res) => res.json())
      .catch((e) => {
        setError('支払い登録に失敗しました。再度実施してみてください。');
        console.log('client_secretエラー', e);
        setProcessing(false);
      });

    let itemRecordStripe = '';
    const itemRecordFireStore: ItemRecordFireStoreType = [];
    items.forEach((item) => {
      itemRecordStripe += `・${item.name} ${item.price} ${item.quantity}個\n`;
      itemRecordFireStore.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      });
    });

    const options = {
      payment_method: {
        card: cardElement,
        description: `Order ${new Date()} by ${uid}

          【Items】
          ${itemRecordStripe}
        `,
      },
      amount: total,
      currency: 'JPY',
    };

    try {
      // strapi支払い登録実施
      const { paymentIntent, error } = await stripe.confirmCardPayment(client_secret, options);

      if (error) {
        setError('支払い登録に失敗しました。再度実施してみてください。');
        setProcessing(false);
      } else {
        // 支払い成功
        const { id } = paymentIntent;
        const response = await fetch('/api/create-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ paymentIntentId: id }),
        });

        if (response.ok) {
          // Strapiへの支払い登録成功時の処理
          console.log('=== payment clear');

          // firestoreにデータを追加
          const docRef = doc(collection(fireStore, 'orders'));
          await setDoc(docRef, {
            address,
            id: uid,
            items: itemRecordFireStore,
            total,
          });
        } else {
          setError('支払い登録に失敗しました');
        }

        setPaymentSuccess(true);
        setProcessing(false);
      }
    } catch (e) {
      console.log('register error', e);
      setError('購入に失敗しました。入力情報をご確認ください。');
    }
  };

  // ボタンクリック時のイベント
  const registerPayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setError('決済サービスにてエラーが発生しました。しばらく時間を置いてから再度実行してください。');
      return;
    }

    setProcessing(true);

    // strapi支払いのためのクライアントシークレットキー生成
    const cardElement = elements.getElement(CardElement);
    if (cardElement === null) {
      setError('カード情報が不正です。ご確認ください。');
      setProcessing(false);
      return;
    }

    createPayment(cardElement);
  };

  return (
    <BaseForm setCss={Form} onSubmit={() => alert("現在作成中。")}>
      {error !== '' && <ErrorMessage>{error}</ErrorMessage>}
      <input
        type='text'
        placeholder='address'
        css={FormInput}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <div css={ConfirmWrapper}>
        <CardElement />
      </div>
      <SubmitButton setCss={FormButton} value='buy（現在作成中のため動きません。）' disabled={true} />
    </BaseForm>
  );
};
