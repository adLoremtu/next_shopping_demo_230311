import { useEffect, useState } from 'react';
import { fireStore } from '@libs/firebase';
import { collection, CollectionReference, getDocs, orderBy, query, limit } from 'firebase/firestore';
import { ItemResultsType } from '@/@types/firebase';

import { GetPageUrlPathHooks } from '@/features/getPageUrlPath/hooks/GetPageUrlPathHooks';

type Props = {
  pathname: string
  id: string
}

// FireStoreのitems取得クエリ分岐
const ResFireStoreCollection = (props: Props) => {
  let docRef = null;
  switch (props.pathname) {
    case "/":
      // トップページ
      docRef = query(collection(fireStore, 'items'), orderBy('displayRank', 'asc'), limit(3)) as CollectionReference<ItemResultsType>;
      break;
    case "/menu":
      // 商品一覧ページ
      docRef = query(collection(fireStore, 'items'), orderBy('displayRank', 'asc')) as CollectionReference<ItemResultsType>;
      break;
  }

  return docRef;
}

// FireStoreから商品情報を一覧で取得する
export const GetItemsHooks = () => {
  const [items, setItems] = useState<ItemResultsType[]>([]);
  const info = GetPageUrlPathHooks();

  useEffect(() => {
    const docRef = ResFireStoreCollection(info);

    if (docRef === null) return;

    getDocs(docRef)
      .then((snapshot) => {
        const results: ItemResultsType[] = [];

        snapshot.docs.forEach((doc) => {
          results.push({
            ...doc.data(),
            id: doc.id,
          });
        });

        setItems(results);
        console.log(results);
      })
      .catch((err) => {
        console.log('=== err ===', err);
        console.log(err.code, err.message);
      });
  }, []);

  return items
}