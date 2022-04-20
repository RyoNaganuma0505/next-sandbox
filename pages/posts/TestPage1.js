import Link from "next/link";
import Image from "next/image";

/**
 * テストページ用のコンポーネント
 * ビルド時にレンダリングをする場合
 */
const TestPage1 = ({ postData, a }) => {
  console.log(postData);
  console.log("props.a: ", a);
  return (
    <div>
      <div>foobar</div>
      <div>
        <Link href="/posts/TestPage2?id=123456789">2222222</Link>
      </div>
      <Link href="/">←back</Link>
      <Image src="/images/o.jpg" height={144} width={200} />
    </div>
  );
};

export const getStaticProps = async () => {
  console.log("getStaticProps");
  // ここで上のTestPage1にpropsを渡すことができる
  return { props: { a: "foo" } };
};

export default TestPage1;
