import { Header } from '@/components/ui/parts/header/Header';
import { Title } from '@/components/ui/parts/title/Title';
import { MenuSection } from '@/components/ui/layouts/menu/MenuSection';
import { GetItemsHooks } from '@/features/getItems/hooks/GetItemsHooks';

export const MenuContents = () => {
  const items = GetItemsHooks();

  return (
    <>
      <Header />
      <Title>Menu List</Title>
      <MenuSection items={items} />
    </>
  );
};
