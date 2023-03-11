import { Card } from '@/components/ui/parts/card/Card';
import { ESection } from '@/components/pages/index/IndexContentsCss';
import { EMenuBoxList } from './MenuSectionCss';
import { ItemResultsType } from '@/@types/firebase';

type Props = {
  items: ItemResultsType[];
};

export const MenuSection = (props: Props) => {
  const { items } = props;

  return (
    <section css={ESection}>
      <ul css={EMenuBoxList}>
        {items.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
};
