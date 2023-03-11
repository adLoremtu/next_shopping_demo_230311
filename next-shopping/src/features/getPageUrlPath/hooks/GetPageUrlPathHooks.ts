import { useRouter } from "next/router"

// 同名クエリパラメータが複数セットされている場合、最初のクエリパラメータのみ取得
const getAsString = (value: string | string[] | undefined) => {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

// 画面URLを取得
export const GetPageUrlPathHooks = () => {
  const router = useRouter()
  const { pathname } = router
  const id = getAsString(router.query.id) || '';

  return { pathname, id };
}