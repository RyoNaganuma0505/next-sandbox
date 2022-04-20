import Link from "next/link";
import Image from "next/image";

/**
 * テストページ用のコンポーネント
 * リクエスト後にサーバサイドでレンダリングを行う場合
 */
const TestPage2 = ({ pageId }) => {
  return (
    <div>
      <h1># リクエスト毎サーバサイドレンダリング</h1>
      <h2>Static Generation</h2>
      <p>リクエスト受付時にレンダリングを行い、生成したHTMLを返却している。</p>
      <p>
        DevToolを見るとすべてのHTMLが完成された状態で取得されているのがわかる。
      </p>
      <p>id={pageId}</p>
      <p>
        ↑はクエリパラメータのID。IDによってレンダリング結果が変わるはずだが、レスポンスを見ると、完成された状態で手元に届いているのがわかる。
      </p>
      <div>
        <Link href="/posts/TestPage3">次のサンプルへ</Link>
      </div>
      <Link href="/">← TOP</Link>
    </div>
  );
};

export const getServerSideProps = async (contenxt) => {
  return { props: { pageId: contenxt?.query?.id ? contenxt.query.id : "" } };
};

export default TestPage2;
