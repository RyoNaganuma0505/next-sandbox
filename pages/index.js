import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home({ allPostsData }) {
  const [open, setOpen] = useState(false);
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
          リクエストパスに応じてページを動的に生成する(Incremental Static Regeneration)
        </Link>
      </p>
      <p>
        <Link href="/api/hello">APIサーバとしての使い方をしてしまう</Link>
      </p>
      <button onClick={() => setOpen(!open)}>+ フォルダー構成について</button>
      <div style={{ display: open ? "block" : "none" }}>
        <li>pages下に置いたファイルがパスとして使えるようになる</li>
        <li>[]のファイルはパスから動的にページを生成できるようになる</li>
        <Image src="/images/next-folders.png" height={520} width={320} />
      </div>
    </div>
  );
}
