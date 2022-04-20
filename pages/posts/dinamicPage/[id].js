import Link from "next/link";

export default function Post({ pageId }) {
  return (
    <div>
      <h1># リクエストパスから動的にページを生成</h1>

      <p>{pageId}</p>
      <p>↑ パスに含まれていて動的に生成されたもの。</p>
      <p>用意したJSは[id].jsのみだが、</p>
      <p>
        <Link href="/posts/dinamicPage/b">/posts/dinamicPage/b</Link>や
        <Link href="/posts/dinamicPage/c">/posts/dinamicPage/c</Link>も行ける。
      </p>
      <p>
        ※<Link href="/posts/dinamicPage/d">/posts/dinamicPage/d</Link>
        は未定義なのでNotFound
      </p>
      <div>
        <Link href="/">← TOP</Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = [
    { params: { id: "a" } }, //
    { params: { id: "b" } }, //
    { params: { id: "c" } }, //
  ];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // 動的に生成されたパスのうちアクセスされた情報を受け取る
  console.log(params);
  return {
    props: {
      pageId: params.id,
    },
  };
}
