import { Card } from '@/components/ui/parts/card/Card';
import {
  ESection,
  ESectionTitleWrap,
  ESectionTitleMain,
  ESectionTitleSub,
} from '@/components/pages/index/IndexContentsCss';
import { EMenuBoxList } from './MenuSectionCss';
import { ItemResultsType } from '@/@types/firebase';

type Props = {
  items: ItemResultsType[];
};

export const MenuSection = (props: Props) => {
  const { items } = props;

  return (
    <section id='menu' css={ESection}>
      <div css={ESectionTitleWrap}>
        <span css={ESectionTitleMain}>Food Menu</span>
        <h2 css={ESectionTitleSub}>Fresh taste and great price</h2>
      </div>
      <ul css={EMenuBoxList}>
        {items.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
};
