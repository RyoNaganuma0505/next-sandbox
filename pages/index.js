import Link from "next/link";

export default function Home({ allPostsData }) {
  console.log(allPostsData);
  return (
    <div>
      <h1>Nextさわってみたよ</h1>
      <div>
        ※このページをロードしたタイミングでは、HTMLとindex.jsが読み込まれていることを確認。
      </div>
      <p>
        <Link href="/posts/TestPage1">
          静的サーバサイドレンダリング(Static Generation)
        </Link>
      </p>
      <p>
        <Link href="/posts/TestPage2?id=abcdefg">
          リクエストに応じたサーバサイドレンダリング(Server Side Rendering)
        </Link>
      </p>
      <p>
        <Link href="/posts/TestPage3">
          クライアントから改めてAPIを叩いて最新データを取得する(Stale While
          Revalidate)
        </Link>
      </p>
      <p>
        <Link href="/posts/dinamicPage/a">
          リクエストパスに応じてページを動的に生成する
        </Link>
      </p>
      <p>
        <Link href="/api/hello">APIサーバとしての使い方をしてしまう</Link>
      </p>
    </div>
  );
}
