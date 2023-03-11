import Image from 'next/image';

import { Button } from '@/components/ui/parts/button/Button';
import { ECardItem, ECardImgWrap, ECardImg, ECardMainTitle, ECardSubTitle, ECardDescription } from './CardCss';
import { ItemResultsType } from '@/@types/firebase';
import { CartHooks } from '@/features/cart/hooks/Cart';

type Props = {
  item: ItemResultsType;
};

export const Card = (props: Props) => {
  const { id, price, name, src, description } = props.item;
  const { addItemCart } = CartHooks()

  return (
    <li css={ECardItem} key={id}>
      <div css={ECardImgWrap}>
        <Image src={`/${src}`} alt={name} width={768} height={512} css={ECardImg} />
      </div>
      <h2 css={ECardMainTitle}>{name}</h2>
      <h3 css={ECardSubTitle}>{description}</h3>
      <span css={ECardDescription}>{price}円</span>
      <Button onClick={() => addItemCart(props.item)}>Add Cart</Button>
    </li>
  );
};
