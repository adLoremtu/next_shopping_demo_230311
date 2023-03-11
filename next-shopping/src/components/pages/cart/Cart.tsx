import Image from 'next/image';

import { Header } from '@/components/ui/parts/header/Header';
import { Title } from '@/components/ui/parts/title/Title';
import { LinkButton } from '@/components/ui/parts/button/LinkButton';
import { CartHooks } from '@/features/cart/hooks/Cart';
import {
  CartCssWrapper,
  CartCssList,
  CartCssItem,
  CartCssImgWrap,
  CartCssImg,
  CartCssInfoWrap,
  CartCssInfoItemText,
  CartCssInfoItemPrice,
  CartCssTotalCost,
  CartCssButtonWrap,
} from './CartCss';

export const Cart = () => {
  const { cart, changeItemCart } = CartHooks();
  const { items, total } = cart;
  
  return (
    <>
      <Header />
      <Title>Cart</Title>
      <div css={CartCssWrapper}>
        {items && items.length > 0 ? (
          <ul css={CartCssList}>
            {items.map((item) => {
              return (
                <li css={CartCssItem} key={item.id}>
                  <div css={CartCssImgWrap}>
                    <Image src={`/${item.src}`} alt={item.name} width={768} height={512} css={CartCssImg} />
                  </div>
                  <div css={CartCssInfoWrap}>
                    <h2 css={CartCssInfoItemText}>{item.name}</h2>
                    <p css={CartCssInfoItemPrice}>{item.price}円</p>
                    <select
                      name=''
                      id=''
                      defaultValue={item.quantity}
                      onChange={(e) => changeItemCart(item, Number(e.target.value))}
                    >
                      <option value='0'>0</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                    </select>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : null}
        <h3 css={CartCssTotalCost}>Total: {total}円</h3>
        <div css={CartCssButtonWrap}>
          <LinkButton href='/menu'>Watch All Menu</LinkButton>
          <LinkButton href='/confirm' disabled={total !== 0}>
            Credit Card Payment
          </LinkButton>
        </div>
      </div>
    </>
  );
};
