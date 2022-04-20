import Link from "next/link";
import Image from "next/image";

/**
 * テストページ用のコンポーネント
 * ビルド時にレンダリングをする場合
 */
const TestPage1 = ({ a }) => {
  return (
    <div>
      <h1># 静的サーバサイドレンダリング</h1>
      <h2>Server Side Rendering</h2>
      <p>ビルド時にすべてのレンダリングが完了している。</p>
      <p>
        DevToolを見るとすべてのHTMLが完成された状態で取得されているのがわかる。
      </p>
      <p>{a}</p>
      <p>↑はpropsで渡した値だが、これもビルド時に固定される。</p>
      <Image src="/images/o.jpg" height={144} width={200} />
      <p>↑Nextで用意されたImageタグ。imageはクライアントから取得処理が走る。</p>
      <div>
        <Link href="/posts/TestPage2?id=123456789">次のサンプルへ</Link>
      </div>
      <div>
        <Link href="/">← TOP</Link>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  // ここで上のTestPage1にpropsを渡すことができる
  return { props: { a: "foo" } };
};

export default TestPage1;
