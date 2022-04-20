import Link from "next/link";
import useSWR from "swr";
import axios from "axios";

const fetcher = async (url) => {
  console.log("in swr");
  const res = await axios.get(url);
  console.log(res.data);
  return res.data;
};
/**
 * テストページ用のコンポーネント
 * クライアント側でデータの取得を行う場合
 */
const TestPage3 = ({ b }) => {
  const { data } = useSWR(
    "https://api.clouddirectxr-dev.docomo-cloud.com:8080/healthcheck",
    fetcher
  );
  return (
    <div>
      <h1># クライアントでHTML/JSを取得してからAPIを実行</h1>
      <h2>Stale while Revalidate</h2>
      <p>{data}</p>
      <p>
        ↑
        Axiosで取得した値。HTMLを取得したときには入っていないが、クライアントから取得してからレンダリングしている。
      </p>
      <p>{b}</p>
      <p>
        ↑
        こちらはPropsで渡された値。SGで生成されているので、HTMLを取得した段階ですでにレンダリング済。
      </p>
      <p>hook: useSWR</p>
      <div>
        <Link href="/">← TOP</Link>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  return { props: { b: "hogehoge" } };
};

export default TestPage3;
