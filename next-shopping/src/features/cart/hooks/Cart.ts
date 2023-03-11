import { useEffect, useState } from 'react';
import { ItemResultsType } from '../../../@types/firebase';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';

type CartItem = ItemResultsType & { quantity: number };

type Cart = {
  items: CartItem[];
  total: number;
};

const checkCookieCart = () => {
  const cookieCartParam = Cookie.get('cart');
  const isCookieUndefined = typeof cookieCartParam !== 'undefined';
  const cartContext = isCookieUndefined
    ? {
        items: JSON.parse(cookieCartParam) as CartItem[],
        total: JSON.parse(cookieCartParam).reduce((total: number, cartItem: CartItem) => {
          return total + cartItem.price * cartItem.quantity;
        }, 0) as number,
      }
    : {
        items: [],
        total: 0,
      };

  return cartContext;
};

export const CartHooks = () => {
  const router = useRouter();
  const [cart, setCart] = useState<Cart>(checkCookieCart());
  
  useEffect(() => {
    console.log('cookie.get before = ', JSON.parse(Cookie.get('cart') || '[]'));
    Cookie.set('cart', JSON.stringify(cart.items));
    console.log('cookie.get after = ', JSON.parse(Cookie.get('cart') || '[]'));
  }, [cart]);

  // カート商品追加
  const addItemCart = (item: ItemResultsType) => {
    const { items } = cart;
    const newItem = items.find((i) => i.id === item.id);
    console.log('clicked');

    // 新規追加
    if (!newItem) {
      setCart({
        items: [...items, Object.assign({}, item, { quantity: 1 })],
        total: cart.total + item.price,
      });
    } else {
      const updateItems = cart.items.map((cartItem) => {
        return cartItem.id === newItem.id
          ? Object.assign({}, cartItem, { quantity: cartItem.quantity + 1 <= 5 ? cartItem.quantity + 1 : 5 })
          : cartItem;
      });

      const updateTotal = updateItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity;
      }, 0);

      setCart({
        items: updateItems,
        total: updateTotal,
      });

      console.log('既存追加更新後', updateItems, updateTotal);
    }

    Cookie.set('cart', JSON.stringify(cart.items));
    router.push('/cart');
  };

  // カート商品更新
  const changeItemCart = (item: ItemResultsType, quantity: number) => {
    const { items } = cart;
    const newItem = items.find((i) => i.id === item.id);
    console.log('clicked');

    if (quantity > 0) {
      if (newItem) {
        const updateItems = cart.items.map((cartItem) => {
          return cartItem.id === newItem.id
            ? Object.assign({}, cartItem, { quantity: quantity <= 5 ? quantity : 5 })
            : cartItem;
        });

        const updateTotal = updateItems.reduce((total, cartItem) => {
          return total + cartItem.price * cartItem.quantity;
        }, 0);

        setCart({
          items: updateItems,
          total: updateTotal,
        });
      }
    } else {
      // 削除
      const items = [...cart.items];
      const index = items.findIndex((i) => i.id === item.id);
      items.splice(index, 1);

      const updateTotal = items.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity;
      }, 0);

      setCart({
        items,
        total: updateTotal,
      });
    }

    Cookie.set('cart', JSON.stringify(cart.items));
    console.log('check cart = ', JSON.stringify(items));
    console.log('cookie.cart(change) = ', JSON.parse(Cookie.get('cart') || ''));
    router.push('/cart');
  };

  return {
    cart,
    addItemCart,
    changeItemCart,
  };
};
