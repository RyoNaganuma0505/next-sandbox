import Link from "next/link";
import Image from "next/image";

/**
 * テストページ用のコンポーネント
 * リクエスト後にサーバサイドでレンダリングを行う場合
 */
const TestPage2 = ({ postData, a }) => {
  console.log(postData);
  console.log("props.a: ", a);
  return (
    <div>
      <div>foobar</div>
      <Link href="/">←back</Link>
      <Image src="/images/o.jpg" height={144} width={200} />
    </div>
  );
};

export const getServerSideProps = async (contenxt) => {
  console.log("context: ", contenxt);
  return { props: { b: "this is b" } };
};

export default TestPage2;
